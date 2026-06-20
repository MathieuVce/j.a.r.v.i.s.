import * as THREE from 'three';
import type { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { xrHandState } from './state';
import { getXRRig, updateMarkers } from './rig';
import { updateHelpPanel } from './helpPanel';

/**
 * Rendu d'un monde et visée :
 *  - l'EffectComposer (bloom) ne sait pas rendre en stéréo → en VR on rend
 *    directement avec le renderer, sans post-processing ;
 *  - le casque écrase la pose de la caméra → on transfère la pose orbitale du
 *    monde sur le rig parent, le casque ajoute la sienne par-dessus.
 */

const _v2 = new THREE.Vector2();

/**
 * Rayon de visée d'une manette exprimé en coordonnées monde, à partir de la
 * pose orbitale courante de la caméra du monde (le rig XR adopte cette même
 * pose au rendu). Permet aux mondes de viser/attraper le long du laser réel
 * plutôt que via une projection écran approximative — la sélection colle alors
 * exactement au trait du laser.
 */
export function xrWorldRay(i: number, camera: THREE.Camera): THREE.Ray | null {
  const ray = xrHandState.rays[i];
  if (!ray) return null;
  const origin = ray.pos.clone().applyQuaternion(camera.quaternion).add(camera.position);
  const dir = new THREE.Vector3(0, 0, -1)
    .applyQuaternion(ray.quat)
    .applyQuaternion(camera.quaternion)
    .normalize();
  return new THREE.Ray(origin, dir);
}

/**
 * Configure un raycaster pour la main `i` : le long du vrai rayon de la manette
 * en VR, sinon par projection du curseur écran (webcam / tactile).
 */
export function aimRaycaster(
  raycaster: THREE.Raycaster,
  i: number,
  cursor: { x: number; y: number },
  camera: THREE.Camera,
  presenting: boolean,
): void {
  const ray = presenting ? xrWorldRay(i, camera) : null;
  if (ray) {
    raycaster.set(ray.origin, ray.direction);
  } else {
    raycaster.setFromCamera(_v2.set(cursor.x * 2 - 1, -(cursor.y * 2 - 1)), camera);
  }
}

/** Rendu d'un monde : composer hors VR, rendu stéréo direct en VR. */
export function xrRender(
  renderer: THREE.WebGLRenderer,
  composer: EffectComposer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
): void {
  if (!renderer.xr.isPresenting) {
    composer.render();
    return;
  }

  const rig = getXRRig(scene, camera);
  updateMarkers(rig);
  updateHelpPanel(rig);

  // le monde vient de poser position + lookAt sur la caméra (coordonnées
  // monde, le rig étant resté à l'identité) : on déplace cette pose sur le rig
  const pos = camera.position.clone();
  const quat = camera.quaternion.clone();
  rig.position.copy(pos);
  rig.quaternion.copy(quat);
  camera.position.set(0, 0, 0);
  camera.quaternion.identity();

  renderer.render(scene, camera);

  // on restaure tout pour que la logique hors rendu (raycasts, lookAt de la
  // frame suivante) continue de raisonner en coordonnées monde
  rig.position.set(0, 0, 0);
  rig.quaternion.identity();
  camera.position.copy(pos);
  camera.quaternion.copy(quat);
}
