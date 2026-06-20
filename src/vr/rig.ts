import * as THREE from 'three';
import { CYAN, AMBER } from '../utils/palette';
import { xrHandState } from './state';
import {
  type RobotHand,
  makeRobotHand,
  poseHand,
  poseTrackedHand,
  poseCradle,
  PALM_UP,
} from './hands';
import { makeHelpPanel } from './helpPanel';

/**
 * Rig XR d'un monde : conteneur qui reçoit la pose orbitale de la caméra (le
 * casque ajoute la sienne par-dessus) et héberge marqueurs, lasers, mains robot
 * et panneau d'aide. `updateMarkers` reflète chaque frame l'état des entrées.
 */

const rigs = new WeakMap<THREE.Camera, THREE.Group>();

/** Les caméras des mondes ont un plan near jusqu'à 1 : on projette les
 *  marqueurs à distance fixe devant la tête pour qu'ils restent visibles. */
const MARKER_DIST = 3;
/** Longueur du trait laser qui part de chaque manette vers l'avant. */
const LASER_LEN = 6;

function makeMarkers(rig: THREE.Group): THREE.Mesh[] {
  return [0, 1].map(() => {
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 16, 12),
      new THREE.MeshBasicMaterial({
        color: CYAN,
        transparent: true,
        opacity: 0.85,
        depthTest: false,
      }),
    );
    marker.renderOrder = 999;
    marker.visible = false;
    rig.add(marker);
    return marker;
  });
}

/** Trait laser façon pointeur VR : dégradé qui s'estompe vers le bout. */
function makeLasers(rig: THREE.Group): THREE.Line[] {
  return [0, 1].map(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array([0, 0, 0, 0, 0, -LASER_LEN]), 3),
    );
    geo.setAttribute(
      'color',
      new THREE.BufferAttribute(new Float32Array([1, 1, 1, 0.05, 0.05, 0.05]), 3),
    );
    const laser = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        color: CYAN,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthTest: false,
      }),
    );
    laser.renderOrder = 998;
    laser.visible = false;
    rig.add(laser);
    return laser;
  });
}

export function updateMarkers(rig: THREE.Group): void {
  const markers = rig.userData.markers as THREE.Mesh[];
  const lasers = rig.userData.lasers as THREE.Line[];
  const robotHands = rig.userData.robotHands as RobotHand[];
  const laserLen = rig.userData.laserLen as number[];
  const hide = xrHandState.hideMarkers;
  const hideRays = xrHandState.hideRays;
  const cradle = xrHandState.cradleHand;
  xrHandState.hideMarkers = false; // consommés : à re-poser chaque frame
  xrHandState.hideRays = false;
  xrHandState.cradleHand = null;
  for (let i = 0; i < 2; i++) {
    const pos = xrHandState.pos[i];
    const ray = xrHandState.rays[i];
    const marker = markers[i];
    const laser = lasers[i];
    const hand = robotHands[i];
    const color = xrHandState.pinch[i] ? AMBER : CYAN;

    if (ray && !hide) {
      // --- manette : main robot posée sur le rayon, l'index pointe avec ---
      const gp = xrHandState.gamepads[i];
      const trigger = gp?.buttons[0]?.value ?? 0;
      const squeeze = gp?.buttons[1]?.value ?? 0;
      hand.group.visible = true;
      if (i === cradle) {
        // tient une planète : paume vers le haut, doigts en coupe
        hand.group.quaternion.copy(ray.quat).multiply(PALM_UP);
        hand.group.position
          .copy(ray.pos)
          .add(new THREE.Vector3(0, -0.04, 0.02).applyQuaternion(ray.quat));
        poseCradle(hand);
      } else {
        hand.group.quaternion.copy(ray.quat);
        // paume en retrait pour que le bout de l'index touche l'origine du rayon
        hand.group.position
          .copy(ray.pos)
          .add(new THREE.Vector3(0, -0.015, 0.055).applyQuaternion(ray.quat));
        poseHand(hand, trigger, squeeze, xrHandState.pinch[i]);
      }

      // laser coupé à l'objet visé ; masqué si une planète est tenue en main.
      // Longueur lissée : la visée ne « saute » plus en balayant les objets.
      const targetLen = xrHandState.rayHit[i] ?? LASER_LEN;
      laserLen[i] += (targetLen - laserLen[i]) * 0.35;
      const len = laserLen[i];
      laser.visible = !hideRays;
      marker.visible = !hideRays;
      if (!hideRays) {
        laser.position.copy(ray.pos);
        laser.quaternion.copy(ray.quat);
        laser.scale.z = len / LASER_LEN;
        (laser.material as THREE.LineBasicMaterial).color.setHex(color);
        // réticule au point d'impact : échelle ∝ distance pour garder une
        // taille apparente constante, quel que soit l'objet visé
        marker.scale.setScalar(THREE.MathUtils.clamp(len / 3.5, 0.3, 60));
        marker.position
          .copy(ray.pos)
          .addScaledVector(new THREE.Vector3(0, 0, -1).applyQuaternion(ray.quat), len);
      }
    } else {
      // --- main nue (hand-tracking) : on dessine la main robot à la position
      //     réelle du poignet (orientation WebXR : doigts -Z, paume -Y, comme
      //     notre modèle), plus un réticule projeté pour la visée ---
      const wrist = xrHandState.wristPos[i];
      const wquat = xrHandState.quat[i];
      if (wrist && wquat && !hide) {
        hand.group.visible = true;
        hand.group.quaternion.copy(wquat);
        // poignet → centre paume : on avance un peu vers les doigts (-Z local)
        hand.group.position.copy(wrist).add(new THREE.Vector3(0, 0, -0.04).applyQuaternion(wquat));
        poseTrackedHand(
          hand,
          xrHandState.pinchStrength[i],
          xrHandState.fist[i],
          xrHandState.pinch[i],
        );
      } else {
        hand.group.visible = false;
      }
      laser.visible = false;
      // réticule de visée : projeté à distance fixe dans la direction de la main
      marker.visible = !hide && pos !== null;
      marker.scale.setScalar(1);
      if (pos) {
        const dir = pos.clone().sub(xrHandState.head).normalize();
        marker.position.copy(xrHandState.head).addScaledVector(dir, MARKER_DIST);
      }
    }
    (marker.material as THREE.MeshBasicMaterial).color.setHex(color);
  }
}

/** Rig XR d'un monde (créé à la demande) : les objets qui doivent suivre le
 *  joueur — batterie, baguettes — s'y attachent en coordonnées local-floor. */
export function getXRRig(scene: THREE.Scene, camera: THREE.Camera): THREE.Group {
  let rig = rigs.get(camera);
  if (!rig) {
    rig = new THREE.Group();
    scene.add(rig);
    rig.add(camera);
    rig.userData.markers = makeMarkers(rig);
    rig.userData.lasers = makeLasers(rig);
    rig.userData.robotHands = [makeRobotHand(rig, false), makeRobotHand(rig, true)];
    rig.userData.laserLen = [LASER_LEN, LASER_LEN];
    rig.userData.helpPanel = makeHelpPanel(rig);
    rigs.set(camera, rig);
  }
  return rig;
}
