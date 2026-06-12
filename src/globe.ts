import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CityWorld, CITIES } from './city';
import type { GestureState } from './gestures';

const CYAN = 0x2ee6ff;
const AMBER = 0xffc857;

const R = 100; // rayon du globe
const GLOBE_MIN = 195; // garde de la distance : on ne colle jamais aux villes
const GLOBE_MAX = 800;
const ROT_SPEED = 0.05; // rad/frame à vitesse joystick max

const GEOJSON_URL =
  'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json';

export type MapState = 'globe' | 'transition' | 'city';
type StatusKind = 'loading' | 'ready' | 'error';

/** lat/lon (degrés) → position 3D sur une sphère de rayon r. */
function llToVec(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * THREE.MathUtils.DEG2RAD;
  const theta = (lon + 180) * THREE.MathUtils.DEG2RAD;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

interface Marker {
  key: string;
  name: string;
  base: THREE.Vector3;
  core: THREE.Mesh;
  halo: THREE.Sprite;
  hit: THREE.Mesh;
}

interface Transition {
  t: number;
  dur: number;
  sTheta: number;
  sPhi: number;
  sRad: number;
  eTheta: number;
  ePhi: number;
  loaded: boolean;
  failed: boolean;
}

/**
 * Monde "carte" : globe terrestre holographique par défaut, plongée
 * cinématique vers une ville (CityWorld) quand on pince son marqueur.
 */
export class MapWorld {
  state: MapState = 'globe';
  hoveredCity: string | null = null;

  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private composer: EffectComposer;
  private clock = new THREE.Clock();
  private raycaster = new THREE.Raycaster();

  private radius = 340;
  private theta = 0.9;
  private phi = 1.1;
  private orbitVel = { x: 0, y: 0 };
  private zoomVel = 0;

  private globeMesh!: THREE.Mesh;
  private markers: Marker[] = [];
  private city: CityWorld;
  private trans: Transition | null = null;
  private transKey = '';
  private flashEl = document.getElementById('flash')!;
  private onStatus: (text: string, kind?: StatusKind) => void;

  constructor(
    renderer: THREE.WebGLRenderer,
    onStatus: (text: string, kind?: StatusKind) => void,
  ) {
    this.onStatus = onStatus;
    this.city = new CityWorld(renderer);
    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.5,
      8000,
    );

    this.buildGlobe();
    void this.loadContinents(); // asynchrone, le globe vit sans

    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(
      new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.55,
        0.5,
        0.2,
      ),
    );
    this.composer.addPass(new OutputPass());
    this.updateCamera();
  }

  get hoveredCityName(): string | null {
    return this.hoveredCity ? CITIES[this.hoveredCity].name : null;
  }
  get inTransition(): boolean {
    return this.state === 'transition';
  }

  // ----------------------------------------------------------------- build

  private buildGlobe(): void {
    // sphère de remplissage transparente (la Terre "hologramme")
    this.globeMesh = new THREE.Mesh(
      new THREE.SphereGeometry(R, 48, 32),
      new THREE.MeshBasicMaterial({
        color: 0x06283c,
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
      }),
    );
    this.scene.add(this.globeMesh);

    // quadrillage lat/long
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.001, 36, 24),
      new THREE.MeshBasicMaterial({
        color: CYAN,
        wireframe: true,
        transparent: true,
        opacity: 0.05,
        depthWrite: false,
      }),
    );
    this.scene.add(wire);

    // halo atmosphérique
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.makeGlowTexture(),
        color: CYAN,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    glow.scale.set(R * 3.4, R * 3.4, 1);
    this.scene.add(glow);

    // étoiles de fond
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const v = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(2500 + Math.random() * 2500);
      positions.set([v.x, v.y, v.z], i * 3);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.scene.add(
      new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({
          color: 0xbfefff,
          size: 2.5,
          transparent: true,
          opacity: 0.6,
        }),
      ),
    );

    // marqueurs de villes
    for (const [key, def] of Object.entries(CITIES)) {
      const base = llToVec(def.lat, def.lon, R * 1.01);

      const core = new THREE.Mesh(
        new THREE.SphereGeometry(1.7, 12, 12),
        new THREE.MeshBasicMaterial({ color: CYAN }),
      );
      core.position.copy(base);
      this.scene.add(core);

      const halo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: this.makeGlowTexture(),
          color: CYAN,
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      halo.position.copy(base);
      halo.scale.set(10, 10, 1);
      this.scene.add(halo);

      // zone de visée invisible, plus large que le point
      const hit = new THREE.Mesh(
        new THREE.SphereGeometry(8, 8, 8),
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
      );
      hit.position.copy(base);
      hit.userData.cityKey = key;
      this.scene.add(hit);

      const label = this.makeLabel(def.name);
      label.position.copy(base.clone().multiplyScalar(1.14));
      this.scene.add(label);

      this.markers.push({ key, name: def.name, base, core, halo, hit });
    }
  }

  /** Contours des continents en lignes cyan (GeoJSON → segments sur sphère). */
  private async loadContinents(): Promise<void> {
    try {
      const res = await fetch(GEOJSON_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const geo = (await res.json()) as {
        features: { geometry: { type: string; coordinates: unknown } }[];
      };

      const verts: number[] = [];
      const addRing = (ring: [number, number][]) => {
        for (let i = 0; i < ring.length - 1; i++) {
          const a = llToVec(ring[i][1], ring[i][0], R * 1.002);
          const b = llToVec(ring[i + 1][1], ring[i + 1][0], R * 1.002);
          verts.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      };
      for (const f of geo.features) {
        const g = f.geometry;
        if (g.type === 'Polygon') {
          for (const ring of g.coordinates as [number, number][][]) addRing(ring);
        } else if (g.type === 'MultiPolygon') {
          for (const poly of g.coordinates as [number, number][][][]) {
            for (const ring of poly) addRing(ring);
          }
        }
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
      this.scene.add(
        new THREE.LineSegments(
          lineGeo,
          new THREE.LineBasicMaterial({
            color: CYAN,
            transparent: true,
            opacity: 0.45,
          }),
        ),
      );
    } catch (err) {
      console.warn('Contours des continents indisponibles :', err);
    }
  }

  private makeGlowTexture(): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.3)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }

  private makeLabel(text: string): THREE.Sprite {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 64;
    const ctx = c.getContext('2d')!;
    ctx.font = '26px monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(46, 230, 255, 0.8)';
    ctx.fillText(text, 128, 42);
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(c),
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      }),
    );
    sprite.scale.set(22, 5.5, 1);
    return sprite;
  }

  // ------------------------------------------------------------- gestures

  applyGestures(g: GestureState): void {
    if (this.state === 'city') {
      // le retour au globe se fait au poing maintenu (bulle de charge) ou au bouton
      this.city.applyGestures(g);
      return;
    }
    if (this.state === 'transition') return; // cinématique : mains ignorées

    // rotation progressive : la position de la main donne la vitesse
    this.orbitVel.x += (g.joystick.x * ROT_SPEED - this.orbitVel.x) * 0.08;
    this.orbitVel.y += (g.joystick.y * ROT_SPEED * 0.7 - this.orbitVel.y) * 0.08;
    this.theta += this.orbitVel.x;
    this.phi = THREE.MathUtils.clamp(
      this.phi + this.orbitVel.y,
      0.15,
      Math.PI - 0.15,
    );

    // zoom : main qui se ferme = approcher, qui s'ouvre = reculer
    this.zoomVel += (g.zoomVelocity - this.zoomVel) * 0.15;
    this.radius = THREE.MathUtils.clamp(
      this.radius * Math.exp(this.zoomVel),
      GLOBE_MIN,
      GLOBE_MAX,
    );
    this.updateCamera();

    // visée des marqueurs (le globe occulte ceux de la face cachée)
    this.hoveredCity = null;
    if (g.primary) {
      const ndc = new THREE.Vector2(
        g.primary.cursor.x * 2 - 1,
        -(g.primary.cursor.y * 2 - 1),
      );
      this.raycaster.setFromCamera(ndc, this.camera);
      const hits = this.raycaster.intersectObjects(
        [this.globeMesh, ...this.markers.map((m) => m.hit)],
        false,
      );
      const first = hits[0]?.object;
      if (first && first !== this.globeMesh) {
        this.hoveredCity = first.userData.cityKey as string;
      }
    }

    // pincer un point = plonger vers la ville
    if (g.grabStart && this.hoveredCity) this.select(this.hoveredCity);
  }

  private select(key: string): void {
    const marker = this.markers.find((m) => m.key === key)!;
    const sph = new THREE.Spherical().setFromVector3(marker.base);

    // chemin angulaire le plus court
    let eTheta = sph.theta;
    while (eTheta - this.theta > Math.PI) eTheta -= Math.PI * 2;
    while (eTheta - this.theta < -Math.PI) eTheta += Math.PI * 2;

    this.trans = {
      t: 0,
      dur: 2.4,
      sTheta: this.theta,
      sPhi: this.phi,
      sRad: this.radius,
      eTheta,
      ePhi: THREE.MathUtils.clamp(sph.phi, 0.15, Math.PI - 0.15),
      loaded: false,
      failed: false,
    };
    this.transKey = key;
    this.state = 'transition';
    this.onStatus(`PLONGÉE VERS ${CITIES[key].name}…`);

    this.city
      .load(key)
      .then(() => {
        if (this.trans) this.trans.loaded = true;
      })
      .catch((err) => {
        console.error(err);
        if (this.trans) this.trans.failed = true;
      });
  }

  backToGlobe(): void {
    if (this.state === 'globe') return;
    this.state = 'globe';
    this.trans = null;
    this.radius = 340;
    this.zoomVel = 0;
    this.flash();
    this.onStatus('ALL SYSTEMS OPERATIONAL', 'ready');
  }

  private flash(): void {
    this.flashEl.classList.add('on');
    setTimeout(() => this.flashEl.classList.remove('on'), 420);
  }

  // ---------------------------------------------------------------- render

  render(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.elapsedTime;

    if (this.state === 'city') {
      this.city.render();
      return;
    }

    // pulsation des points de villes
    this.markers.forEach((m, i) => {
      const hovered = m.key === this.hoveredCity;
      const pulse = 1 + 0.35 * Math.sin(t * 3 + i * 1.3);
      m.core.scale.setScalar(hovered ? 2.1 : pulse);
      (m.core.material as THREE.MeshBasicMaterial).color.setHex(hovered ? AMBER : CYAN);
      (m.halo.material as THREE.SpriteMaterial).color.setHex(hovered ? AMBER : CYAN);
      (m.halo.material as THREE.SpriteMaterial).opacity = hovered
        ? 0.95
        : 0.35 + 0.35 * Math.sin(t * 3 + i * 1.3);
    });

    // cinématique de plongée
    if (this.state === 'transition' && this.trans) {
      const tr = this.trans;
      tr.t += dt;
      const e = easeInOutCubic(Math.min(tr.t / tr.dur, 1));
      this.theta = THREE.MathUtils.lerp(tr.sTheta, tr.eTheta, e);
      this.phi = THREE.MathUtils.lerp(tr.sPhi, tr.ePhi, e);
      this.radius = THREE.MathUtils.lerp(tr.sRad, R + 6, e);
      this.updateCamera();

      if (tr.failed) {
        this.trans = null;
        this.state = 'globe';
        this.radius = 340;
        this.onStatus('ÉCHEC DU CHARGEMENT DE LA VILLE', 'error');
      } else if (tr.t >= tr.dur && tr.loaded) {
        this.flash();
        this.city.enterCinematic();
        this.trans = null;
        this.state = 'city';
        this.onStatus(`${CITIES[this.transKey].name} — EN LIGNE`, 'ready');
        this.city.render();
        return;
      }
      // si la ville n'est pas encore chargée, la caméra reste en orbite basse
    }

    this.composer.render();
  }

  private updateCamera(): void {
    this.camera.position.setFromSphericalCoords(this.radius, this.phi, this.theta);
    this.camera.lookAt(0, 0, 0);
  }

  resize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(w, h);
    this.city.resize(w, h);
  }
}
