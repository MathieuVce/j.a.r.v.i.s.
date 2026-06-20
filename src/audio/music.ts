/**
 * Moteur musique : lecture (fichier local, URL CORS, ou boucle synthé générée)
 * + analyse temps réel (basses / médiums / aigus, niveau, détection de beat).
 */
export interface AudioFrame {
  bass: number; // 0..1 — énergie 47-235 Hz
  mid: number; // 0..1 — énergie 235 Hz-3,7 kHz
  high: number; // 0..1 — énergie 3,7-12 kHz
  level: number; // 0..1 — énergie globale
  beat: number; // enveloppe de beat, 1 au kick puis décroît
  playing: boolean;
}

const SILENT: AudioFrame = { bass: 0, mid: 0, high: 0, level: 0, beat: 0, playing: false };

/**
 * Horloge d'un morceau de jeu (mode rythme batterie) : référence l'horloge audio
 * pour que le jeu fasse défiler ses notes pile en cadence avec le son.
 */
export interface GameClock {
  ctx: AudioContext;
  startTime: number; // ctx.currentTime du beat 0
  beatDur: number; // durée d'une noire (s)
  loopBeats: number; // longueur de la boucle, en beats
}

export class MusicEngine {
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private master: GainNode | null = null;
  private data = new Uint8Array(512);

  private el: HTMLAudioElement | null = null;
  private elSource: MediaElementAudioSourceNode | null = null;
  private demoTimer: number | null = null;
  private demoPaused = false;

  // backing du mode jeu rythme : basse + accords + arpège, planifiés sur
  // l'horloge audio (aucune percussion : le joueur joue toute la batterie)
  private gameTimer: number | null = null;
  private gameNext = 0; // prochain eighth à planifier (ctx time)
  private gameStep = 0; // index d'eighth depuis le début
  private gameClock: GameClock | null = null;

  private bassAvg = 0;
  private beatEnv = 0;
  private lastBeatAt = 0;

  trackName = '';

  get playing(): boolean {
    if (this.demoTimer !== null || this.gameTimer !== null) return true;
    return !!this.el && !this.el.paused;
  }

  private ensure(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 1024;
      this.analyser.smoothingTimeConstant = 0.78;
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.9;
      this.master.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    void this.ctx.resume();
    return this.ctx;
  }

  private stopAll(): void {
    if (this.demoTimer !== null) {
      clearInterval(this.demoTimer);
      this.demoTimer = null;
    }
    if (this.gameTimer !== null) {
      clearInterval(this.gameTimer);
      this.gameTimer = null;
      this.gameClock = null;
    }
    this.demoPaused = false;
    if (this.el) {
      this.el.pause();
      this.el.removeAttribute('src');
      this.el = null;
    }
    this.elSource?.disconnect();
    this.elSource = null;
  }

  async playFile(file: File): Promise<void> {
    const ctx = this.ensure();
    this.stopAll();
    const el = new Audio(URL.createObjectURL(file));
    el.loop = true;
    this.elSource = ctx.createMediaElementSource(el);
    this.elSource.connect(this.master!);
    this.el = el;
    this.trackName = file.name.replace(/\.[^.]+$/, '').toUpperCase();
    await el.play();
  }

  /** L'URL doit servir les en-têtes CORS (archive.org : OK). */
  async playUrl(url: string, name: string): Promise<void> {
    const ctx = this.ensure();
    this.stopAll();
    const el = new Audio();
    el.crossOrigin = 'anonymous'; // requis pour que l'analyseur reçoive le signal
    el.src = url;
    el.loop = true;
    this.elSource = ctx.createMediaElementSource(el);
    this.elSource.connect(this.master!);
    this.el = el;
    this.trackName = name;
    await el.play();
  }

  /** Boucle synthwave 120 BPM générée en direct — libre de droits, hors-ligne. */
  playDemo(): void {
    const ctx = this.ensure();
    this.stopAll();
    this.trackName = 'SYNTH DEMO 120 BPM';
    const step = 60 / 120 / 2; // croches à 120 BPM
    let next = ctx.currentTime + 0.1;
    let i = 0;
    this.demoTimer = window.setInterval(() => {
      while (next < ctx.currentTime + 0.35) {
        this.scheduleStep(next, i, step);
        next += step;
        i++;
      }
    }, 90);
  }

  private scheduleStep(t: number, i: number, step: number): void {
    const ctx = this.ctx!;
    const out = this.master!;
    const bassNotes = [55, 55, 65.4, 49]; // A1 A1 C2 G1
    const arpNotes = [220, 277.2, 329.6, 440, 329.6, 277.2];

    if (i % 2 === 0) {
      // kick
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.setValueAtTime(150, t);
      o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
      g.gain.setValueAtTime(0.85, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      o.connect(g).connect(out);
      o.start(t);
      o.stop(t + 0.3);

      // ligne de basse
      const note = bassNotes[Math.floor(i / 2) % bassNotes.length];
      const ob = ctx.createOscillator();
      ob.type = 'sawtooth';
      ob.frequency.value = note;
      const fb = ctx.createBiquadFilter();
      fb.type = 'lowpass';
      fb.frequency.value = 320;
      const gb = ctx.createGain();
      gb.gain.setValueAtTime(0.22, t);
      gb.gain.exponentialRampToValueAtTime(0.01, t + step * 1.8);
      ob.connect(fb).connect(gb).connect(out);
      ob.start(t);
      ob.stop(t + step * 2);
    } else {
      // charley en contretemps
      const len = 0.06;
      const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * len), ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let j = 0; j < d.length; j++) d[j] = (Math.random() * 2 - 1) * (1 - j / d.length);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const f = ctx.createBiquadFilter();
      f.type = 'highpass';
      f.frequency.value = 7000;
      const g = ctx.createGain();
      g.gain.value = 0.22;
      src.connect(f).connect(g).connect(out);
      src.start(t);
    }

    // arpège
    const o2 = ctx.createOscillator();
    o2.type = 'square';
    o2.frequency.value = arpNotes[i % arpNotes.length] * 2;
    const f2 = ctx.createBiquadFilter();
    f2.type = 'bandpass';
    f2.frequency.value = 1800;
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.05, t);
    g2.gain.exponentialRampToValueAtTime(0.004, t + step);
    o2.connect(f2).connect(g2).connect(out);
    o2.start(t);
    o2.stop(t + step);
  }

  // --------------------------------------------------- backing du mode jeu

  /**
   * Démarre le morceau de fond du jeu rythme (basse + nappe + arpège, sans
   * percussion : le joueur joue la batterie par-dessus). Planifié sur l'horloge
   * audio et renvoie cette horloge pour que le jeu cale ses notes en cadence.
   */
  startGameGroove(bpm: number, loopBeats: number, leadIn = 0.18): GameClock {
    const ctx = this.ensure();
    this.stopAll();
    this.trackName = 'DRUM HERO';
    const beatDur = 60 / bpm;
    // décompte avant le beat 0 : laisse aux premières notes le temps de
    // descendre toute l'autoroute (leadIn ≈ durée de défilement d'une gemme)
    const startTime = ctx.currentTime + Math.max(0.18, leadIn);
    this.gameClock = { ctx, startTime, beatDur, loopBeats };
    this.gameStep = 0;
    this.gameNext = startTime;
    const eighth = beatDur / 2;
    this.gameTimer = window.setInterval(() => {
      while (this.gameNext < ctx.currentTime + 0.4) {
        this.scheduleGameStep(this.gameNext, this.gameStep, eighth, loopBeats);
        this.gameNext += eighth;
        this.gameStep++;
      }
    }, 80);
    return this.gameClock;
  }

  stopGameGroove(): void {
    if (this.gameTimer === null) return;
    this.stopAll();
    this.trackName = '';
  }

  /** Un eighth du backing : basse à la noire, nappe par mesure, arpège continu.
   *  Progression Am–F–C–G (une mesure de 4/4 par accord). */
  private scheduleGameStep(t: number, i: number, eighth: number, loopBeats: number): void {
    const ctx = this.ctx!;
    const out = this.master!;
    const beat = Math.floor(i / 2); // index de noire depuis le début
    const onBeat = i % 2 === 0;
    const bar = Math.floor(beat / 4) % (loopBeats / 4); // mesure dans la boucle

    // accords (triades) de la progression, fondamentale en basse
    const CHORDS: number[][] = [
      [220.0, 261.6, 329.6], // Am
      [174.6, 220.0, 261.6], // F
      [261.6, 329.6, 392.0], // C
      [196.0, 246.9, 293.7], // G
    ];
    const chord = CHORDS[bar % CHORDS.length];
    const root = chord[0] / 2; // une octave plus bas

    // basse : une note tenue par noire
    if (onBeat) {
      const ob = ctx.createOscillator();
      ob.type = 'sawtooth';
      ob.frequency.value = root;
      const fb = ctx.createBiquadFilter();
      fb.type = 'lowpass';
      fb.frequency.value = 340;
      const gb = ctx.createGain();
      gb.gain.setValueAtTime(0.26, t);
      gb.gain.exponentialRampToValueAtTime(0.01, t + eighth * 1.8);
      ob.connect(fb).connect(gb).connect(out);
      ob.start(t);
      ob.stop(t + eighth * 2);
    }

    // nappe d'accord, attaque douce, au premier temps de chaque mesure
    if (beat % 4 === 0 && onBeat) {
      for (const f of chord) {
        const o = ctx.createOscillator();
        o.type = 'triangle';
        o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.05, t + 0.25);
        g.gain.exponentialRampToValueAtTime(0.004, t + eighth * 7);
        o.connect(g).connect(out);
        o.start(t);
        o.stop(t + eighth * 8);
      }
    }

    // arpège brillant sur les eighths (mouvement + repère rythmique)
    const o2 = ctx.createOscillator();
    o2.type = 'square';
    o2.frequency.value = chord[i % chord.length] * 2;
    const f2 = ctx.createBiquadFilter();
    f2.type = 'bandpass';
    f2.frequency.value = 2000;
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.04, t);
    g2.gain.exponentialRampToValueAtTime(0.003, t + eighth);
    o2.connect(f2).connect(g2).connect(out);
    o2.start(t);
    o2.stop(t + eighth);
  }

  /** Contexte audio partagé pour des sons externes (batterie VR) : routés
   *  dans le master, ils passent aussi par l'analyseur. */
  output(): { ctx: AudioContext; out: GainNode } {
    this.ensure();
    return { ctx: this.ctx!, out: this.master! };
  }

  /** Pause/reprise de la source courante. Renvoie l'état "en lecture". */
  togglePlay(): boolean {
    if (this.el) {
      if (this.el.paused) void this.el.play();
      else this.el.pause();
    } else if (this.demoTimer !== null) {
      clearInterval(this.demoTimer);
      this.demoTimer = null;
      this.demoPaused = true;
    } else if (this.demoPaused) {
      this.playDemo();
    }
    return this.playing;
  }

  /** Analyse de la frame courante — à appeler une fois par frame de rendu. */
  frame(): AudioFrame {
    if (!this.analyser || !this.playing) {
      this.beatEnv *= 0.9;
      return { ...SILENT, beat: this.beatEnv };
    }
    this.analyser.getByteFrequencyData(this.data);
    const avg = (a: number, b: number): number => {
      let s = 0;
      for (let i = a; i < b; i++) s += this.data[i];
      return s / ((b - a) * 255);
    };
    const bass = avg(1, 5);
    const mid = avg(5, 80);
    const high = avg(80, 256);
    const level = avg(1, 256);

    // détection de beat : pic de basses au-dessus de la moyenne glissante
    this.bassAvg += (bass - this.bassAvg) * 0.04;
    const now = performance.now();
    if (bass > this.bassAvg * 1.3 + 0.04 && now - this.lastBeatAt > 260) {
      this.beatEnv = 1;
      this.lastBeatAt = now;
    }
    this.beatEnv *= 0.92;

    return { bass, mid, high, level, beat: this.beatEnv, playing: true };
  }
}
