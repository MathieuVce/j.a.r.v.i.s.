import * as THREE from 'three';

/**
 * Positions des mains/manettes (espace de référence XR = local au rig),
 * alimentées par XRInputEngine et lues par le rig pour afficher les marqueurs,
 * lasers et mains robot. État partagé de toute la couche VR.
 */
export const xrHandState = {
  head: new THREE.Vector3(),
  headQuat: new THREE.Quaternion(),
  pos: [null, null] as (THREE.Vector3 | null)[],
  quat: [null, null] as (THREE.Quaternion | null)[],
  /** Position du poignet (hand-tracking) — sert à poser la main robot à
   *  l'endroit réel de la main, pas seulement un marqueur projeté. */
  wristPos: [null, null] as (THREE.Vector3 | null)[],
  /** Force de pince [0..1] et poing fermé par main : posent les doigts de la
   *  main robot en hand-tracking (la pince/le poing se voient). */
  pinchStrength: [0, 0] as number[],
  fist: [false, false] as boolean[],
  /** Pose du rayon de visée (targetRaySpace) — manettes uniquement. */
  rays: [null, null] as ({ pos: THREE.Vector3; quat: THREE.Quaternion } | null)[],
  /** Distance de l'objet visé par chaque rayon (m), posée chaque frame par
   *  le monde actif — le laser s'arrête dessus au lieu de le traverser. */
  rayHit: [null, null] as (number | null)[],
  pinch: [false, false] as boolean[],
  gamepads: [null, null] as (Gamepad | null)[],
  /** Remis à true chaque frame par un monde qui dessine ses propres mains
   *  (ex. baguettes de la batterie) pour masquer les sphères marqueurs. */
  hideMarkers: false,
  /** Remis à true chaque frame quand une planète est tenue en main :
   *  les lasers traverseraient l'objet tenu, on les coupe. */
  hideRays: false,
  /** Index de la main qui tient une planète : elle s'ouvre paume vers le haut
   *  comme pour porter un ballon. null = aucune. Re-posé chaque frame. */
  cradleHand: null as number | null,
};
