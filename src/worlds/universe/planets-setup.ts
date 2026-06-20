import * as THREE from 'three';
import {
  SOLAR_SYSTEM,
  makePlanetMaterial,
  makeSaturnRings,
  makeAtmosphere,
} from '../../components/planets';
import { makePanel } from './build';
import type { Planet } from './types';

/** Construit les 8 planètes (mesh + anneaux/atmosphères + panneau) et les
 *  ajoute à la scène. Retourne la liste dans l'ordre de SOLAR_SYSTEM (les
 *  lookups par index restent valides). */
export function buildPlanets(scene: THREE.Scene): Planet[] {
  const planets: Planet[] = [];
  // Inclinaisons réelles des orbites sur l'écliptique (deg) et longitude du
  // noeud ascendant (deg), dans l'ordre de SOLAR_SYSTEM. Donnent un système
  // quasi plan mais naturellement gauchi : chaque planète reste centrée sur
  // son orbite, mais les plans orbitaux sont légèrement basculés.
  const ORBIT_INC = [7.0, 3.4, 0, 1.85, 1.3, 2.5, 0.77, 1.77]; // Mercure -> Neptune
  const ORBIT_NODE = [48, 76, 0, 49, 100, 113, 74, 131];
  const DEG = Math.PI / 180;

  // les 8 planètes du système solaire, attrapables + panneaux de données.
  SOLAR_SYSTEM.forEach((s, i) => {
    const angle = (i / SOLAR_SYSTEM.length) * Math.PI * 2 + 0.7;
    // Quaternion d'inclinaison de l'orbite : bascule autour de la ligne des
    // noeuds. Appliqué à la planète ET à son anneau pour qu'ils restent solidaires.
    const orbitTilt = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(Math.cos(ORBIT_NODE[i] * DEG), 0, Math.sin(ORBIT_NODE[i] * DEG)),
      ORBIT_INC[i] * DEG,
    );
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(s.r, 48, 32), makePlanetMaterial(s));
    mesh.position
      .set(Math.cos(angle) * s.dist, 0, Math.sin(angle) * s.dist)
      .applyQuaternion(orbitTilt);

    if (s.kind === 'saturn') {
      mesh.add(makeSaturnRings(s.r));
      mesh.rotation.z = 0.47; // inclinaison de l'axe
    }
    if (s.kind === 'earth') mesh.add(makeAtmosphere(s.r, 0x4aa8ff, 0.16));
    if (s.kind === 'venus') mesh.add(makeAtmosphere(s.r, 0xf0d9a8, 0.1));
    scene.add(mesh);

    const panel = makePanel(s.name, [
      `CLASSE ....... ${s.cls}`,
      `RAYON ........ ${s.radiusKm} KM`,
      `ORBITE ....... ${s.orbitAu} UA`,
      `LUNES ........ ${s.moons}`,
    ]);
    panel.position.copy(mesh.position).y += s.r * 2.4;
    panel.visible = false;
    scene.add(panel);

    planets.push({
      mesh,
      spin: 0.15 + Math.random() * 0.4,
      spinVel: 0,
      home: mesh.position.clone(),
      velocity: new THREE.Vector3(),
      panel,
      r: s.r,
    });

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(s.dist - 0.04, s.dist + 0.04, 128),
      new THREE.MeshBasicMaterial({
        color: s.glow,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
      }),
    );
    // anneau à plat (XZ) puis basculé du même angle que l'orbite de la planète.
    ring.quaternion.multiplyQuaternions(
      orbitTilt,
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
    );
    scene.add(ring);
  });
  return planets;
}
