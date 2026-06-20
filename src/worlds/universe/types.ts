import * as THREE from 'three';

// Types internes du monde Univers (corps célestes, sites de navigation,
// saut vitesse-lumière, ondes de choc). Extraits de Universe.ts.

export interface Planet {
  mesh: THREE.Mesh;
  spin: number;
  /** Vitesse de rotation manuelle (rad/s) imprimée à la main, décroît par
   *  friction comme un ballon qu'on a fait tourner. */
  spinVel: number;
  home: THREE.Vector3;
  velocity: THREE.Vector3;
  panel: THREE.Sprite;
  /** Rayon scène (échelle de prise en main VR). */
  r: number;
  /** Corps en orbite (stations, satellites) : tourne autour d'un parent au
   *  lieu de flotter autour d'une position fixe. */
  orbit?: { parent: Planet; dist: number; speed: number; incl: number; phase: number };
  /** Trajectoire libre dans l'univers (fusées / navettes errantes) : cible
   *  mobile fonction du temps, vers laquelle l'engin tend par ressort. */
  path?: (t: number) => THREE.Vector3;
  /** Oriente le mesh selon sa vitesse de déplacement (engins en vol). */
  faceVelocity?: boolean;
}

/** Destination de navigation : système solaire, galaxies, trou noir. Le saut
 *  en vitesse-lumière déplace le centre d'orbite de la caméra de l'une à l'autre. */
export interface Site {
  name: string;
  center: THREE.Vector3;
  /** Distance d'orbite par défaut à l'arrivée. */
  radius: number;
  color: number;
  beacon: THREE.Sprite;
}

export interface Warp {
  t: number;
  dur: number;
  from: THREE.Vector3;
  to: THREE.Vector3;
  fromR: number;
  toR: number;
  site: number;
}

export interface Pulse {
  mesh: THREE.Mesh;
  age: number;
}

/** Étoile / astéroïde lancé par le joueur : vole en ligne droite dans la
 *  direction visée, culbute, puis disparaît au loin ou après expiration. */
export interface Projectile {
  mesh: THREE.Object3D;
  velocity: THREE.Vector3;
  spin: THREE.Vector3;
  life: number;
}
