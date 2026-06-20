import * as THREE from 'three';
import { SOLAR_SYSTEM } from '../../components/planets';
import { makeStation, type StationKind } from '../../components/cosmos';
import { makePanel } from './build';
import type { Planet } from './types';

/** Ajoute les engins (stations en orbite, sondes, fusées/navettes errantes)
 *  à la scène et à la liste des corps. Extrait de Universe pour alléger la
 *  classe ; mêmes objets, même ordre d'insertion qu'avant. */
export function addStations(scene: THREE.Scene, planets: Planet[], earth: Planet): void {
  const mars = planets[SOLAR_SYSTEM.findIndex((s) => s.kind === 'mars')];
  const jupiter = planets[SOLAR_SYSTEM.findIndex((s) => s.kind === 'jupiter')];

  const addCraft = (
    kind: StationKind,
    name: string,
    info: string[],
    r: number,
    opts: { orbit?: Planet['orbit']; path?: Planet['path']; faceVelocity?: boolean },
  ): void => {
    const mesh = makeStation(kind);
    const start = opts.path
      ? opts.path(0)
      : opts.orbit
        ? opts.orbit.parent.mesh.position.clone()
        : new THREE.Vector3();
    mesh.position.copy(start);
    scene.add(mesh);
    const panel = makePanel(name, info);
    panel.scale.set(7, 3.9, 1);
    panel.visible = false;
    scene.add(panel);
    planets.push({
      mesh,
      spin: opts.faceVelocity ? 0 : 0.4,
      spinVel: 0,
      home: mesh.position.clone(),
      velocity: new THREE.Vector3(),
      panel,
      r,
      orbit: opts.orbit,
      path: opts.path,
      faceVelocity: opts.faceVelocity,
    });
  };

  // --- en orbite autour de leur planète ---
  addCraft(
    'iss',
    'STATION ISS',
    [
      'CLASSE ....... ORBITALE HABITÉE',
      'ALTITUDE ..... 408 KM',
      'ÉQUIPAGE ..... 7',
      'VITESSE ...... 7,66 KM/S',
    ],
    0.8,
    { orbit: { parent: earth, dist: 1.9, speed: 0.5, incl: 0.42, phase: 0 } },
  );
  addCraft(
    'sat',
    'SATELLITE GÉO',
    [
      'CLASSE ....... TÉLÉCOM',
      'ORBITE ....... GÉOSTATIONNAIRE',
      'BANDE ........ KU / KA',
      'STATUT ....... ACTIF',
    ],
    0.5,
    { orbit: { parent: earth, dist: 2.3, speed: -0.34, incl: 0.95, phase: 2.1 } },
  );
  addCraft(
    'telescope',
    'TÉLESCOPE ORBITAL',
    [
      'CLASSE ....... OBSERVATOIRE',
      'MIROIR ....... 2,4 M',
      'BANDE ........ UV / VISIBLE / IR',
      'STATUT ....... EN VEILLE SCIENTIFIQUE',
    ],
    0.55,
    { orbit: { parent: earth, dist: 2.75, speed: 0.28, incl: 1.2, phase: 5.0 } },
  );
  addCraft(
    'ring',
    'STATION ARÈS',
    [
      'CLASSE ....... ORBITALE MARS',
      'GRAVITÉ ...... 0,38 G (ROTATION)',
      'MODULES ...... 6',
      'STATUT ....... OPÉRATIONNEL',
    ],
    0.6,
    { orbit: { parent: mars, dist: 1.6, speed: 0.46, incl: 0.5, phase: 1.0 } },
  );
  addCraft(
    'sat',
    'SONDE JOVIENNE',
    [
      'CLASSE ....... SONDE',
      'MISSION ...... ÉTUDE DES LUNES',
      'ÉNERGIE ...... GÉNÉRATEUR RTG',
      'STATUT ....... EN ORBITE',
    ],
    0.5,
    { orbit: { parent: jupiter, dist: 3.6, speed: 0.3, incl: 0.3, phase: 3.3 } },
  );

  // --- engins errants : trajectoires libres à travers l'univers, orientés
  //     selon leur vitesse, attrapables au passage ---
  addCraft(
    'shuttle',
    'NAVETTE EXPLORER',
    [
      'CLASSE ....... TRANSPORT ORBITAL',
      'POUSSÉE ...... 3 × 1,8 MN',
      'CAP .......... ROUTE LIBRE',
      'STATUT ....... EN CROISIÈRE',
    ],
    0.6,
    {
      faceVelocity: true,
      path: (t) =>
        new THREE.Vector3(
          Math.sin(t * 0.08) * 30,
          Math.cos(t * 0.05) * 10 + 3,
          Math.cos(t * 0.07) * 52 - 6,
        ),
    },
  );
  addCraft(
    'rocket',
    'LANCEUR ARIANE VI',
    [
      'CLASSE ....... LANCEUR LOURD',
      'ÉTAGES ....... 2 + 2 BOOSTERS',
      'CHARGE ....... 21,6 T (LEO)',
      'STATUT ....... PROPULSION ACTIVE',
    ],
    0.6,
    {
      faceVelocity: true,
      path: (t) =>
        new THREE.Vector3(
          Math.cos(t * 0.06) * 46,
          Math.sin(t * 0.078) * 16 + 6,
          Math.sin(t * 0.06) * 40,
        ),
    },
  );
  addCraft(
    'shuttle',
    'NAVETTE ENDEAVOUR',
    [
      'CLASSE ....... TRANSPORT ORBITAL',
      'SOUTE ........ 18 × 4,6 M',
      'CAP .......... ORBITE HAUTE',
      'STATUT ....... EN TRANSIT',
    ],
    0.6,
    {
      faceVelocity: true,
      path: (t) =>
        new THREE.Vector3(
          Math.cos(-t * 0.045) * 60,
          18 + Math.sin(t * 0.06) * 8,
          Math.sin(-t * 0.045) * 60,
        ),
    },
  );
  addCraft(
    'rocket',
    'FUSÉE CARGO',
    [
      'CLASSE ....... RAVITAILLEMENT',
      'POUSSÉE ...... 7,6 MN',
      'CAP .......... STATIONS',
      'STATUT ....... EN ROUTE',
    ],
    0.6,
    {
      faceVelocity: true,
      path: (t) =>
        new THREE.Vector3(
          Math.cos(t * 0.05) * 22 + 20,
          Math.sin(t * 0.09) * 28,
          Math.sin(t * 0.05) * 22,
        ),
    },
  );
}
