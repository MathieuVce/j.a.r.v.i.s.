import * as THREE from 'three';
import { LANES } from './chart';
import { PAD_X, KIT_X_MIN, KIT_X_MAX, type Kind } from '../drums';
import type { AudioFrame } from '../../../audio/music';

/**
 * Autoroute de notes inclinée façon Guitar Hero, en coordonnées locales du rig
 * XR (joueur à l'origine, regard vers -Z). Les voies montent vers l'arrière, les
 * gemmes descendent du fond (u=1) jusqu'à la ligne de frappe (u=0) où le joueur
 * frappe le fût correspondant. En VR il n'y a pas de bloom : le néon vient de
 * matériaux additifs vifs + halos, pas du post-traitement.
 */

const N = LANES.length;
const LANE_W = 0.3;
// X de chaque voie : calé sur le fût correspondant (drums.ts) pour que les
// gemmes tombent juste au-dessus de la bonne couleur. Repli sur un espacement
// uniforme si un type n'a pas de fût.
const LANE_XS = LANES.map((l, i) => PAD_X[l.kind] ?? (i - (N - 1) / 2) * LANE_W);
// la piste s'étend sur toute la largeur de la batterie (bords des fûts),
// même là où aucune voie ne tombe (charley/floor/ride), pour cadrer le kit.
const TRACK_MIN = KIT_X_MIN;
const TRACK_MAX = KIT_X_MAX;
const TRACK_MID = (TRACK_MIN + TRACK_MAX) / 2;
const WIDTH = TRACK_MAX - TRACK_MIN;
// extrémités de l'autoroute (rig-local : y vers le haut, -z vers l'avant)
const HIT_Z = -0.85;
const HIT_Y = 1.45;
const FAR_Z = -7.5;
const FAR_Y = 3.6;
const GEM_POOL = 48;

// quelle bande du fond fait pulser chaque couleur de voie (light show auto).
const LANE_BAND: Record<Kind, 'bass' | 'mid' | 'high'> = {
  kick: 'bass',
  floor: 'bass',
  tom: 'mid',
  snare: 'mid',
  hat: 'high',
  crash: 'high',
  ride: 'high',
};

type Judge = 'perfect' | 'good' | 'miss';
const JUDGE_COLOR: Record<Judge, number> = {
  perfect: 0xffffff,
  good: 0xbfeaff,
  miss: 0xff3b5c,
};

/** Centre X d'une voie : au-dessus du fût correspondant. */
function laneX(lane: number): number {
  return LANE_XS[lane];
}

/** Point de l'autoroute pour (x, u) : u=0 ligne de frappe, u=1 tout au fond. */
function posFor(x: number, u: number, out = new THREE.Vector3()): THREE.Vector3 {
  return out.set(x, HIT_Y + (FAR_Y - HIT_Y) * u, HIT_Z + (FAR_Z - HIT_Z) * u);
}

export interface VisibleNote {
  lane: number;
  u: number; // 0 (ligne de frappe) .. 1 (fond)
}

export class Highway {
  private root = new THREE.Group();
  private gems: THREE.Mesh[] = [];
  private targets: THREE.Mesh[] = [];
  private hitBar!: THREE.Mesh;
  private centerLines: THREE.LineBasicMaterial[] = [];
  private laneFlash = new Array(N).fill(0);
  private laneFlashColor = new Array(N).fill(0xffffff);
  private bands = { bass: 0, mid: 0, high: 0, beat: 0 }; // énergie du fond, lissée
  private t = 0;

  constructor() {
    this.root.visible = false;
    this.buildTracks();
    this.buildHitLine();
    this.buildGemPool();
  }

  attach(rig: THREE.Group): void {
    if (this.root.parent !== rig) rig.add(this.root);
  }
  show(): void {
    this.root.visible = true;
  }
  /** Accroche l'autoroute au décalage live du kit (hauteur/profondeur) : les
   *  gemmes descendent avec la batterie quand le joueur la repositionne. */
  setOffset(offset: THREE.Vector3): void {
    this.root.position.copy(offset);
  }
  hide(): void {
    this.root.visible = false;
  }

  // --------------------------------------------------------------- build

  /** Piste : base sombre pleine largeur du kit + voies colorées + repères. */
  private buildTracks(): void {
    // base de piste continue sur toute la largeur de la batterie (cadre le kit,
    // y compris au-dessus des fûts sans voie : charley/floor/ride).
    this.root.add(this.quad(TRACK_MIN, TRACK_MAX, 0x0a1830, 0.16));

    for (let i = 0; i < N; i++) {
      // bande colorée de voie, calée sur le fût
      this.root.add(this.quad(laneX(i) - LANE_W / 2, laneX(i) + LANE_W / 2, LANES[i].color, 0.1));
      // ligne centrale de voie, dans sa couleur (repère de la voie + pulsation)
      const center = this.line(posFor(laneX(i), 0), posFor(laneX(i), 1), LANES[i].color, 0.25);
      this.centerLines.push(center.material as THREE.LineBasicMaterial);
      this.root.add(center);
    }

    // séparateurs : aux milieux entre voies triées + rails aux bords du kit (les
    // voies n'étant plus régulières, on ne peut pas se baser sur un pas fixe).
    const xs = [...LANE_XS].sort((u, v) => u - v);
    const edges = [TRACK_MIN];
    for (let i = 0; i < xs.length - 1; i++) edges.push((xs[i] + xs[i + 1]) / 2);
    edges.push(TRACK_MAX);
    for (const x of edges) {
      this.root.add(this.line(posFor(x, 0), posFor(x, 1), 0x6fd9ff, 0.4));
    }
  }

  /** Quad plat de la ligne de frappe (u=0) au fond (u=1), entre deux X. */
  private quad(xL: number, xR: number, color: number, opacity: number): THREE.Mesh {
    const a = posFor(xL, 0);
    const b = posFor(xR, 0);
    const c = posFor(xR, 1);
    const d = posFor(xL, 1);
    const geo = new THREE.BufferGeometry();
    // prettier-ignore
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
      a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z,
      a.x, a.y, a.z, c.x, c.y, c.z, d.x, d.y, d.z,
    ]), 3));
    return new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
  }

  private line(p0: THREE.Vector3, p1: THREE.Vector3, color: number, opacity: number): THREE.Line {
    const geo = new THREE.BufferGeometry().setFromPoints([p0.clone(), p1.clone()]);
    return new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
  }

  /** Ligne de frappe : barre lumineuse + pastilles cibles par voie. */
  private buildHitLine(): void {
    this.hitBar = new THREE.Mesh(
      new THREE.BoxGeometry(WIDTH + 0.12, 0.05, 0.12),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.hitBar.position.copy(posFor(TRACK_MID, 0));
    this.root.add(this.hitBar);

    for (let i = 0; i < N; i++) {
      const target = new THREE.Mesh(
        new THREE.PlaneGeometry(LANE_W * 0.82, 0.16),
        new THREE.MeshBasicMaterial({
          color: LANES[i].color,
          transparent: true,
          opacity: 0.35,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      target.position.copy(posFor(laneX(i), 0));
      target.position.y += 0.02;
      target.rotation.x = -Math.PI / 2.2; // presque à plat, légèrement vers le joueur
      this.targets.push(target);
      this.root.add(target);
    }
  }

  /** Pool de gemmes (diamants) réutilisées d'une frame à l'autre. */
  private buildGemPool(): void {
    const geo = new THREE.OctahedronGeometry(0.12, 0);
    for (let i = 0; i < GEM_POOL; i++) {
      const gem = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      gem.visible = false;
      gem.scale.set(1, 0.6, 1); // aplati en losange
      this.gems.push(gem);
      this.root.add(gem);
    }
  }

  // -------------------------------------------------------------- update

  /** Place les gemmes visibles ; cache le reste du pool. */
  showNotes(notes: VisibleNote[]): void {
    const p = new THREE.Vector3();
    for (let i = 0; i < this.gems.length; i++) {
      const gem = this.gems[i];
      const note = notes[i];
      if (!note) {
        gem.visible = false;
        continue;
      }
      gem.visible = true;
      posFor(laneX(note.lane), note.u, p);
      gem.position.copy(p);
      // grossit et s'éclaire en approchant de la ligne de frappe
      const near = 1 - note.u;
      const s = 0.85 + near * 0.5;
      gem.scale.set(s, s * 0.62, s);
      const mat = gem.material as THREE.MeshBasicMaterial;
      mat.color.setHex(LANES[note.lane].color);
      mat.opacity = 0.55 + near * 0.45;
      gem.rotation.y = this.t * 2 + i;
    }
  }

  flashLane(lane: number, judge: Judge): void {
    this.laneFlash[lane] = 1;
    this.laneFlashColor[lane] = JUDGE_COLOR[judge];
  }

  /** Énergie du fond (bandes lissées) : fait pulser toutes les couleurs au
   *  rythme de la musique, même sans frappe. */
  setAudio(f: AudioFrame): void {
    const b = this.bands;
    b.bass = Math.max(f.bass, b.bass * Math.exp(-6 * 0.016));
    b.mid = Math.max(f.mid, b.mid * Math.exp(-6 * 0.016));
    b.high = Math.max(f.high, b.high * Math.exp(-6 * 0.016));
    b.beat = f.beat;
  }

  /** Anime la pulsation de la ligne de frappe et la décroissance des flashs. */
  update(dt: number): void {
    this.t += dt;
    const pulse = 0.7 + 0.3 * Math.sin(this.t * 6);
    (this.hitBar.material as THREE.MeshBasicMaterial).opacity =
      0.6 + pulse * 0.4 + this.bands.beat * 0.3;

    for (let i = 0; i < N; i++) {
      // glow rythmé par la bande du fond associée à la couleur de la voie
      const amb = this.bands[LANE_BAND[LANES[i].kind]];
      this.laneFlash[i] = Math.max(0, this.laneFlash[i] - dt * 3.2);
      const f = this.laneFlash[i];
      const mat = this.targets[i].material as THREE.MeshBasicMaterial;
      mat.color.copy(
        new THREE.Color(LANES[i].color).lerp(new THREE.Color(this.laneFlashColor[i]), f),
      );
      mat.opacity = Math.min(1, 0.3 + f * 0.7 + amb * 0.5);
      this.targets[i].scale.setScalar(1 + f * 0.6 + amb * 0.25);
      // la ligne centrale de la voie respire avec la même bande
      this.centerLines[i].opacity = Math.min(1, 0.25 + amb * 0.55);
    }
  }
}
