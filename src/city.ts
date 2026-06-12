import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import type { GestureState } from './gestures';

const CYAN = 0x2ee6ff;

export interface CityDef {
  name: string;
  lat: number;
  lon: number;
}

export const CITIES: Record<string, CityDef> = {
  paris:   { name: 'PARIS',    lat: 48.8584,  lon:   2.2945 },
  newyork: { name: 'NEW YORK', lat: 40.7484,  lon: -73.9857 },
  tokyo:   { name: 'TOKYO',    lat: 35.6595,  lon: 139.7005 },
  london:  { name: 'LONDON',   lat: 51.5007,  lon:  -0.1246 },
  dubai:   { name: 'DUBAI',    lat: 25.1972,  lon:  55.2744 },
};

const FETCH_RADIUS = 900;  // mètres chargés autour du centre
const MIN_RADIUS   = 45;   // altitude caméra mini (vue rue)
const MAX_RADIUS   = 2600; // vue d'ensemble
const PAN_LIMIT    = 1200;
const YAW_SPEED    = 0.03;  // rad/frame à joystick max (gauche/droite)
const MOVE_SPEED   = 0.02;  // × altitude, m/frame à joystick max (haut/bas)

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
  private theta  = 0.5;
  private phi    = 0.95;
  private target = new THREE.Vector3();

  private yawVel  = 0;
  private moveVel = 0;
  private zoomVel = 0;
  private panVel  = new THREE.Vector2();
  private lastPinchCursor: { x: number; y: number } | null = null;

  private loaded  = new Map<string, THREE.Group>();
  private current: THREE.Group | null = null;
  /** Descente automatique après la plongée depuis le globe. */
  private autoZoomTarget: number | null = null;

  constructor(renderer: THREE.WebGLRenderer) {
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 12000);
    this.scene.fog = new THREE.FogExp2(0x02060c, 0.00025);

    // sol
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(1500, 64),
      new THREE.MeshStandardMaterial({ color: 0x05090e, roughness: 1 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    this.scene.add(ground);

    // quadrillage sol
    const grid = new THREE.GridHelper(3000, 75, CYAN, CYAN);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.05;
    this.scene.add(grid);

    // sphère céleste quadrillée (immersion)
    const celestial = new THREE.Mesh(
      new THREE.SphereGeometry(8000, 36, 24),
      new THREE.MeshBasicMaterial({ color: CYAN, wireframe: true, transparent: true, opacity: 0.018, depthWrite: false }),
    );
    this.scene.add(celestial);

    // éclairage nocturne réaliste
    this.scene.add(new THREE.HemisphereLight(0x6688bb, 0x0a0f14, 0.55));
    const sun = new THREE.DirectionalLight(0xbfd8ff, 1.1);
    sun.position.set(800, 1200, 400);
    this.scene.add(sun);

    // ciel étoilé
    const starCount = 1500;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(5000 + Math.random() * 3000);
      v.y = Math.abs(v.y);
      positions.set([v.x, v.y, v.z], i * 3);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.scene.add(
      new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xbfefff, size: 4, transparent: true, opacity: 0.5 })),
    );

    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(
      new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.35, 0.5, 0.45),
    );
    this.composer.addPass(new OutputPass());
    this.updateCamera();
  }

  // ----------------------------------------------------------------- load

  async load(key: string): Promise<void> {
    const def = CITIES[key];
    if (!def) throw new Error(`Ville inconnue : ${key}`);

    if (this.current) this.current.visible = false;
    let group = this.loaded.get(key);
    if (!group) {
      try {
        group = await this.fetchAndBuild(def);
      } catch (err) {
        console.warn('Overpass indisponible, ville procédurale :', err);
        group = this.buildProceduralCity();
      }
      this.loaded.set(key, group);
      this.scene.add(group);
    }
    group.visible = true;
    this.current = group;
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
    this.theta  = 0.5;
    this.phi    = 0.95;
    this.yawVel  = 0;
    this.moveVel = 0;
    this.zoomVel = 0;
    this.panVel.set(0, 0);
    this.updateCamera();
  }

  private async fetchAndBuild(def: CityDef): Promise<THREE.Group> {
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
    const roadVerts: number[] = [];
    let buildingCount = 0;

    for (const el of json.elements) {
      if (el.type !== 'way' || !el.geometry || el.geometry.length < 2) continue;

      if (el.tags?.building && buildingCount < 6000) {
        const pts = el.geometry.map((g) => project(g.lat, g.lon));
        if (pts.length > 3 && pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1]) pts.pop();
        if (pts.length < 3) continue;
        const shape = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
        const geo   = new THREE.ExtrudeGeometry(shape, { depth: this.buildingHeight(el.tags), bevelEnabled: false });
        geo.rotateX(-Math.PI / 2);
        buildingGeoms.push(geo);
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
      group.add(new THREE.LineSegments(
        roadGeo,
        new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.22 }),
      ));
    }
    return group;
  }

  private buildingHeight(tags: Record<string, string>): number {
    const h = parseFloat(tags['height'] ?? '');
    if (!Number.isNaN(h) && h > 0) return Math.min(h, 600);
    const levels = parseFloat(tags['building:levels'] ?? '');
    if (!Number.isNaN(levels) && levels > 0) return levels * 3.2 + 2;
    return 8 + Math.random() * 14;
  }

  private buildingMaterial(): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({
      color: 0x16232e, roughness: 0.85, metalness: 0.08,
      emissive: CYAN, emissiveIntensity: 0.018, side: THREE.DoubleSide,
    });
  }

  private buildProceduralCity(): THREE.Group {
    const group = new THREE.Group();
    const geoms: THREE.BufferGeometry[] = [];
    const step = 70;
    for (let x = -PAN_LIMIT; x <= PAN_LIMIT; x += step) {
      for (let z = -PAN_LIMIT; z <= PAN_LIMIT; z += step) {
        const d = Math.hypot(x, z);
        if (d > PAN_LIMIT || Math.random() < 0.25) continue;
        const h = (12 + Math.random() * 60) * Math.max(0.3, 1.4 - d / PAN_LIMIT);
        const w = 22 + Math.random() * 26;
        const geo = new THREE.BoxGeometry(w, h, w);
        geo.translate(x + (Math.random() - 0.5) * 18, h / 2, z + (Math.random() - 0.5) * 18);
        geoms.push(geo);
      }
    }
    group.add(new THREE.Mesh(mergeGeometries(geoms, false), this.buildingMaterial()));
    return group;
  }

  // ------------------------------------------------------------- gestures

  applyGestures(g: GestureState): void {
    // main ouverte = joystick : gauche/droite pivote, haut/bas avance/recule
    this.yawVel += (g.joystick.x * YAW_SPEED - this.yawVel) * 0.08;
    this.theta -= this.yawVel;

    // main vers le haut = avancer dans la direction du regard, vers le bas = reculer
    const fwdTarget = -g.joystick.y * this.radius * MOVE_SPEED;
    this.moveVel += (fwdTarget - this.moveVel) * 0.08;
    const fwdX = -Math.sin(this.theta);
    const fwdZ = -Math.cos(this.theta);
    this.target.x += fwdX * this.moveVel;
    this.target.z += fwdZ * this.moveVel;

    this.zoomVel += (g.zoomVelocity - this.zoomVel) * 0.15;
    this.radius = THREE.MathUtils.clamp(this.radius * Math.exp(this.zoomVel), MIN_RADIUS, MAX_RADIUS);

    // descente cinématique, interrompue dès que l'utilisateur reprend le zoom
    if (this.autoZoomTarget !== null) {
      if (Math.abs(g.zoomVelocity) > 0.02) {
        this.autoZoomTarget = null;
      } else {
        this.radius += (this.autoZoomTarget - this.radius) * 0.035;
        if (Math.abs(this.radius - this.autoZoomTarget) < 8) this.autoZoomTarget = null;
      }
    }

    // pincer + tirer = déplacer la carte (une seule main pincée)
    let panX = 0, panY = 0;
    if (g.mode === 'grab' && g.primary) {
      if (this.lastPinchCursor) {
        panX = g.primary.cursor.x - this.lastPinchCursor.x;
        panY = g.primary.cursor.y - this.lastPinchCursor.y;
      }
      this.lastPinchCursor = { ...g.primary.cursor };
    } else {
      this.lastPinchCursor = null;
    }
    this.panVel.x += (panX - this.panVel.x) * 0.18;
    this.panVel.y += (panY - this.panVel.y) * 0.18;

    const k = this.radius * 1.4;
    const sinT = Math.sin(this.theta), cosT = Math.cos(this.theta);
    this.target.x += -this.panVel.x * k * cosT  + this.panVel.y * k * sinT;
    this.target.z += -this.panVel.x * k * -sinT + this.panVel.y * k * cosT;
    this.target.x = THREE.MathUtils.clamp(this.target.x, -PAN_LIMIT, PAN_LIMIT);
    this.target.z = THREE.MathUtils.clamp(this.target.z, -PAN_LIMIT, PAN_LIMIT);

    this.updateCamera();
  }

  render(): void {
    this.clock.getDelta();
    this.composer.render();
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
