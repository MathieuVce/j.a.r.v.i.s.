import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import type { GestureState } from './gestures';

const CYAN = 0x2ee6ff;
const AMBER = 0xffc857;

const ROT_SPEED = 0.035; // rad/frame à vitesse joystick max
const MIN_RADIUS = 4;
const MAX_RADIUS = 220;

interface Planet {
  mesh: THREE.Mesh;
  spin: number;
  home: THREE.Vector3;
  velocity: THREE.Vector3;
  panel: THREE.Sprite;
}

interface Comet {
  head: THREE.Mesh;
  trail: THREE.Line;
  history: THREE.Vector3[];
  velocity: THREE.Vector3;
  respawnIn: number;
}

interface Pulse {
  mesh: THREE.Mesh;
  age: number;
}

export class Universe {
  private composer: EffectComposer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private raycaster = new THREE.Raycaster();
  private clock = new THREE.Clock();

  private radius = 38;
  private theta = 0.6;
  private phi = 1.25;
  // vitesses lissées pour une navigation fluide avec inertie
  private orbitVel = { x: 0, y: 0 };
  private zoomVel = 0;

  private planets: Planet[] = [];
  private comets: Comet[] = [];
  private pulses: Pulse[] = [];
  private grabbed: Planet | null = null;
  private grabDistance = 0;
  private grabPrevPos = new THREE.Vector3();
  private grabVelocity = new THREE.Vector3();
  private hovered: Planet | null = null;
  private stars!: THREE.Points;
  private belt!: THREE.InstancedMesh;
  private nebulae: THREE.Sprite[] = [];
  private grid!: THREE.PolarGridHelper;

  constructor(renderer: THREE.WebGLRenderer) {
    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1200,
    );
    this.scene.fog = new THREE.FogExp2(0x02060c, 0.0022);

    this.buildScene();

    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    // bloom discret : juste un halo, sans écraser les détails
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.45,
      0.5,
      0.35,
    );
    this.composer.addPass(bloom);
    this.composer.addPass(new OutputPass());
    this.updateCamera();
  }

  // ------------------------------------------------------------------ build

  private buildScene(): void {
    // soleil
    const sun = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.2, 3),
      new THREE.MeshBasicMaterial({ color: AMBER }),
    );
    this.scene.add(sun);
    const sunHalo = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.8, 2),
      new THREE.MeshBasicMaterial({ color: AMBER, wireframe: true, transparent: true, opacity: 0.12 }),
    );
    this.scene.add(sunHalo);
    this.scene.add(new THREE.PointLight(AMBER, 600, 0, 1.8));
    this.scene.add(new THREE.AmbientLight(CYAN, 0.15));

    // planètes attrapables + panneaux de données
    const specs = [
      { r: 1.6, dist: 10, color: CYAN, name: 'KEPLER-7', cls: 'TERRESTRIAL' },
      { r: 2.4, dist: 17, color: 0x57a8ff, name: 'TITAN-IX', cls: 'OCEANIC' },
      { r: 1.2, dist: 24, color: 0x9d7bff, name: 'VESTA-3', cls: 'CRYOGENIC' },
      { r: 3.0, dist: 34, color: 0x37ffc4, name: 'AURORA PRIME', cls: 'GAS GIANT' },
    ];
    specs.forEach((s, i) => {
      const angle = (i / specs.length) * Math.PI * 2 + 0.7;
      const mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(s.r, 3),
        new THREE.MeshStandardMaterial({
          color: s.color,
          roughness: 0.75,
          metalness: 0.15,
          emissive: s.color,
          emissiveIntensity: 0.1,
        }),
      );
      mesh.position.set(Math.cos(angle) * s.dist, (i % 2 ? 1 : -1) * 1.5, Math.sin(angle) * s.dist);

      const wire = new THREE.Mesh(
        new THREE.IcosahedronGeometry(s.r * 1.25, 1),
        new THREE.MeshBasicMaterial({ color: s.color, wireframe: true, transparent: true, opacity: 0.08 }),
      );
      mesh.add(wire);
      this.scene.add(mesh);

      const panel = this.makePanel(s.name, [
        `CLASS ........ ${s.cls}`,
        `RADIUS ....... ${(s.r * 4200).toFixed(0)} KM`,
        `ORBIT ........ ${s.dist} AU`,
        `STATUS ....... STABLE`,
      ]);
      panel.position.copy(mesh.position).y += s.r * 2.4;
      panel.visible = false;
      this.scene.add(panel);

      this.planets.push({
        mesh,
        spin: 0.2 + Math.random() * 0.4,
        home: mesh.position.clone(),
        velocity: new THREE.Vector3(),
        panel,
      });

      const ring = new THREE.Mesh(
        new THREE.RingGeometry(s.dist - 0.04, s.dist + 0.04, 128),
        new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.12, side: THREE.DoubleSide }),
      );
      ring.rotation.x = Math.PI / 2;
      this.scene.add(ring);
    });

    // ceinture d'astéroïdes (instanciée)
    const beltCount = 450;
    this.belt = new THREE.InstancedMesh(
      new THREE.DodecahedronGeometry(0.22, 0),
      new THREE.MeshStandardMaterial({ color: 0x8a9aa3, roughness: 0.9, emissive: 0x2ee6ff, emissiveIntensity: 0.04, flatShading: true }),
      beltCount,
    );
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const sc = new THREE.Vector3();
    for (let i = 0; i < beltCount; i++) {
      const a = Math.random() * Math.PI * 2;
      const d = 28 + (Math.random() - 0.5) * 3.5;
      const pos = new THREE.Vector3(Math.cos(a) * d, (Math.random() - 0.5) * 1.6, Math.sin(a) * d);
      q.setFromEuler(new THREE.Euler(Math.random() * 3, Math.random() * 3, Math.random() * 3));
      sc.setScalar(0.4 + Math.random() * 1.3);
      m.compose(pos, q, sc);
      this.belt.setMatrixAt(i, m);
    }
    this.scene.add(this.belt);

    // grille polaire holographique
    this.grid = new THREE.PolarGridHelper(48, 16, 12, 64, CYAN, CYAN);
    (this.grid.material as THREE.Material).transparent = true;
    (this.grid.material as THREE.Material).opacity = 0.07;
    this.grid.position.y = -10;
    this.scene.add(this.grid);

    // quadrillage cartésien étendu sous le système (profondeur / immersion)
    const floor = new THREE.GridHelper(280, 56, CYAN, CYAN);
    (floor.material as THREE.Material).transparent = true;
    (floor.material as THREE.Material).opacity = 0.045;
    floor.position.y = -10.05;
    this.scene.add(floor);

    // sphère céleste : quadrillage lat/long englobant tout l'univers
    const celestial = new THREE.Mesh(
      new THREE.SphereGeometry(135, 36, 24),
      new THREE.MeshBasicMaterial({
        color: CYAN,
        wireframe: true,
        transparent: true,
        opacity: 0.035,
        depthWrite: false,
      }),
    );
    this.scene.add(celestial);

    // nébuleuses (sprites additifs au loin)
    const nebulaTex = this.makeGlowTexture();
    const nebulaColors = [0x2ee6ff, 0x9d7bff, 0x1f6dff, 0x37ffc4];
    for (let i = 0; i < 14; i++) {
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: nebulaTex,
          color: nebulaColors[i % nebulaColors.length],
          transparent: true,
          opacity: 0.025 + Math.random() * 0.035,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      sprite.position.copy(
        new THREE.Vector3().randomDirection().multiplyScalar(140 + Math.random() * 120),
      );
      const s = 90 + Math.random() * 140;
      sprite.scale.set(s, s, 1);
      this.scene.add(sprite);
      this.nebulae.push(sprite);
    }

    // champ d'étoiles
    const starCount = 4000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const v = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(150 + Math.random() * 400);
      positions.set([v.x, v.y, v.z], i * 3);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xbfefff, size: 0.8, sizeAttenuation: true, transparent: true, opacity: 0.8 }),
    );
    this.scene.add(this.stars);

    // comètes
    for (let i = 0; i < 3; i++) this.comets.push(this.makeComet(i * 4));
  }

  /** Texture floue radiale générée à la volée (nébuleuses, halos). */
  private makeGlowTexture(): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const ctx = c.getContext('2d')!;
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.35)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  /** Panneau de données holographique (CanvasTexture → Sprite). */
  private makePanel(title: string, lines: string[]): THREE.Sprite {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 288;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = 'rgba(4, 18, 28, 0.72)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.strokeStyle = 'rgba(46, 230, 255, 0.9)';
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, c.width - 12, c.height - 12);
    ctx.fillStyle = 'rgba(46, 230, 255, 0.25)';
    ctx.fillRect(6, 6, c.width - 12, 54);

    ctx.font = 'bold 34px monospace';
    ctx.fillStyle = '#ffc857';
    ctx.fillText(`◉ ${title}`, 24, 46);
    ctx.font = '26px monospace';
    ctx.fillStyle = '#2ee6ff';
    lines.forEach((l, i) => ctx.fillText(l, 24, 108 + i * 42));

    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }),
    );
    sprite.scale.set(9, 5, 1);
    return sprite;
  }

  private makeComet(delay: number): Comet {
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xeaffff }),
    );
    head.visible = false;
    this.scene.add(head);

    const N = 28;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    const colors = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const f = 1 - i / N;
      colors.set([0.18 * f, 0.9 * f, 1.0 * f], i * 3);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const trail = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending, transparent: true }),
    );
    trail.frustumCulled = false;
    this.scene.add(trail);

    return {
      head,
      trail,
      history: Array.from({ length: N }, () => new THREE.Vector3()),
      velocity: new THREE.Vector3(),
      respawnIn: delay,
    };
  }

  private respawnComet(c: Comet): void {
    const start = new THREE.Vector3().randomDirection().multiplyScalar(160);
    const target = new THREE.Vector3().randomDirection().multiplyScalar(25);
    c.head.position.copy(start);
    c.velocity.copy(target.sub(start).normalize().multiplyScalar(45 + Math.random() * 50));
    c.history.forEach((p) => p.copy(start));
    c.head.visible = true;
    c.trail.visible = true;
  }

  // --------------------------------------------------------------- gestures

  applyGestures(g: GestureState): void {
    // rotation progressive : la position de la main donne la vitesse
    this.orbitVel.x += (g.joystick.x * ROT_SPEED - this.orbitVel.x) * 0.08;
    this.orbitVel.y += (g.joystick.y * ROT_SPEED * 0.7 - this.orbitVel.y) * 0.08;
    this.theta += this.orbitVel.x;
    this.phi = THREE.MathUtils.clamp(
      this.phi + this.orbitVel.y,
      0.2,
      Math.PI - 0.2,
    );

    // zoom continu : main qui se ferme = zoom, qui s'ouvre = dézoom
    this.zoomVel += (g.zoomVelocity - this.zoomVel) * 0.15;
    this.radius = THREE.MathUtils.clamp(
      this.radius * Math.exp(this.zoomVel),
      MIN_RADIUS,
      MAX_RADIUS,
    );

    this.updateCamera();

    const ndc = g.primary
      ? new THREE.Vector2(g.primary.cursor.x * 2 - 1, -(g.primary.cursor.y * 2 - 1))
      : null;

    if (g.grabStart && ndc) this.tryGrab(ndc);
    if (g.grabEnd) this.release();

    if (this.grabbed && g.mode === 'grab' && ndc) {
      this.raycaster.setFromCamera(ndc, this.camera);
      const mesh = this.grabbed.mesh;
      this.grabPrevPos.copy(mesh.position);
      mesh.position
        .copy(this.raycaster.ray.origin)
        .addScaledVector(this.raycaster.ray.direction, this.grabDistance);
      // vélocité lissée pour le lancer
      const instant = mesh.position.clone().sub(this.grabPrevPos).multiplyScalar(60);
      this.grabVelocity.lerp(instant, 0.25);
      this.grabbed.panel.position.copy(mesh.position).y += 3;
    }

    if (!this.grabbed && ndc) {
      this.raycaster.setFromCamera(ndc, this.camera);
      const hits = this.raycaster.intersectObjects(
        this.planets.map((p) => p.mesh),
        false,
      );
      this.setHovered(hits.length ? this.findPlanet(hits[0].object as THREE.Mesh) : null);
    } else {
      this.setHovered(null);
    }
  }

  get isHovering(): boolean {
    return this.hovered !== null;
  }
  get isGrabbing(): boolean {
    return this.grabbed !== null;
  }

  private findPlanet(mesh: THREE.Mesh): Planet | null {
    return this.planets.find((p) => p.mesh === mesh) ?? null;
  }

  private tryGrab(ndc: THREE.Vector2): void {
    this.raycaster.setFromCamera(ndc, this.camera);
    const hits = this.raycaster.intersectObjects(
      this.planets.map((p) => p.mesh),
      false,
    );
    if (!hits.length) return;
    this.grabbed = this.findPlanet(hits[0].object as THREE.Mesh);
    if (!this.grabbed) return;
    this.grabDistance = hits[0].distance;
    this.grabVelocity.set(0, 0, 0);
    this.grabPrevPos.copy(this.grabbed.mesh.position);
    this.setEmissive(this.grabbed, 0.45);
    this.grabbed.panel.visible = true;
    this.spawnPulse(this.grabbed.mesh.position);
  }

  private release(): void {
    if (!this.grabbed) return;
    // lancer : la planète part avec l'inertie puis revient en orbite (ressort)
    this.grabbed.velocity.copy(this.grabVelocity.clampLength(0, 40));
    this.setEmissive(this.grabbed, 0.1);
    this.grabbed.panel.visible = false;
    this.grabbed = null;
  }

  private setHovered(planet: Planet | null): void {
    if (planet === this.hovered) return;
    if (this.hovered) {
      this.setEmissive(this.hovered, 0.1);
      this.hovered.panel.visible = false;
    }
    this.hovered = planet;
    if (this.hovered) {
      this.setEmissive(this.hovered, 0.3);
      this.hovered.panel.visible = true;
    }
  }

  private setEmissive(planet: Planet, intensity: number): void {
    (planet.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
  }

  private spawnPulse(pos: THREE.Vector3): void {
    const mesh = new THREE.Mesh(
      new THREE.RingGeometry(1, 1.12, 48),
      new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
    );
    mesh.position.copy(pos);
    mesh.lookAt(this.camera.position);
    this.scene.add(mesh);
    this.pulses.push({ mesh, age: 0 });
  }

  // ---------------------------------------------------------------- render

  render(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.elapsedTime;

    for (const p of this.planets) {
      p.mesh.rotation.y += p.spin * dt;
      if (p !== this.grabbed) {
        // physique de retour : inertie + ressort vers la position d'origine
        const toHome = p.home.clone().sub(p.mesh.position);
        if (p.velocity.lengthSq() > 0.0001 || toHome.lengthSq() > 0.001) {
          p.velocity.addScaledVector(toHome, 2.2 * dt);
          p.velocity.multiplyScalar(Math.exp(-1.6 * dt));
          p.mesh.position.addScaledVector(p.velocity, dt);
          p.panel.position.copy(p.mesh.position).y += 3;
        } else {
          // flottement léger pour rendre le système vivant
          p.mesh.position.y = p.home.y + Math.sin(t * 0.7 + p.home.x) * 0.25;
        }
      }
    }

    this.belt.rotation.y += dt * 0.02;
    this.stars.rotation.y += dt * 0.004;
    this.grid.rotation.y += dt * 0.01;

    // comètes
    for (const c of this.comets) {
      if (!c.head.visible) {
        c.respawnIn -= dt;
        if (c.respawnIn <= 0) this.respawnComet(c);
        continue;
      }
      c.head.position.addScaledVector(c.velocity, dt);
      c.history.pop();
      c.history.unshift(c.head.position.clone());
      const attr = c.trail.geometry.getAttribute('position') as THREE.BufferAttribute;
      c.history.forEach((p, i) => attr.setXYZ(i, p.x, p.y, p.z));
      attr.needsUpdate = true;
      if (c.head.position.length() > 230) {
        c.head.visible = false;
        c.trail.visible = false;
        c.respawnIn = 3 + Math.random() * 8;
      }
    }

    // ondes de choc du grab
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const pulse = this.pulses[i];
      pulse.age += dt;
      const s = 1 + pulse.age * 14;
      pulse.mesh.scale.set(s, s, s);
      (pulse.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.45 - pulse.age * 0.9);
      if (pulse.age > 0.55) {
        this.scene.remove(pulse.mesh);
        pulse.mesh.geometry.dispose();
        this.pulses.splice(i, 1);
      }
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
  }
}
