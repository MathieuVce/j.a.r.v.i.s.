import type { HandLandmarkerResult, NormalizedLandmark } from '@mediapipe/tasks-vision';
import { clamp, deadzoneJoystick } from '../utils/math';

export interface HandState {
  present: boolean;
  /** Position curseur lissée, écran-normalisée [0..1], déjà mirrorée. */
  cursor: { x: number; y: number };
  pinching: boolean;
  /** 0 = doigts écartés, 1 = pince fermée. */
  pinchStrength: number;
  openPalm: boolean;
  /** Poing fermé (geste de charge / retour / pulse). */
  fist: boolean;
  /** Nombre de doigts tendus (pouce exclu), 0-4. */
  fingersUp: number;
  /** Index + majeur tendus seulement (✌️) — change de palette. */
  victory: boolean;
  /** Index + majeur + annulaire tendus (🤟 3 doigts) — change de forme. */
  threeFingers: boolean;
  /** Taille apparente de la main ≈ proximité de la caméra (axe Z). */
  depth: number;
  /** Position 3D réelle de la main en VR (espace de référence XR). */
  xrPos?: { x: number; y: number; z: number };
}

export type Mode = 'idle' | 'hover' | 'grab' | 'orbit' | 'zoom' | 'fist';

export interface GestureState {
  hands: [HandState, HandState];
  primary: HandState | null;
  mode: Mode;
  /**
   * Joystick virtuel (main ouverte) : position de la main par rapport au
   * centre de l'écran, zone morte au milieu, chaque axe dans [-1, 1].
   * Plus la main est loin du centre, plus le mouvement est rapide.
   */
  joystick: { x: number; y: number };
  /**
   * Vitesse de zoom, échelle log par frame. Deux mains pincées :
   * écarter → < 0 (zoom avant), rapprocher → > 0 (zoom arrière).
   */
  zoomVelocity: number;
  /**
   * VR manettes uniquement : valeur brute des sticks gauche / droit (mapping
   * xr-standard, axe Y vers le haut = négatif), ou null pour la webcam, le
   * tactile et le hand-tracking sans manette. Permet à un monde de mapper
   * chaque stick séparément plutôt que via le `joystick` fusionné.
   */
  leftStick?: { x: number; y: number } | null;
  rightStick?: { x: number; y: number } | null;
  grabStart: boolean;
  grabEnd: boolean;
  /** VR : impulsion bouton A (manette droite) — monde suivant. */
  worldNext?: boolean;
  /** VR : impulsion bouton B (manette droite) — monde précédent. */
  worldPrev?: boolean;
  /** VR : clic du stick droit (front montant) — bascule taille des satellites. */
  rightStickClick?: boolean;
  /** VR manettes : impulsion (front montant) de la gâchette avant — sert à
   *  lancer un projectile dans la direction visée (monde Univers).
   *  Gauche = étoile, droite = astéroïde, chacun depuis sa propre manette. */
  fireLeft?: boolean;
  fireRight?: boolean;
  /**
   * VR manettes : part du `zoomVelocity` provenant du zoom à deux gâchettes
   * (0 sinon). Permet à un monde de neutraliser ce zoom tout en gardant le
   * stick et la pince mains nues — l'Univers s'en sert pour réserver les
   * gâchettes au lancer plutôt qu'au zoom.
   */
  triggerZoom?: number;
}

const SMOOTHING = 0.4; // lissage exponentiel du curseur
const PINCH_ON = 0.32; // hystérésis : pince fermée sous ce ratio…
const PINCH_OFF = 0.48; // …et rouverte au-dessus de celui-ci
const ZOOM_GAIN = 1.1; // amplitude du zoom bi-manuel
const ZOOM_MAX = 0.08; // borne anti-pic par frame
function dist(a: NormalizedLandmark, b: NormalizedLandmark): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
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

export class GestureEngine {
  private hands: [HandState, HandState] = [emptyHand(), emptyHand()];
  private prevPinchDist: number | null = null;
  private prevGrabbing = false;

  update(result: HandLandmarkerResult | null): GestureState {
    const prevHands = this.hands;
    const next: [HandState, HandState] = [emptyHand(), emptyHand()];

    if (result) {
      for (let i = 0; i < result.landmarks.length && i < 2; i++) {
        // slot stable par main détectée : "Right" → 0, "Left" → 1
        const label = result.handednesses[i]?.[0]?.categoryName ?? 'Right';
        let slot = label === 'Right' ? 0 : 1;
        if (next[slot].present) slot = slot === 0 ? 1 : 0; // slot déjà pris
        this.readHand(result.landmarks[i], next[slot], prevHands[slot]);
      }
    }
    this.hands = next;

    const present = next.filter((h) => h.present);
    const primary = present[0] ?? null;

    // --- zoom bi-manuel : les deux mains pincées, on écarte ou on rapproche ---
    let zoomVelocity = 0;
    const twoPinch = present.length === 2 && present[0].pinching && present[1].pinching;
    if (twoPinch) {
      const d = Math.max(
        1e-4,
        Math.hypot(
          present[0].cursor.x - present[1].cursor.x,
          present[0].cursor.y - present[1].cursor.y,
        ),
      );
      if (this.prevPinchDist !== null) {
        // écarter (d augmente) → valeur négative → la caméra se rapproche
        zoomVelocity = clamp(-Math.log(d / this.prevPinchDist) * ZOOM_GAIN, -ZOOM_MAX, ZOOM_MAX);
      }
      this.prevPinchDist = d;
    } else {
      this.prevPinchDist = null;
    }

    // --- mode ---
    let mode: Mode = 'idle';
    if (twoPinch) {
      mode = 'zoom';
    } else if (primary?.pinching) {
      mode = 'grab';
    } else if (primary?.openPalm) {
      mode = 'orbit';
    } else if (primary?.fist) {
      mode = 'fist';
    } else if (primary) {
      mode = 'hover';
    }

    // --- joystick : main ouverte, vitesse selon la distance au centre ---
    // courbe quadratique : départ très doux, vitesse max en bord de zone
    const joystick =
      mode === 'orbit' && primary ? deadzoneJoystick(primary.cursor) : { x: 0, y: 0 };

    // --- transitions grab (une seule main pincée) ---
    const grabbing = mode === 'grab';
    const grabStart = grabbing && !this.prevGrabbing;
    const grabEnd = !grabbing && this.prevGrabbing;
    this.prevGrabbing = grabbing;

    return { hands: next, primary, mode, joystick, zoomVelocity, grabStart, grabEnd };
  }

  private readHand(lm: NormalizedLandmark[], out: HandState, prev: HandState): void {
    out.present = true;

    // taille de référence de la main (poignet → base du majeur)
    const handSize = Math.max(dist(lm[0], lm[9]), 1e-4);

    // pince : distance pouce/index normalisée par la taille de main
    const pinchRatio = dist(lm[4], lm[8]) / handSize;
    out.pinchStrength = Math.min(
      1,
      Math.max(0, 1 - (pinchRatio - PINCH_ON) / (PINCH_OFF - PINCH_ON)),
    );
    out.pinching = prev.pinching ? pinchRatio < PINCH_OFF : pinchRatio < PINCH_ON;

    // doigts tendus : bout plus loin du poignet que l'articulation médiane
    // ordre : index, majeur, annulaire, auriculaire
    const fingers: [number, number][] = [
      [8, 6],
      [12, 10],
      [16, 14],
      [20, 18],
    ];
    const ext = fingers.map(([tip, pip]) => dist(lm[tip], lm[0]) > dist(lm[pip], lm[0]) * 1.1);
    const extended = ext.filter(Boolean).length;
    out.fingersUp = extended;
    out.openPalm = extended >= 4 && !out.pinching;
    out.fist = extended <= 1 && !out.pinching;
    out.victory = ext[0] && ext[1] && !ext[2] && !ext[3] && !out.pinching;
    out.threeFingers = ext[0] && ext[1] && ext[2] && !ext[3] && !out.pinching;
    out.depth = handSize;

    // curseur = milieu pouce/index, mirroré, lissé
    const rawX = 1 - (lm[4].x + lm[8].x) / 2;
    const rawY = (lm[4].y + lm[8].y) / 2;
    if (prev.present) {
      out.cursor.x = prev.cursor.x + (rawX - prev.cursor.x) * SMOOTHING;
      out.cursor.y = prev.cursor.y + (rawY - prev.cursor.y) * SMOOTHING;
    } else {
      out.cursor.x = rawX;
      out.cursor.y = rawY;
    }
  }
}
