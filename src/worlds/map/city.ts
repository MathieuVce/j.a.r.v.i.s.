import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import type { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import type { GestureState } from '../../input/gestures';
import { xrRender, xrHandState } from '../../vr';
import { makeBloomComposer } from '../../utils/composer';
import { buildSky, buildGround, buildGrass, buildTrees, buildRiver } from './cityDecor';
import { SpiderMode, type BuildingBox } from './spiderMode';

const ROAD_COLOR = 0x33363c; // asphalte (vue de jour)
const SUN_ELEV = 16; // élévation du soleil en ° — basse = lumière de fin de journée
const SUN_AZIM = 150; // azimut du soleil en °

export interface CityDef {
  name: string;
  lat: number;
  lon: number;
}

export const CITIES: Record<string, CityDef> = {
  paris: { name: 'PARIS', lat: 48.8584, lon: 2.2945 },
  newyork: { name: 'NEW YORK', lat: 40.7484, lon: -73.9857 },
  tokyo: { name: 'TOKYO', lat: 35.6595, lon: 139.7005 },
  london: { name: 'LONDON', lat: 51.5007, lon: -0.1246 },
  dubai: { name: 'DUBAI', lat: 25.1972, lon: 55.2744 },
};

const FETCH_RADIUS = 900; // mètres chargés autour du centre
const MIN_RADIUS = 12; // altitude caméra mini (vue piéton, au ras de la rue)
const MAX_RADIUS = 2600; // vue d'ensemble
const PAN_LIMIT = 1200;
const HEIGHT_SCALE = 2.5; // mégapole verticale : bâtiments nettement plus hauts
const YAW_SPEED = 0.03; // rad/frame à joystick max (gauche/droite)
const MOVE_SPEED = 0.02; // × altitude, m/frame à joystick max (haut/bas)
const STICK_DEADZONE = 0.15; // zone morte radiale des sticks de manette
const STICK_ZOOM = 0.02; // vitesse de zoom (échelle log/frame) au stick gauche à fond

/** Zone morte radiale d'un stick : renvoie {0,0} sous le seuil, puis remappe
 *  [seuil..1] → [0..1] pour une reprise progressive. null (pas de manette) reste null. */
function stickDeadzone(
  s: { x: number; y: number } | null | undefined,
): { x: number; y: number } | null {
  if (!s) return null;
  const mag = Math.hypot(s.x, s.y);
  if (mag < STICK_DEADZONE) return { x: 0, y: 0 };
  const k = (mag - STICK_DEADZONE) / (1 - STICK_DEADZONE) / mag;
  return { x: s.x * k, y: s.y * k };
}

interface OverpassWay {
  type: string;
  tags?: Record<string, string>;
  geometry?: { lat: number; lon: number }[];
}

export class CityWorld {
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private composer: EffectComposer;
  private clock = new THREE.Clock();

  private radius = 700;
  private theta = 0.5;
  private phi = 0.95;
  private target = new THREE.Vector3();

  private yawVel = 0;
  private moveVel = 0;
  private zoomVel = 0;
  private panVel = new THREE.Vector2();
  private lastPinchCursor: { x: number; y: number } | null = null;

  // mode jeu Spider-Man (VR) : contrôleur de personnage au sol, clic stick gauche
  private spider: SpiderMode;
  private prevLsClick = false;

  private loaded = new Map<string, THREE.Group>();
  private current: THREE.Group | null = null;
  /** AABB par bâtiment de la ville courante (collisions du mode Spider-Man). */
  private buildingBoxes: BuildingBox[] = [];
  private boxCache = new Map<string, BuildingBox[]>();
  /** Descente automatique après la plongée depuis le globe. */
  private autoZoomTarget: number | null = null;
  /** Temps partagé par les shaders de façade (reflets dorés des vitres). */
  private uCityTime = { value: 0 };
  /** Direction du soleil (partagée par le ciel et la lumière directionnelle). */
  private sunDir = new THREE.Vector3();
  /** Normal map de la rivière, défilée chaque frame pour animer les vagues. */
  private waterNormal: THREE.CanvasTexture | null = null;

  constructor(private renderer: THREE.WebGLRenderer) {
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 12000);
    // brume claire de fin de journée : les lointains se fondent dans le ciel
    this.scene.fog = new THREE.FogExp2(0xc7cdd2, 0.00018);

    // direction du soleil, partagée par le dôme de ciel et la lumière
    const sunPhi = THREE.MathUtils.degToRad(90 - SUN_ELEV);
    const sunTheta = THREE.MathUtils.degToRad(SUN_AZIM);
    this.sunDir.setFromSphericalCoords(1, sunPhi, sunTheta);

    buildSky(this.scene, renderer, this.sunDir); // ciel dégradé + env map de reflets
    buildGround(this.scene); // pelouse
    buildGrass(this.scene); // brins d'herbe instanciés
    buildTrees(this.scene); // arbres low-poly instanciés
    this.waterNormal = buildRiver(this.scene); // rivière réfléchissante + ponts

    // éclairage diurne : soleil chaud rasant + lumière d'ambiance ciel/sol
    this.scene.add(new THREE.HemisphereLight(0xbfd6ec, 0x55703a, 0.85));
    const sun = new THREE.DirectionalLight(0xffe2b0, 2.0);
    sun.position.copy(this.sunDir).multiplyScalar(1500);
    this.scene.add(sun);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.12));

    // bloom discret : seuil haut → seuls le soleil et les reflets dorés rayonnent
    this.composer = makeBloomComposer(renderer, this.scene, this.camera, {
      strength: 0.18,
      radius: 0.5,
      threshold: 0.82,
    });
    this.spider = new SpiderMode(this.scene, this.camera);
    this.updateCamera();
  }

  /** Mode Spider-Man actif (VR) : MapWorld/main s'en servent pour neutraliser
   *  le retour-globe au poing et le changement de monde (A/B). */
  get spiderActive(): boolean {
    return this.spider.active;
  }

  // ----------------------------------------------------------------- load

  async load(key: string): Promise<void> {
    const def = CITIES[key];
    if (!def) throw new Error(`Ville inconnue : ${key}`);

    if (this.current) this.current.visible = false;
    let group = this.loaded.get(key);
    if (!group) {
      let built: { group: THREE.Group; boxes: BuildingBox[] };
      try {
        built = await this.fetchAndBuild(def);
      } catch (err) {
        console.warn('Overpass indisponible, ville procédurale :', err);
        built = this.buildProceduralCity();
      }
      group = built.group;
      this.loaded.set(key, group);
      this.boxCache.set(key, built.boxes);
      this.scene.add(group);
    }
    group.visible = true;
    this.current = group;
    this.buildingBoxes = this.boxCache.get(key) ?? [];
    this.spider.setBuildings(this.current, this.buildingBoxes);
    this.resetView();
  }

  /** Arrivée cinématique : on débarque de très haut puis on descend en vue rue. */
  enterCinematic(): void {
    this.resetView();
    this.radius = MAX_RADIUS;
    this.phi = 1.05;
    this.autoZoomTarget = 420;
    this.updateCamera();
  }

  /** Vrai quand la caméra est au dézoom maximal (porte de sortie vers le globe). */
  get zoomedOut(): boolean {
    return this.radius > MAX_RADIUS - 10;
  }

  private resetView(): void {
    this.target.set(0, 0, 0);
    this.radius = 700;
    this.theta = 0.5;
    this.phi = 0.95;
    this.yawVel = 0;
    this.moveVel = 0;
    this.zoomVel = 0;
    this.panVel.set(0, 0);
    this.updateCamera();
  }

  private async fetchAndBuild(def: CityDef): Promise<{ group: THREE.Group; boxes: BuildingBox[] }> {
    const query = `[out:json][timeout:40];
(
  way["building"](around:${FETCH_RADIUS},${def.lat},${def.lon});
  way["highway"~"^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|pedestrian|living_street)$"](around:${FETCH_RADIUS * 1.3},${def.lat},${def.lon});
);
out geom;`;

    const res = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'data=' + encodeURIComponent(query),
    });
    if (!res.ok) throw new Error(`Overpass HTTP ${res.status}`);
    const json = (await res.json()) as { elements: OverpassWay[] };

    const mPerLat = 111320;
    const mPerLon = 111320 * Math.cos((def.lat * Math.PI) / 180);
    const project = (lat: number, lon: number): [number, number] => [
      (lon - def.lon) * mPerLon,
      -(lat - def.lat) * mPerLat,
    ];

    const group = new THREE.Group();
    const buildingGeoms: THREE.BufferGeometry[] = [];
    const boxes: BuildingBox[] = [];
    const roadVerts: number[] = [];
    let buildingCount = 0;

    for (const el of json.elements) {
      if (el.type !== 'way' || !el.geometry || el.geometry.length < 2) continue;

      if (el.tags?.building && buildingCount < 6000) {
        const pts = el.geometry.map((g) => project(g.lat, g.lon));
        if (
          pts.length > 3 &&
          pts[0][0] === pts[pts.length - 1][0] &&
          pts[0][1] === pts[pts.length - 1][1]
        )
          pts.pop();
        if (pts.length < 3) continue;
        const top = this.buildingHeight(el.tags);
        const shape = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
        const geo = new THREE.ExtrudeGeometry(shape, { depth: top, bevelEnabled: false });
        geo.rotateX(-Math.PI / 2);
        buildingGeoms.push(geo);
        // AABB monde de l'empreinte (X = pts.x, Z = pts.z après extrude+rotate)
        let mnX = Infinity,
          mxX = -Infinity,
          mnZ = Infinity,
          mxZ = -Infinity;
        for (const [x, z] of pts) {
          if (x < mnX) mnX = x;
          if (x > mxX) mxX = x;
          if (z < mnZ) mnZ = z;
          if (z > mxZ) mxZ = z;
        }
        boxes.push({ minX: mnX, maxX: mxX, minZ: mnZ, maxZ: mxZ, top });
        buildingCount++;
      } else if (el.tags?.highway) {
        for (let i = 0; i < el.geometry.length - 1; i++) {
          const [x1, z1] = project(el.geometry[i].lat, el.geometry[i].lon);
          const [x2, z2] = project(el.geometry[i + 1].lat, el.geometry[i + 1].lon);
          roadVerts.push(x1, 0.4, z1, x2, 0.4, z2);
        }
      }
    }

    if (buildingGeoms.length === 0) throw new Error('Aucun bâtiment reçu');

    const merged = mergeGeometries(buildingGeoms, false);
    buildingGeoms.forEach((g) => g.dispose());
    group.add(new THREE.Mesh(merged, this.buildingMaterial()));

    if (roadVerts.length) {
      const roadGeo = new THREE.BufferGeometry();
      roadGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(roadVerts), 3));
      group.add(
        new THREE.LineSegments(
          roadGeo,
          new THREE.LineBasicMaterial({ color: ROAD_COLOR, transparent: true, opacity: 0.5 }),
        ),
      );
    }
    return { group, boxes };
  }

  private buildingHeight(tags: Record<string, string>): number {
    const h = parseFloat(tags['height'] ?? '');
    if (!Number.isNaN(h) && h > 0) return Math.min(h, 600) * HEIGHT_SCALE;
    const levels = parseFloat(tags['building:levels'] ?? '');
    if (!Number.isNaN(levels) && levels > 0) return (levels * 3.2 + 2) * HEIGHT_SCALE;
    return (8 + Math.random() * 14) * HEIGHT_SCALE;
  }

  private buildingMaterial(): THREE.MeshStandardMaterial {
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
      metalness: 0.1,
      envMapIntensity: 1.0,
      side: THREE.DoubleSide,
    });

    // Façades de jour, en shader (géométrie fusionnée → pas d'UV exploitables) :
    // grille de vitres réfléchissantes (verre lisse + métallique = miroir du ciel)
    // sur une structure béton mate, déduite de la hauteur (Y) et d'une coordonnée
    // horizontale le long de la façade. Au soleil bas, quelques vitres accrochent
    // un reflet doré. Le motif est calculé une fois après color_fragment puis
    // réutilisé pour moduler rugosité, métallicité et émission.
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.uCityTime;
      shader.vertexShader =
        'varying vec3 vCityPos;\nvarying vec3 vCityNrm;\n' + shader.vertexShader;
      shader.vertexShader = shader.vertexShader
        .replace('#include <begin_vertex>', '#include <begin_vertex>\n  vCityPos = transformed;')
        .replace(
          '#include <beginnormal_vertex>',
          '#include <beginnormal_vertex>\n  vCityNrm = objectNormal;',
        );

      shader.fragmentShader =
        'varying vec3 vCityPos;\nvarying vec3 vCityNrm;\nuniform float uTime;\n' +
        'float chash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }\n' +
        'float cityWall; float cityPane; float citySeed;\n' +
        shader.fragmentShader;

      // motif de façade + teintes (béton / verre / toits)
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        {
          float ny = abs(vCityNrm.y);
          cityWall = 1.0 - smoothstep(0.35, 0.6, ny);
          bool xFace = abs(vCityNrm.x) > abs(vCityNrm.z);
          float horiz = xFace ? vCityPos.z : vCityPos.x;
          float facade = xFace ? 0.0 : 17.0;
          float row = floor(vCityPos.y / 3.6);
          float col = floor(horiz / 3.4);
          vec2 cell = vec2(fract(horiz / 3.4), fract(vCityPos.y / 3.6));
          cityPane = step(0.14, cell.x) * step(cell.x, 0.86)
                   * step(0.20, cell.y) * step(cell.y, 0.88);
          cityPane *= step(1.5, vCityPos.y) * cityWall;          // vitres : sur les murs, pas au sol
          citySeed = chash(vec3(row, col, facade));
          float bvar = chash(vec3(floor(vCityPos.x / 38.0), floor(vCityPos.z / 38.0), 5.0));
          vec3 concrete = mix(vec3(0.60, 0.61, 0.64), vec3(0.80, 0.72, 0.60), bvar);
          vec3 glass = mix(vec3(0.30, 0.45, 0.55), vec3(0.55, 0.62, 0.66), citySeed);
          diffuseColor.rgb = mix(concrete, glass, cityPane);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.34, 0.35, 0.37), 1.0 - cityWall); // toits
        }`,
      );
      // verre = lisse & métallique (réfléchit le ciel) ; béton & toits = mats
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <roughnessmap_fragment>',
          '#include <roughnessmap_fragment>\n  roughnessFactor = mix(mix(0.82, 0.06, cityPane), 0.95, 1.0 - cityWall);',
        )
        .replace(
          '#include <metalnessmap_fragment>',
          '#include <metalnessmap_fragment>\n  metalnessFactor = mix(metalnessFactor, 0.85, cityPane);',
        );
      // reflet doré du soleil sur quelques vitres (fin de journée)
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\n' +
          '  totalEmissiveRadiance += vec3(1.0, 0.66, 0.34) * (step(0.8, citySeed) * cityPane) * (0.22 + 0.14 * sin(uTime * 0.6 + citySeed * 30.0));',
      );
    };
    return mat;
  }

  private buildProceduralCity(): { group: THREE.Group; boxes: BuildingBox[] } {
    const group = new THREE.Group();
    const geoms: THREE.BufferGeometry[] = [];
    const boxes: BuildingBox[] = [];
    const step = 70;
    for (let x = -PAN_LIMIT; x <= PAN_LIMIT; x += step) {
      for (let z = -PAN_LIMIT; z <= PAN_LIMIT; z += step) {
        const d = Math.hypot(x, z);
        if (d > PAN_LIMIT || Math.random() < 0.25) continue;
        const h = (12 + Math.random() * 60) * Math.max(0.3, 1.4 - d / PAN_LIMIT) * HEIGHT_SCALE;
        const w = 22 + Math.random() * 26;
        const cx = x + (Math.random() - 0.5) * 18;
        const cz = z + (Math.random() - 0.5) * 18;
        const geo = new THREE.BoxGeometry(w, h, w);
        geo.translate(cx, h / 2, cz);
        geoms.push(geo);
        boxes.push({
          minX: cx - w / 2,
          maxX: cx + w / 2,
          minZ: cz - w / 2,
          maxZ: cz + w / 2,
          top: h,
        });
      }
    }
    group.add(new THREE.Mesh(mergeGeometries(geoms, false), this.buildingMaterial()));
    return { group, boxes };
  }

  // ------------------------------------------------------------- gestures

  applyGestures(g: GestureState, dt: number): void {
    const presenting = this.renderer.xr.isPresenting;

    // mode Spider-Man (VR) : bascule au clic du stick gauche. Quand il est actif,
    // il pilote entièrement la caméra (contrôleur de personnage) → on court-circuite.
    if (presenting) {
      const lsClick = xrHandState.gamepads[1]?.buttons[3]?.pressed === true;
      if (lsClick && !this.prevLsClick) {
        if (this.spider.active) {
          this.spider.exit();
          // recale la vue orbitale sur la position du joueur (pas de saut de caméra)
          const f = this.spider.feetPos;
          this.target.set(f.x, 0, f.z);
          this.radius = 60;
          this.phi = 1.3;
          this.updateCamera();
        } else {
          this.spider.enter(new THREE.Vector2(this.target.x, this.target.z));
        }
      }
      this.prevLsClick = lsClick;
    }
    if (this.spider.active && presenting) {
      this.spider.update(g, dt);
      return;
    }

    // Manettes VR (vue rue) — calqué sur l'Univers : stick GAUCHE = se déplacer
    // (pivoter en X, avancer/reculer en Y), stick DROIT = zoomer (Y). Repli sur
    // le joystick unique (webcam, tactile, mains nues) dès qu'aucune manette
    // n'expose de stick.
    const ls = stickDeadzone(g.leftStick);
    const rs = stickDeadzone(g.rightStick);
    const sticks = ls !== null || rs !== null;

    const yawIn = sticks ? (ls ? ls.x : 0) : g.joystick.x;
    const fwdIn = sticks ? (ls ? -ls.y : 0) : -g.joystick.y;
    const zoomIn = sticks ? (rs ? rs.y * STICK_ZOOM : 0) : g.zoomVelocity;

    // pivot gauche/droite (sens inversé : pousser le stick à gauche tourne la
    // caméra vers la gauche)
    this.yawVel += (yawIn * YAW_SPEED - this.yawVel) * 0.08;
    this.theta += this.yawVel;

    // pousser vers l'avant = avancer dans la direction du regard, vers l'arrière = reculer
    const fwdTarget = fwdIn * this.radius * MOVE_SPEED;
    this.moveVel += (fwdTarget - this.moveVel) * 0.08;
    const fwdX = -Math.sin(this.theta);
    const fwdZ = -Math.cos(this.theta);
    this.target.x += fwdX * this.moveVel;
    this.target.z += fwdZ * this.moveVel;

    // zoom : approcher (zoomIn < 0) / s'éloigner (zoomIn > 0)
    this.zoomVel += (zoomIn - this.zoomVel) * 0.15;
    this.radius = THREE.MathUtils.clamp(
      this.radius * Math.exp(this.zoomVel),
      MIN_RADIUS,
      MAX_RADIUS,
    );

    // descente cinématique, interrompue dès que l'utilisateur reprend le zoom
    if (this.autoZoomTarget !== null) {
      if (Math.abs(zoomIn) > 0.006) {
        this.autoZoomTarget = null;
      } else {
        this.radius += (this.autoZoomTarget - this.radius) * 0.035;
        if (Math.abs(this.radius - this.autoZoomTarget) < 8) this.autoZoomTarget = null;
      }
    }

    // vue de plus en plus rasante à mesure qu'on descend : au plus près la
    // caméra passe à hauteur de piéton (regard quasi horizontal dans la rue),
    // de haut elle reste plongeante pour la vue d'ensemble.
    const targetPhi = THREE.MathUtils.mapLinear(
      THREE.MathUtils.clamp(this.radius, MIN_RADIUS, 600),
      MIN_RADIUS,
      600,
      1.42,
      0.95,
    );
    this.phi += (targetPhi - this.phi) * 0.06;

    // pincer + tirer = déplacer la carte — axes INVERSÉS : tirer vers le haut
    // descend, tirer à droite va à gauche (et inversement). Hors VR uniquement.
    let panX = 0,
      panY = 0;
    if (!presenting && g.mode === 'grab' && g.primary) {
      if (this.lastPinchCursor) {
        panX = -(g.primary.cursor.x - this.lastPinchCursor.x);
        panY = -(g.primary.cursor.y - this.lastPinchCursor.y);
      }
      this.lastPinchCursor = { ...g.primary.cursor };
    } else {
      this.lastPinchCursor = null;
    }
    this.panVel.x += (panX - this.panVel.x) * 0.18;
    this.panVel.y += (panY - this.panVel.y) * 0.18;

    const k = this.radius * 1.4;
    const sinT = Math.sin(this.theta),
      cosT = Math.cos(this.theta);
    this.target.x += -this.panVel.x * k * cosT + this.panVel.y * k * sinT;
    this.target.z += -this.panVel.x * k * -sinT + this.panVel.y * k * cosT;
    this.target.x = THREE.MathUtils.clamp(this.target.x, -PAN_LIMIT, PAN_LIMIT);
    this.target.z = THREE.MathUtils.clamp(this.target.z, -PAN_LIMIT, PAN_LIMIT);

    this.updateCamera();
  }

  render(): void {
    const dt = this.clock.getDelta();
    this.uCityTime.value += dt;
    // vagues de la rivière : la normal map défile doucement
    if (this.waterNormal) {
      this.waterNormal.offset.x += dt * 0.03;
      this.waterNormal.offset.y += dt * 0.015;
    }
    xrRender(this.renderer, this.composer, this.scene, this.camera);
  }

  private updateCamera(): void {
    this.camera.position.setFromSphericalCoords(this.radius, this.phi, this.theta).add(this.target);
    this.camera.lookAt(this.target);
  }

  resize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(w, h);
  }
}
