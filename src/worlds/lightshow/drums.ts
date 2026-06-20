import * as THREE from 'three';
import { xrHandState } from '../../vr';

/**
 * Batterie VR du monde musique : les manettes (ou les mains nues) deviennent
 * des baguettes, un kit néon — caisse claire, toms, charley, crash, ride,
 * grosse caisse — est posé devant le joueur, et chaque frappe joue un son
 * synthétisé + renvoie une impulsion (DrumFrame) que le light show fusionne
 * avec l'analyse musique : les effets 3D bougent au rythme des coups.
 *
 * Tout vit dans l'espace local du rig XR (référence local-floor) : sol à
 * y = 0, joueur debout autour de l'origine, face à -Z (vers la scène).
 */

export interface DrumAudioOut {
  ctx: AudioContext;
  out: GainNode;
}

/** Contribution des frappes au mix des effets (mêmes échelles qu'AudioFrame). */
export interface DrumFrame {
  bass: number;
  mid: number;
  high: number;
  level: number;
  beat: number;
}

export type Kind = 'kick' | 'snare' | 'hat' | 'tom' | 'floor' | 'crash' | 'ride';

interface PadSpec {
  kind: Kind;
  x: number;
  y: number;
  z: number;
  r: number;
  color: number;
  cymbal?: boolean;
  vertical?: boolean; // grosse caisse : peau face au joueur
  pitch?: number; // fondamentale des toms
}

interface Pad {
  spec: PadSpec;
  group: THREE.Group;
  skin: THREE.MeshBasicMaterial;
  rim: THREE.MeshBasicMaterial;
  baseColor: THREE.Color;
  center: THREE.Vector3; // centre de la surface de frappe (espace rig)
  normal: THREE.Vector3;
  flash: number;
  lastHit: number;
}

const STICK_LEN = 0.42;
const HIT_MIN = 0.45; // m/s vers la peau pour déclencher…
const HIT_MAX = 4.0; // …et vitesse de frappe pleine puissance
const REFRACTORY = 0.09; // s entre deux frappes d'un même fût
const STAND_FAR = 46; // recul « 3e personne » face à la scène
const STAND_NEAR = 26;

// réglage live de la position du kit au stick gauche : hauteur (Y) et
// profondeur (Z), en mètres, autour de la disposition de base.
const KIT_ADJUST_RATE = 0.6; // m/s à fond de course
const KIT_Y_RANGE = 0.4; // ± hauteur
const KIT_Z_RANGE = 0.45; // ± profondeur
const STICK_DEADZONE = 0.2;
// gâchette (trigger) = pédale de grosse caisse : « pousser le pied »
const KICK_PEDAL_MIN = 0.5;
// la baguette plonge légèrement par rapport à l'axe de la manette,
// comme une vraie prise de baguette
const TILT = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -0.45);
const WHITE = new THREE.Color(0xffffff);

// disposition classique d'un kit, joueur à l'origine face à -Z.
// Les y ci-dessous sont les hauteurs « assise de batteur » ; KIT_LIFT relève
// tout le set à hauteur de jeu debout (les pieds s'allongent d'autant pour
// rester au sol). Sans incliner le rig (le tilt donnerait le mal de mer en VR).
const KIT_LIFT = 0.28; // m ajoutés à chaque fût/cymbale pour un joueur debout
// une couleur néon UNIQUE par élément (teintes réparties sur la roue : aucune
// en double). Le kick reste vert (« caisson vert »). Mêmes couleurs reprises
// par les voies du guitar hero (rhythm/chart.ts).
const PADS: PadSpec[] = [
  { kind: 'hat', x: -0.52, y: 0.78, z: -0.4, r: 0.16, color: 0xffe14d, cymbal: true }, // jaune
  { kind: 'snare', x: -0.2, y: 0.66, z: -0.52, r: 0.18, color: 0x2ee6ff }, // cyan
  { kind: 'tom', x: -0.14, y: 0.86, z: -0.74, r: 0.14, color: 0xff2ea6, pitch: 175 }, // magenta
  { kind: 'tom', x: 0.16, y: 0.86, z: -0.74, r: 0.14, color: 0x9b4dff, pitch: 130 }, // violet
  { kind: 'floor', x: 0.46, y: 0.62, z: -0.48, r: 0.19, color: 0xff7a1f }, // orange
  { kind: 'crash', x: -0.58, y: 1.12, z: -0.78, r: 0.24, color: 0xff3b3b, cymbal: true }, // rouge
  { kind: 'ride', x: 0.62, y: 1.06, z: -0.78, r: 0.26, color: 0x3d7bff, cymbal: true }, // bleu
  { kind: 'kick', x: 0, y: 0.36, z: -0.92, r: 0.28, color: 0x3dff9b, vertical: true }, // vert
];

/** X (espace kit) de chaque fût, par type — la moyenne pour les types à
 *  plusieurs fûts (toms). L'autoroute de notes aligne ses voies dessus pour
 *  que chaque gemme tombe juste au-dessus de la couleur correspondante. */
export const PAD_X: Partial<Record<Kind, number>> = (() => {
  const acc: Partial<Record<Kind, { x: number; n: number }>> = {};
  for (const p of PADS) {
    const s = acc[p.kind] ?? { x: 0, n: 0 };
    s.x += p.x;
    s.n += 1;
    acc[p.kind] = s;
  }
  const out: Partial<Record<Kind, number>> = {};
  for (const k of Object.keys(acc) as Kind[]) out[k] = acc[k]!.x / acc[k]!.n;
  return out;
})();

/** Bornes X du kit (bords des fûts les plus à gauche/droite) — l'autoroute
 *  étend sa piste sur toute la largeur de la batterie. */
export const KIT_X_MIN = Math.min(...PADS.map((p) => p.x - p.r));
export const KIT_X_MAX = Math.max(...PADS.map((p) => p.x + p.r));

/** Contribution de chaque fût au mix des effets : multiplicateurs de k par bande. */
const HIT_BANDS: Record<Kind, { bass?: number; mid?: number; high?: number; beat?: number }> = {
  kick: { bass: 1, beat: 1 },
  floor: { bass: 0.85, beat: 0.9 },
  tom: { bass: 0.5, mid: 0.75, beat: 0.8 },
  snare: { mid: 0.95, beat: 0.9 },
  hat: { high: 0.8 },
  crash: { high: 1, mid: 0.4, beat: 0.75 },
  ride: { high: 0.7 },
};

export class DrumKit {
  readonly root = new THREE.Group();
  // sous-groupe des fûts/cymbales/pieds : décalé en hauteur/profondeur par le
  // joueur (les baguettes restent dans `root`, collées aux mains).
  private kit = new THREE.Group();
  private kitOffset = new THREE.Vector3();
  private pads: Pad[] = [];
  private sticks: THREE.Group[] = [];
  private prevTip: (THREE.Vector3 | null)[] = [null, null];
  private prevH: number[][] = [[], []];
  private rings: { mesh: THREE.Mesh; age: number }[] = [];
  private env: DrumFrame = { bass: 0, mid: 0, high: 0, level: 0, beat: 0 };
  private time = 0;
  private far = true;
  private prevBtn = false;
  private prevKick = [false, false]; // front montant de la gâchette-pédale

  /** Notifié à chaque frappe — le mode jeu rythme s'y branche pour la notation. */
  onHit: ((kind: Kind, vel: number) => void) | null = null;

  constructor(private audio: () => DrumAudioOut) {
    this.root.visible = false;
    this.root.add(this.kit);
    for (const spec of PADS) this.pads.push(this.buildPad(spec));
    for (let i = 0; i < 2; i++) {
      const stick = this.buildStick();
      this.root.add(stick);
      this.sticks.push(stick);
    }
  }

  /** Recul du poste de batteur face à la scène (clic d'un stick pour alterner). */
  get standDistance(): number {
    return this.far ? STAND_FAR : STAND_NEAR;
  }

  /** Décalage live du kit (hauteur/profondeur) — l'autoroute de notes s'y
   *  accroche pour descendre avec la batterie quand le joueur la repositionne. */
  get offset(): THREE.Vector3 {
    return this.kitOffset;
  }

  attach(rig: THREE.Group): void {
    if (this.root.parent !== rig) rig.add(this.root);
    this.root.visible = true;
  }

  detach(): void {
    this.root.visible = false;
  }

  // ------------------------------------------------------------------ build

  private buildPad(spec: PadSpec): Pad {
    const y = spec.y + KIT_LIFT; // hauteur de jeu debout
    const group = new THREE.Group();
    group.position.set(spec.x, y, spec.z);
    const skin = new THREE.MeshBasicMaterial({
      color: spec.color,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const rim = new THREE.MeshBasicMaterial({ color: spec.color });
    const depth = spec.cymbal ? 0.014 : 0.2;

    const shell = new THREE.Mesh(
      new THREE.CylinderGeometry(spec.r, spec.r, depth, 28, 1, !spec.cymbal),
      spec.cymbal
        ? skin
        : new THREE.MeshStandardMaterial({
            color: 0x0c1020,
            emissive: spec.color,
            emissiveIntensity: 0.08,
            roughness: 0.6,
            transparent: true,
            opacity: 0.85,
          }),
    );
    group.add(shell);
    if (!spec.cymbal) {
      const top = new THREE.Mesh(new THREE.CircleGeometry(spec.r, 28), skin);
      top.rotation.x = -Math.PI / 2;
      top.position.y = depth / 2;
      group.add(top);
    }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(spec.r, 0.012, 8, 40), rim);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = depth / 2;
    group.add(ring);

    if (spec.vertical)
      group.rotation.x = Math.PI / 2; // peau face au joueur
    else if (spec.cymbal) group.rotation.x = 0.16; // cymbale inclinée vers soi

    // pied jusqu'au sol (s'allonge avec la hauteur relevée)
    const leg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.018, y, 8),
      new THREE.MeshBasicMaterial({ color: 0x223044 }),
    );
    leg.position.set(spec.x, y / 2, spec.z);
    this.kit.add(leg);
    this.kit.add(group);

    const normal = new THREE.Vector3(0, 1, 0).applyQuaternion(group.quaternion);
    const center = group.position.clone().addScaledVector(normal, depth / 2);
    return {
      spec,
      group,
      skin,
      rim,
      baseColor: new THREE.Color(spec.color),
      center,
      normal,
      flash: 0,
      lastHit: -1,
    };
  }

  private buildStick(): THREE.Group {
    const g = new THREE.Group();
    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.012, STICK_LEN, 10),
      new THREE.MeshBasicMaterial({ color: 0xe8dcc0 }),
    );
    shaft.rotation.x = -Math.PI / 2; // le fût pointe vers -Z (bout fin devant)
    shaft.position.z = -STICK_LEN / 2;
    g.add(shaft);
    const tip = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0xfff2cf }),
    );
    tip.position.z = -STICK_LEN;
    g.add(tip);
    g.visible = false;
    return g;
  }

  // ----------------------------------------------------------------- update

  /** À appeler chaque frame en VR ; renvoie l'impulsion pour les effets. */
  update(dt: number): DrumFrame {
    this.time += dt;
    const e = this.env;
    e.bass *= Math.exp(-6 * dt);
    e.mid *= Math.exp(-5 * dt);
    e.high *= Math.exp(-4.5 * dt);
    e.level *= Math.exp(-4 * dt);
    e.beat *= Math.exp(-4.5 * dt);

    // clic du stick DROIT : alterne poste reculé / rapproché. Le stick GAUCHE
    // est réservé au démarrage du mode jeu rythme ; A/B/X/Y au monde et à l'aide.
    const btn = xrHandState.gamepads[0]?.buttons[3]?.pressed === true;
    if (btn && !this.prevBtn) this.far = !this.far;
    this.prevBtn = btn;

    this.adjustKit(dt);
    this.pollKickPedal();

    for (let s = 0; s < 2; s++) {
      const pos = xrHandState.pos[s];
      const quat = xrHandState.quat[s];
      const stick = this.sticks[s];
      if (!pos || !quat) {
        stick.visible = false;
        this.prevTip[s] = null;
        continue;
      }
      stick.visible = true;
      stick.position.copy(pos);
      stick.quaternion.copy(quat).multiply(TILT);
      const tip = new THREE.Vector3(0, 0, -STICK_LEN).applyQuaternion(stick.quaternion).add(pos);
      // les fûts vivent dans `kit` (décalé) : on ramène le bout en espace kit
      // pour comparer aux centres, sinon les frappes seraient désalignées.
      const localTip = tip.sub(this.kitOffset);
      const prev = this.prevTip[s];
      const vel = prev && dt > 0 ? localTip.clone().sub(prev).divideScalar(dt) : null;

      this.pads.forEach((pad, p) => {
        const rel = localTip.clone().sub(pad.center);
        const h = rel.dot(pad.normal);
        const radial = rel.addScaledVector(pad.normal, -h).length();
        const ph = this.prevH[s][p];
        // frappe = le bout traverse le plan de la peau vers le bas, dans le
        // rayon du fût, assez vite, hors période réfractaire
        if (vel && ph !== undefined && ph > 0 && h <= 0.015 && radial < pad.spec.r + 0.02) {
          const speed = -vel.dot(pad.normal);
          if (speed > HIT_MIN && this.time - pad.lastHit > REFRACTORY) {
            this.hit(pad, Math.min(1, (speed - HIT_MIN) / (HIT_MAX - HIT_MIN)), s);
          }
        }
        this.prevH[s][p] = h;
      });
      this.prevTip[s] = localTip;
    }

    // flashes des fûts + anneaux d'impact
    for (const pad of this.pads) {
      pad.flash *= Math.exp(-7 * dt);
      pad.skin.opacity = 0.3 + pad.flash * 0.55;
      pad.rim.color.copy(pad.baseColor).lerp(WHITE, pad.flash);
      pad.group.scale.setScalar(1 + pad.flash * 0.06);
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.age += dt;
      r.mesh.scale.setScalar(1 + r.age * 4.5);
      (r.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.7 - r.age * 2);
      if (r.age > 0.36) {
        this.kit.remove(r.mesh);
        r.mesh.geometry.dispose();
        (r.mesh.material as THREE.MeshBasicMaterial).dispose();
        this.rings.splice(i, 1);
      }
    }

    return { ...e };
  }

  /** Stick GAUCHE : Y = hauteur du kit, X = profondeur (vers/loin du joueur).
   *  Déplace le sous-groupe `kit` ; `kitOffset` recale la détection de frappe. */
  private adjustKit(dt: number): void {
    const gp = xrHandState.gamepads[1]; // manette gauche → slot 1
    if (!gp) return;
    const ax = gp.axes[2] ?? 0; // profondeur (gauche/droite)
    const ay = gp.axes[3] ?? 0; // hauteur (avant/arrière)
    const dz = (v: number) => (Math.abs(v) < STICK_DEADZONE ? 0 : v);
    const step = KIT_ADJUST_RATE * dt;
    this.kitOffset.y = THREE.MathUtils.clamp(
      this.kitOffset.y - dz(ay) * step, // stick vers l'avant (ay<0) → monte
      -KIT_Y_RANGE,
      KIT_Y_RANGE,
    );
    this.kitOffset.z = THREE.MathUtils.clamp(
      this.kitOffset.z + dz(ax) * step, // stick à droite → kit vers le joueur
      -KIT_Z_RANGE,
      KIT_Z_RANGE,
    );
    this.kit.position.copy(this.kitOffset);
  }

  /** Gâchette (avant) d'une manette = pédale de grosse caisse : « pousser le
   *  pied » frappe le caisson vert (kick) avec une vélocité analogique. */
  private pollKickPedal(): void {
    const kick = this.pads.find((p) => p.spec.kind === 'kick');
    if (!kick) return;
    for (let i = 0; i < 2; i++) {
      const trig = xrHandState.gamepads[i]?.buttons[0]?.value ?? 0;
      const down = trig > KICK_PEDAL_MIN;
      if (down && !this.prevKick[i] && this.time - kick.lastHit > REFRACTORY) {
        this.hit(kick, Math.min(1, 0.4 + trig * 0.6), i);
      }
      this.prevKick[i] = down;
    }
  }

  private hit(pad: Pad, vel: number, stickIdx: number): void {
    pad.flash = 1;
    pad.lastHit = this.time;
    this.spawnRing(pad);
    this.play(pad.spec, vel);
    this.onHit?.(pad.spec.kind, vel);

    // retour haptique proportionnel à la frappe
    const gp = xrHandState.gamepads[stickIdx] as
      | (Gamepad & { hapticActuators?: { pulse(value: number, ms: number): void }[] })
      | null;
    gp?.hapticActuators?.[0]?.pulse(0.35 + vel * 0.65, 45);

    // impulsion envoyée aux effets du light show (table de contributions)
    const e = this.env;
    const k = 0.55 + vel * 0.45;
    const bands = HIT_BANDS[pad.spec.kind];
    if (bands.bass) e.bass = Math.max(e.bass, k * bands.bass);
    if (bands.mid) e.mid = Math.max(e.mid, k * bands.mid);
    if (bands.high) e.high = Math.max(e.high, k * bands.high);
    if (bands.beat) e.beat = Math.max(e.beat, k * bands.beat);
    e.level = Math.max(e.level, 0.35 + vel * 0.6);
  }

  private spawnRing(pad: Pad): void {
    if (this.rings.length > 8) return;
    const mesh = new THREE.Mesh(
      new THREE.TorusGeometry(pad.spec.r, 0.008, 6, 36),
      new THREE.MeshBasicMaterial({ color: pad.spec.color, transparent: true, opacity: 0.7 }),
    );
    mesh.position.copy(pad.center);
    mesh.quaternion.copy(pad.group.quaternion);
    mesh.rotateX(-Math.PI / 2); // tore dans le plan de la peau
    this.kit.add(mesh); // suit le kit décalé
    this.rings.push({ mesh, age: 0 });
  }

  // ------------------------------------------------------------------ sons

  private play(spec: PadSpec, vel: number): void {
    let a: DrumAudioOut;
    try {
      a = this.audio();
    } catch {
      return; // pas de contexte audio dispo : frappe muette mais visible
    }
    const { ctx, out } = a;
    const t = ctx.currentTime;
    const v = 0.3 + vel * 0.7;

    const tone = (
      type: OscillatorType,
      f0: number,
      f1: number,
      dur: number,
      gain: number,
    ): void => {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur * 0.7);
      const g = ctx.createGain();
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g).connect(out);
      o.start(t);
      o.stop(t + dur + 0.05);
    };

    const noise = (
      filter: BiquadFilterType,
      freq: number,
      dur: number,
      gain: number,
      q = 1,
    ): void => {
      const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) {
        d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 2;
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const f = ctx.createBiquadFilter();
      f.type = filter;
      f.frequency.value = freq;
      f.Q.value = q;
      const g = ctx.createGain();
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      src.connect(f).connect(g).connect(out);
      src.start(t);
    };

    // banc de 6 carrés inharmoniques (façon TR-808) → timbre métallique de
    // cymbale, bien plus crédible qu'un simple bruit filtré
    const metal = (base: number, dur: number, gain: number, hp: number): void => {
      const ratios = [1, 1.41, 1.68, 1.94, 2.34, 2.81];
      const vca = ctx.createGain();
      vca.gain.setValueAtTime(gain, t);
      vca.gain.exponentialRampToValueAtTime(0.001, t + dur);
      const high = ctx.createBiquadFilter();
      high.type = 'highpass';
      high.frequency.value = hp;
      const band = ctx.createBiquadFilter();
      band.type = 'bandpass';
      band.frequency.value = hp * 1.4;
      band.Q.value = 0.5;
      vca.connect(band).connect(high).connect(out);
      for (const r of ratios) {
        const o = ctx.createOscillator();
        o.type = 'square';
        o.frequency.value = base * r;
        o.connect(vca);
        o.start(t);
        o.stop(t + dur + 0.05);
      }
    };

    // synthèse propre à chaque fût (table de voix, indexée par le type)
    const f = spec.pitch ?? 150; // fondamentale des toms
    const voices: Record<Kind, () => void> = {
      // corps sinus avec forte chute de hauteur + claque d'attaque
      kick: () => {
        tone('sine', 165, 45, 0.34, 1.0 * v);
        noise('lowpass', 1600, 0.02, 0.5 * v);
      },
      floor: () => {
        tone('sine', 110, 55, 0.45, 0.85 * v);
        tone('triangle', 150, 80, 0.18, 0.16 * v);
      },
      tom: () => {
        tone('sine', f, f * 0.5, 0.34, 0.6 * v);
        tone('triangle', f * 1.5, f * 0.8, 0.12, 0.14 * v);
      },
      // deux modes de peau + souffle du timbre (bruit aigu à traîne)
      snare: () => {
        tone('triangle', 330, 180, 0.1, 0.22 * v);
        tone('triangle', 185, 120, 0.12, 0.16 * v);
        noise('highpass', 1800, 0.2, 0.5 * v, 0.7);
        noise('bandpass', 3200, 0.14, 0.28 * v, 0.6);
      },
      // charley fermé : éclat métallique court + souffle aigu
      hat: () => {
        metal(326, 0.05, 0.22 * v, 9000);
        noise('highpass', 9000, 0.04, 0.16 * v);
      },
      // longue nappe métallique brillante
      crash: () => {
        metal(290, 1.1, 0.28 * v, 5200);
        noise('highpass', 5000, 0.7, 0.2 * v);
      },
      // ping de cloche + sustain métallique défini
      ride: () => {
        metal(360, 0.55, 0.2 * v, 7000);
        tone('sine', 1180, 1080, 0.4, 0.07 * v);
      },
    };
    voices[spec.kind]();
  }
}
