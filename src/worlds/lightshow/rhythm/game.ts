import type { GameClock, AudioFrame } from '../../../audio/music';
import type { Kind } from '../drums';
import { Highway, type VisibleNote } from './highway';
import { ScorePanel, type Judge } from './scorePanel';
import { BPM, LOOP_BEATS, NOTES, LANE_OF } from './chart';
import * as THREE from 'three';

/**
 * Mode jeu rythme (Guitar Hero batterie). Orchestre l'horloge audio, le cycle
 * de vie des notes, la notation (fenêtres de timing), le score/combo et pilote
 * l'autoroute + le panneau de score. Il ne détecte aucune frappe lui-même : il
 * reçoit les frappes du DrumKit et les note contre la partition.
 */

/** Source audio dont le monde musique a besoin (implémentée par MusicEngine). */
export interface RhythmAudio {
  output(): { ctx: AudioContext; out: GainNode };
  frame(): AudioFrame;
  startGameGroove(bpm: number, loopBeats: number, leadIn?: number): GameClock;
  stopGameGroove(): void;
}

const LEAD = 2.0; // s de descente d'une gemme (fond → ligne de frappe)
const PERFECT = 0.06; // ±s autour du temps cible
const GOOD = 0.13; // ±s
const MISS_AFTER = 0.16; // s après la cible sans frappe = raté

interface NoteInst {
  id: number;
  time: number; // ctx.currentTime cible
  lane: number;
  done: boolean; // jugée (frappée ou ratée)
}

function multiplier(combo: number): number {
  if (combo >= 24) return 4;
  if (combo >= 16) return 3;
  if (combo >= 8) return 2;
  return 1;
}

export class RhythmGame {
  private highway = new Highway();
  private panel = new ScorePanel();
  private clock: GameClock | null = null;
  private running = false;

  private notes = new Map<number, NoteInst>();
  private score = 0;
  private combo = 0;
  private maxCombo = 0;
  private totalJudged = 0;
  private weighted = 0; // somme pondérée pour la précision
  private flash = 0; // boost de flash à reverser au light show

  constructor(private audio: RhythmAudio) {}

  get active(): boolean {
    return this.running;
  }

  attach(rig: THREE.Group): void {
    this.highway.attach(rig);
    this.panel.attach(rig);
  }

  /** Accroche l'autoroute au décalage live du kit (cf. DrumKit.offset). */
  followKit(offset: THREE.Vector3): void {
    this.highway.setOffset(offset);
  }

  toggle(): void {
    if (this.running) this.stop();
    else this.start();
  }

  start(): void {
    this.clock = this.audio.startGameGroove(BPM, LOOP_BEATS, LEAD + 0.5);
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.totalJudged = 0;
    this.weighted = 0;
    this.flash = 0;
    this.notes.clear();
    this.pushStats();
    this.highway.show();
    this.panel.show();
    this.running = true;
  }

  stop(): void {
    if (!this.running) return;
    this.audio.stopGameGroove();
    this.running = false;
    this.notes.clear();
    this.highway.hide();
    this.panel.hide();
  }

  /** Boost de flash accumulé (PARFAIT / combo) — consommé par le light show. */
  popFlash(): number {
    const f = this.flash;
    this.flash = 0;
    return f;
  }

  /** À appeler chaque frame en VR (après DrumKit.update) avec les frappes reçues. */
  update(dt: number, hits: Kind[]): void {
    if (!this.running || !this.clock) return;
    const now = this.clock.ctx.currentTime;

    for (const kind of hits) this.registerHit(kind, now);

    this.ensureInstances(now);

    // ratés + nettoyage des notes passées
    for (const inst of this.notes.values()) {
      if (!inst.done && now > inst.time + MISS_AFTER) {
        inst.done = true;
        this.applyJudge('miss', inst.lane);
      }
      if (inst.time < now - 0.6) this.notes.delete(inst.id);
    }

    // gemmes visibles
    const vis: VisibleNote[] = [];
    for (const inst of this.notes.values()) {
      if (inst.done) continue;
      const u = (inst.time - now) / LEAD;
      if (u < -0.05 || u > 1.05) continue;
      vis.push({ lane: inst.lane, u: Math.max(0, Math.min(1, u)) });
    }
    this.highway.showNotes(vis);
    this.highway.setAudio(this.audio.frame()); // couleurs pulsées sur le fond
    this.highway.update(dt);
    this.panel.update(dt);
  }

  // ------------------------------------------------------------- interne

  /** Crée les instances de notes dont le temps tombe dans la fenêtre visible. */
  private ensureInstances(now: number): void {
    const { startTime, beatDur } = this.clock!;
    const loopDur = LOOP_BEATS * beatDur;
    const horizon = now + LEAD;
    const firstLoop = Math.max(0, Math.floor((now - 0.6 - startTime) / loopDur));
    const lastLoop = Math.floor((horizon - startTime) / loopDur);
    for (let L = firstLoop; L <= lastLoop; L++) {
      for (let n = 0; n < NOTES.length; n++) {
        const time = startTime + (NOTES[n].beat + L * LOOP_BEATS) * beatDur;
        if (time < now - 0.6 || time > horizon) continue;
        const id = L * NOTES.length + n;
        if (!this.notes.has(id)) {
          this.notes.set(id, { id, time, lane: NOTES[n].lane, done: false });
        }
      }
    }
  }

  private registerHit(kind: Kind, now: number): void {
    const lane = LANE_OF[kind];
    if (lane === undefined) return; // fût hors voie (floor/ride) : pas noté
    let best: NoteInst | null = null;
    let bestDt = Infinity;
    for (const inst of this.notes.values()) {
      if (inst.done || inst.lane !== lane) continue;
      const d = Math.abs(inst.time - now);
      if (d < bestDt) {
        bestDt = d;
        best = inst;
      }
    }
    if (best && bestDt <= GOOD) {
      best.done = true;
      this.applyJudge(bestDt <= PERFECT ? 'perfect' : 'good', lane);
    }
    // frappe sans note proche : tolérée (ne casse pas le combo)
  }

  private applyJudge(judge: Judge, lane: number): void {
    if (judge === 'miss') {
      this.combo = 0;
    } else {
      this.combo++;
      this.maxCombo = Math.max(this.maxCombo, this.combo);
      this.score += (judge === 'perfect' ? 100 : 50) * multiplier(this.combo);
      this.flash = Math.max(this.flash, judge === 'perfect' ? 0.7 : 0.4);
    }
    this.totalJudged++;
    this.weighted += judge === 'perfect' ? 1 : judge === 'good' ? 0.6 : 0;
    this.highway.flashLane(lane, judge);
    this.panel.popJudge(judge);
    this.pushStats();
  }

  private pushStats(): void {
    this.panel.set({
      score: this.score,
      combo: this.combo,
      mult: multiplier(this.combo),
      accuracy: this.totalJudged ? this.weighted / this.totalJudged : 1,
    });
  }
}
