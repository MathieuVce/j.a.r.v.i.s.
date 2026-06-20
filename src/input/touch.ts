import type { GestureState, HandState, Mode } from './gestures';

/**
 * Fallback tactile (et souris) : synthétise un GestureState identique à celui
 * du tracking de mains, pour que les trois mondes fonctionnent sans webcam.
 *
 * Mapping :
 *  - 1 doigt glissé  → joystick virtuel (✋ main ouverte) : la distance au
 *    point de départ donne la vitesse, comme un stick analogique
 *  - tap bref        → pince éphémère (🤏) : sélection de ville / saisie / flash
 *  - appui long      → poing (✊) : bulle de charge retour globe, beat manuel
 *  - 2 doigts        → pincement : zoom / altitude / distance caméra (🤏🤏)
 */

const TAP_MAX_MS = 280; // au-delà, ce n'est plus un tap
const DRAG_THRESHOLD = 12; // px avant de basculer en glissement
const HOLD_MS = 550; // appui long immobile → poing
const JOY_RANGE = 0.3; // course du joystick, fraction du petit côté de l'écran
const ZOOM_GAIN = 1.1;
const ZOOM_MAX = 0.08; // même borne anti-pic que le moteur de gestes

interface TouchPoint {
  x: number;
  y: number;
  startX: number;
  startY: number;
  startTime: number;
}

function emptyHand(): HandState {
  return {
    present: false,
    cursor: { x: 0.5, y: 0.5 },
    pinching: false,
    pinchStrength: 0,
    openPalm: false,
    fist: false,
    fingersUp: 0,
    victory: false,
    threeFingers: false,
    depth: 0.15,
  };
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

export class TouchEngine {
  private pointers = new Map<number, TouchPoint>();
  private prevPinchDist: number | null = null;
  private prevGrabbing = false;
  /** Tap en attente : joué sur 2 frames (pince → relâche). */
  private tap: { x: number; y: number; phase: number } | null = null;

  constructor(el: HTMLElement) {
    el.style.touchAction = 'none';

    el.addEventListener('pointerdown', (e) => {
      el.setPointerCapture(e.pointerId);
      this.pointers.set(e.pointerId, {
        x: e.clientX,
        y: e.clientY,
        startX: e.clientX,
        startY: e.clientY,
        startTime: performance.now(),
      });
      this.prevPinchDist = null;
    });

    el.addEventListener('pointermove', (e) => {
      const p = this.pointers.get(e.pointerId);
      if (p) {
        p.x = e.clientX;
        p.y = e.clientY;
      }
    });

    const release = (e: PointerEvent) => {
      const p = this.pointers.get(e.pointerId);
      this.pointers.delete(e.pointerId);
      this.prevPinchDist = null;
      if (!p || this.pointers.size > 0) return;
      const held = performance.now() - p.startTime;
      const moved = Math.hypot(p.x - p.startX, p.y - p.startY);
      if (held < TAP_MAX_MS && moved < DRAG_THRESHOLD) {
        this.tap = { x: p.x, y: p.y, phase: 0 };
      }
    };
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
  }

  /** Vrai tant qu'une interaction tactile est en cours (prioritaire sur les mains). */
  get active(): boolean {
    return this.pointers.size > 0 || this.tap !== null || this.prevGrabbing;
  }

  update(): GestureState {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const hands: [HandState, HandState] = [emptyHand(), emptyHand()];
    const joystick = { x: 0, y: 0 };
    let zoomVelocity = 0;
    let mode: Mode = 'idle';
    let primary: HandState | null = null;

    const pts = [...this.pointers.values()];

    if (this.tap) {
      // tap : pince d'une frame puis relâche, au point touché
      const hand = hands[0];
      hand.present = true;
      hand.cursor.x = this.tap.x / w;
      hand.cursor.y = this.tap.y / h;
      hand.pinching = this.tap.phase === 0;
      hand.pinchStrength = hand.pinching ? 1 : 0;
      primary = hand;
      mode = hand.pinching ? 'grab' : 'hover';
      if (++this.tap.phase >= 2) this.tap = null;
    } else if (pts.length >= 2) {
      // deux doigts : zoom par écartement
      const [a, b] = pts;
      const d = Math.max(1e-4, Math.hypot(a.x - b.x, a.y - b.y) / Math.min(w, h));
      if (this.prevPinchDist !== null) {
        // écarter (d augmente) → valeur négative → la caméra se rapproche
        zoomVelocity = clamp(-Math.log(d / this.prevPinchDist) * ZOOM_GAIN, -ZOOM_MAX, ZOOM_MAX);
      }
      this.prevPinchDist = d;
      for (let i = 0; i < 2; i++) {
        hands[i].present = true;
        hands[i].pinching = true;
        hands[i].pinchStrength = 1;
        hands[i].cursor.x = pts[i].x / w;
        hands[i].cursor.y = pts[i].y / h;
      }
      primary = hands[0];
      mode = 'zoom';
    } else if (pts.length === 1) {
      const p = pts[0];
      const hand = hands[0];
      hand.present = true;
      hand.cursor.x = p.x / w;
      hand.cursor.y = p.y / h;
      primary = hand;

      const held = performance.now() - p.startTime;
      const moved = Math.hypot(p.x - p.startX, p.y - p.startY);
      if (moved >= DRAG_THRESHOLD) {
        // joystick virtuel ancré au point de départ
        hand.openPalm = true;
        hand.fingersUp = 4;
        mode = 'orbit';
        const range = Math.min(w, h) * JOY_RANGE;
        // axes inversés (« saisir et tirer le monde ») : glisser vers le bas
        // fait monter la vue, glisser à droite fait tourner vers la gauche
        joystick.x = clamp(-(p.x - p.startX) / range, -1, 1);
        joystick.y = clamp(-(p.y - p.startY) / range, -1, 1);
      } else if (held > HOLD_MS) {
        hand.fist = true;
        mode = 'fist';
      } else {
        mode = 'hover';
      }
    }

    const grabbing = mode === 'grab';
    const grabStart = grabbing && !this.prevGrabbing;
    const grabEnd = !grabbing && this.prevGrabbing;
    this.prevGrabbing = grabbing;

    return { hands, primary, mode, joystick, zoomVelocity, grabStart, grabEnd };
  }
}
