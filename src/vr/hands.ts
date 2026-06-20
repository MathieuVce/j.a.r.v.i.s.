import * as THREE from 'three';
import { CYAN, AMBER } from '../utils/palette';

/**
 * Main robot holographique façon Iron Man (boîtes translucides + arêtes), posée
 * sur la manette ou le poignet en VR, avec ses poses (pointer, poing, coupe).
 */

export interface RobotHand {
  group: THREE.Group;
  fill: THREE.MeshBasicMaterial;
  line: THREE.LineBasicMaterial;
  /** index, majeur, annulaire, auriculaire — racine + phalange distale. */
  fingers: { root: THREE.Group; mid: THREE.Group }[];
  thumb: { root: THREE.Group; mid: THREE.Group };
}

/** Boîte « holo » : remplissage translucide + arêtes lumineuses. */
function holoBox(
  w: number,
  h: number,
  d: number,
  fill: THREE.MeshBasicMaterial,
  line: THREE.LineBasicMaterial,
): THREE.Group {
  const g = new THREE.Group();
  const geo = new THREE.BoxGeometry(w, h, d);
  g.add(new THREE.Mesh(geo, fill));
  g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), line));
  return g;
}

function buildFinger(
  len1: number,
  len2: number,
  w: number,
  fill: THREE.MeshBasicMaterial,
  line: THREE.LineBasicMaterial,
): { root: THREE.Group; mid: THREE.Group } {
  const root = new THREE.Group();
  const s1 = holoBox(w, 0.014, len1, fill, line);
  s1.position.z = -len1 / 2;
  root.add(s1);
  const mid = new THREE.Group();
  mid.position.z = -len1;
  const s2 = holoBox(w * 0.85, 0.013, len2, fill, line);
  s2.position.z = -len2 / 2;
  mid.add(s2);
  root.add(mid);
  return { root, mid };
}

/**
 * Main robot façon Iron Man, construite en boîtes holographiques.
 * Repère local : paume vers -Y, doigts vers -Z (l'index s'aligne sur le
 * rayon de visée de la manette). La gauche est le miroir de la droite.
 */
export function makeRobotHand(rig: THREE.Group, left: boolean): RobotHand {
  const fill = new THREE.MeshBasicMaterial({
    color: CYAN,
    transparent: true,
    opacity: 0.28,
    side: THREE.DoubleSide, // le miroir (scale.x = -1) inverse les faces
    depthWrite: false,
  });
  const line = new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.9 });
  const group = new THREE.Group();
  group.add(holoBox(0.075, 0.02, 0.085, fill, line)); // paume

  // index → auriculaire (main droite : l'index côté pouce, à -X)
  const lens: [number, number][] = [
    [0.038, 0.034],
    [0.042, 0.036],
    [0.038, 0.033],
    [0.03, 0.026],
  ];
  const fingers = [-0.027, -0.009, 0.009, 0.027].map((x, i) => {
    const f = buildFinger(lens[i][0], lens[i][1], 0.014, fill, line);
    f.root.position.set(x, 0, -0.0425);
    group.add(f.root);
    return f;
  });

  const thumb = buildFinger(0.034, 0.03, 0.016, fill, line);
  thumb.root.position.set(-0.0375, 0, -0.005);
  thumb.root.rotation.y = 0.85;
  group.add(thumb.root);

  if (left) group.scale.x = -1;
  group.visible = false;
  rig.add(group);
  return { group, fill, line, fingers, thumb };
}

/** Pose : index suit la gâchette (pointer), les autres doigts suivent le grip
 *  (fermer le poing = attraper). */
export function poseHand(h: RobotHand, trigger: number, squeeze: number, pinch: boolean): void {
  // rotation négative autour de X = repli vers la paume (-Y)
  const idx = 0.1 + trigger * 1.0;
  h.fingers[0].root.rotation.x = -idx * 0.7;
  h.fingers[0].mid.rotation.x = -idx * 0.8;
  const curl = 1.1 + squeeze * 0.5;
  for (let i = 1; i < 4; i++) {
    h.fingers[i].root.rotation.x = -curl * 0.75;
    h.fingers[i].mid.rotation.x = -curl * 0.85;
  }
  h.thumb.root.rotation.x = -(0.15 + trigger * 0.55);
  h.thumb.mid.rotation.x = -trigger * 0.4;

  const color = pinch ? AMBER : CYAN;
  h.fill.color.setHex(color);
  h.line.color.setHex(color);
}

/**
 * Pose pour le hand-tracking (mains nues) : au repos la main est ouverte,
 * doigts quasi tendus ; la pince replie l'index vers le pouce selon sa force,
 * le poing referme tous les doigts. Contrairement à `poseHand` (manette, où
 * les doigts hors index restent repliés sur la poignée), ici l'état ouvert
 * doit vraiment paraître ouvert.
 */
export function poseTrackedHand(
  h: RobotHand,
  pinchStrength: number,
  fist: boolean,
  pinch: boolean,
): void {
  const baseCurl = fist ? 1.25 : 0.12; // poing fermé / main ouverte presque droite
  for (let i = 1; i < 4; i++) {
    h.fingers[i].root.rotation.x = -baseCurl * 0.8;
    h.fingers[i].mid.rotation.x = -baseCurl;
  }
  const idx = fist ? 1.25 : 0.1 + pinchStrength * 1.0;
  h.fingers[0].root.rotation.x = -idx * 0.7;
  h.fingers[0].mid.rotation.x = -idx * 0.8;
  const th = fist ? 1.0 : 0.15 + pinchStrength * 0.6;
  h.thumb.root.rotation.x = -th * 0.6;
  h.thumb.mid.rotation.x = -pinchStrength * 0.4;

  const color = pinch ? AMBER : CYAN;
  h.fill.color.setHex(color);
  h.line.color.setHex(color);
}

/** Roulis de 180° autour de l'axe de visée : retourne la paume (-Y) vers le
 *  haut (+Y) sans changer le cap des doigts (-Z). */
export const PALM_UP = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI);

/** Main ouverte en coupe, paume vers le haut : on tient une planète comme un
 *  ballon, les doigts légèrement repliés autour. */
export function poseCradle(h: RobotHand): void {
  for (let i = 0; i < 4; i++) {
    h.fingers[i].root.rotation.x = -0.5;
    h.fingers[i].mid.rotation.x = -0.65;
  }
  h.thumb.root.rotation.x = -0.35;
  h.thumb.mid.rotation.x = -0.25;
  h.fill.color.setHex(AMBER);
  h.line.color.setHex(AMBER);
}
