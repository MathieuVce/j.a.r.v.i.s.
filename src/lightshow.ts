import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import type { GestureState, HandState } from './gestures';
import type { AudioFrame } from './music';

export type AmbianceKey = 'neon' | 'space' | 'minimal';

interface Ambiance {
  fog: number;
  palettes: [number, number][]; // [lumière/structure, barres/particules/sol]
  floor: boolean;
  stars: boolean;
}

// couleurs volontairement désaturées/assombries (le bloom fait le reste)
const AMBIANCES: Record<AmbianceKey, Ambiance> = {
  neon: {
    fog: 0x0a0212,
    palettes: [
      [0xc218a0, 0x0e93a8],
      [0xd96a14, 0xb22250],
      [0x14a857, 0x0e93a8],
      [0x7a26c9, 0xc218a0],
      [0xb22929, 0xd98a24],
    ],
    floor: true,
    stars: false,
  },
  space: {
    fog: 0x02040d,
    palettes: [
      [0x2e3fb8, 0x5a24b0],
      [0x0d6e96, 0x2e3fb8],
      [0x8d99d6, 0x37288c],
      [0x1aa385, 0x1d54a3],
    ],
    floor: false,
    stars: true,
  },
  minimal: {
    fog: 0x000000,
    palettes: [
      [0xbbbbbb, 0x12889e],
      [0xb8913d, 0x999999],
      [0xb23a3a, 0x777777],
      [0x4fb88a, 0x666666],
    ],
    floor: true,
    stars: false,
  },
};

const BAR_COUNT = 64;
const P_COUNT = 2000;
const JOY_DEAD = 0.1;
const JOY_RANGE = 0.32;

/** Joystick local (même réponse que le moteur de gestes). */
function joy(hand: HandState): { x: number; y: number } {
  const dx = hand.cursor.x - 0.5;
  const dy = hand.cursor.y - 0.5;
  const mag = Math.hypot(dx, dy);
  if (mag <= JOY_DEAD) return { x: 0, y: 0 };
  const eff = Math.min(1, (mag - JOY_DEAD) / JOY_RANGE) ** 2;
  return { x: (dx / mag) * eff, y: (dy / mag) * eff };
}

export class LightShowWorld {
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private composer: EffectComposer;
  private clock = new THREE.Clock();

  private mainLight!: THREE.PointLight;
  private structure!: THREE.Mesh;
  private shapes: THREE.BufferGeometry[] = [];
  private gyros: THREE.Mesh[] = [];
  private particles!: THREE.Points;
  private pPos!: Float32Array;
  private pRad = new Float32Array(P_COUNT);
  private pTheta = new Float32Array(P_COUNT);
  private pPhi = new Float32Array(P_COUNT);
  private pSpeed = new Float32Array(P_COUNT);
  private pBaseX = new Float32Array(P_COUNT);
  private pBaseZ = new Float32Array(P_COUNT);
  private pY = new Float32Array(P_COUNT);
  private particleMode = 0; // 0 tourbillon, 1 pluie, 2 respiration
  private bars!: THREE.InstancedMesh;
  private wave!: THREE.Mesh;
  private waveGeo!: THREE.PlaneGeometry;
  private stars!: THREE.Points;
  private shockwaves: { mesh: THREE.Mesh; age: number }[] = [];

  private ambiance: AmbianceKey = 'neon';
  private paletteIdx = 0;
  private shapeIdx = 0;

  private lightTarget = new THREE.Vector3(0, 14, 0);
  private intensityTarget = 380;
  private flashEnv = 0;
  private prevBeat = 0;

  // caméra orbitale : 2e main ouverte = joystick, 2 pinces = distance
  private camTheta = 0.4;
  private camPhi = 1.08;
  private camRadius = 64;
  private camThetaVel = 0;
  private camPhiVel = 0;
  private camManual = false;
  private zoomVel = 0;

  private prevVictory = false;
  private prevThree = false;
  private prevFistBeat = false;
  private manBeat = 0;

  constructor(renderer: THREE.WebGLRenderer) {
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      600,
    );
    this.buildScene();
    this.applyAmbiance('neon');

    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    // bloom contenu : halo sans écraser les couleurs sombres
    this.composer.addPass(
      new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.7,
        0.6,
        0.32,
      ),
    );
    this.composer.addPass(new OutputPass());
  }

  // ----------------------------------------------------------------- build

  private buildScene(): void {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.05));
    this.mainLight = new THREE.PointLight(0xffffff, 380, 0, 1.7);
    this.mainLight.position.copy(this.lightTarget);
    this.scene.add(this.mainLight);

    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xddddee }),
    );
    this.mainLight.add(bulb);

    // structure centrale morphable (wireframe)
    this.shapes = [
      new THREE.IcosahedronGeometry(9, 1),
      new THREE.TorusKnotGeometry(6.5, 2, 110, 14),
      new THREE.OctahedronGeometry(10, 0),
      new THREE.TorusGeometry(8, 2.6, 14, 64),
    ];
    this.structure = new THREE.Mesh(
      this.shapes[0],
      new THREE.MeshStandardMaterial({
        color: 0xc218a0,
        wireframe: true,
        emissive: 0xc218a0,
        emissiveIntensity: 0.16,
        roughness: 0.5,
      }),
    );
    this.structure.position.y = 10;
    this.scene.add(this.structure);

    // anneaux gyroscopiques autour de la structure
    const gyroSpecs = [13.5, 17, 20.5];
    gyroSpecs.forEach((r, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.1, 6, 96),
        new THREE.MeshBasicMaterial({ color: 0xc218a0, transparent: true, opacity: 0.5 }),
      );
      ring.position.y = 10;
      ring.rotation.x = (i * Math.PI) / 3.2;
      this.scene.add(ring);
      this.gyros.push(ring);
    });

    // particules vivantes
    this.pPos = new Float32Array(P_COUNT * 3);
    for (let i = 0; i < P_COUNT; i++) {
      this.pRad[i] = 18 + Math.random() * 32;
      this.pTheta[i] = Math.random() * Math.PI * 2;
      this.pPhi[i] = Math.acos(2 * Math.random() - 1);
      this.pSpeed[i] = 0.3 + Math.random() * 1.0;
      this.pBaseX[i] = (Math.random() - 0.5) * 80;
      this.pBaseZ[i] = (Math.random() - 0.5) * 80;
      this.pY[i] = -14 + Math.random() * 74;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    this.particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: 0x0e93a8,
        size: 0.42,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.scene.add(this.particles);

    // anneau de barres spectrales
    this.bars = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1.4, 1, 1.4),
      new THREE.MeshBasicMaterial({ color: 0x0e93a8 }),
      BAR_COUNT,
    );
    this.scene.add(this.bars);

    // sol : nappe de lignes en vagues (déformée chaque frame)
    this.waveGeo = new THREE.PlaneGeometry(240, 240, 46, 46);
    this.wave = new THREE.Mesh(
      this.waveGeo,
      new THREE.MeshBasicMaterial({
        color: 0x0e93a8,
        wireframe: true,
        transparent: true,
        opacity: 0.13,
      }),
    );
    this.wave.rotation.x = -Math.PI / 2;
    this.wave.position.y = -12;
    this.scene.add(this.wave);

    // étoiles (ambiance space)
    const sCount = 2500;
    const sPos = new Float32Array(sCount * 3);
    for (let i = 0; i < sCount; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(200 + Math.random() * 300);
      sPos.set([v.x, v.y, v.z], i * 3);
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    this.stars = new THREE.Points(
      sGeo,
      new THREE.PointsMaterial({ color: 0x9fb8cc, size: 0.8, transparent: true, opacity: 0.6 }),
    );
    this.scene.add(this.stars);
  }

  // ------------------------------------------------------------- contrôles

  setAmbiance(key: AmbianceKey): void {
    this.applyAmbiance(key);
  }

  private applyAmbiance(key: AmbianceKey): void {
    this.ambiance = key;
    this.paletteIdx = 0;
    const amb = AMBIANCES[key];
    this.scene.fog = new THREE.FogExp2(amb.fog, 0.011);
    this.scene.background = new THREE.Color(amb.fog);
    this.wave.visible = amb.floor;
    this.stars.visible = amb.stars;
    this.applyPalette();
  }

  private applyPalette(): void {
    const [c1, c2] = AMBIANCES[this.ambiance].palettes[this.paletteIdx];
    this.mainLight.color.setHex(c1);
    const sm = this.structure.material as THREE.MeshStandardMaterial;
    sm.color.setHex(c1);
    sm.emissive.setHex(c1);
    for (const gyro of this.gyros) {
      (gyro.material as THREE.MeshBasicMaterial).color.setHex(c1);
    }
    (this.bars.material as THREE.MeshBasicMaterial).color.setHex(c2);
    (this.particles.material as THREE.PointsMaterial).color.setHex(c2);
    (this.wave.material as THREE.MeshBasicMaterial).color.setHex(c2);
  }

  private nextPalette(): void {
    this.paletteIdx = (this.paletteIdx + 1) % AMBIANCES[this.ambiance].palettes.length;
    this.applyPalette();
  }

  /** Change à la fois la forme centrale et le comportement des particules. */
  private nextShape(): void {
    this.shapeIdx = (this.shapeIdx + 1) % this.shapes.length;
    this.structure.geometry = this.shapes[this.shapeIdx];
    this.particleMode = this.shapeIdx % 3;
    this.flashEnv = Math.max(this.flashEnv, 0.45);
  }

  // ------------------------------------------------------------- gestures

  applyGestures(g: GestureState): void {
    const p = g.primary;
    if (p?.present) {
      // ✋ main principale ouverte : déplace la lumière (X, Y, Z = profondeur)
      if (p.openPalm) {
        this.lightTarget.set(
          (p.cursor.x - 0.5) * 80,
          (0.5 - p.cursor.y) * 50 + 12,
          THREE.MathUtils.clamp((p.depth - 0.14) * 320, -30, 34),
        );
      }

      // 🤏 pince : intensité continue + flash au pincement sec
      this.intensityTarget = 260 + p.pinchStrength * 1000;
      if (g.grabStart) this.flashEnv = 1;

      // ✌️ palette · 🤟 forme + particules (fronts montants)
      if (p.victory && !this.prevVictory) this.nextPalette();
      this.prevVictory = p.victory;
      if (p.threeFingers && !this.prevThree) this.nextShape();
      this.prevThree = p.threeFingers;
    }

    // ✋✋ 2e main ouverte : joystick caméra (orbite libre)
    const sec = g.hands.find((h) => h.present && h !== p && h.openPalm);
    this.camManual = !!sec;
    const j = sec ? joy(sec) : { x: 0, y: 0 };
    this.camThetaVel += (j.x * 0.04 - this.camThetaVel) * 0.08;
    this.camPhiVel += (j.y * 0.028 - this.camPhiVel) * 0.08;
    this.camTheta += this.camThetaVel;
    this.camPhi = THREE.MathUtils.clamp(this.camPhi + this.camPhiVel, 0.45, 1.45);

    // 🤏🤏 deux pinces : distance caméra
    this.zoomVel += (g.zoomVelocity - this.zoomVel) * 0.15;
    this.camRadius = THREE.MathUtils.clamp(this.camRadius * Math.exp(this.zoomVel), 28, 150);
  }

  /** Rythme manuel : le poing donne le beat, le mouvement donne l'énergie. */
  manualFrame(g: GestureState, dt: number): AudioFrame {
    const fist = g.primary?.fist === true;
    if (fist && !this.prevFistBeat) this.manBeat = 1;
    this.prevFistBeat = fist;
    this.manBeat = Math.max(0, this.manBeat - dt * 2.4);
    const speed = Math.hypot(g.joystick.x, g.joystick.y);
    return {
      bass: this.manBeat * 0.9,
      mid: 0.12 + speed * 0.6,
      high: (g.primary?.pinchStrength ?? 0) * 0.7,
      level: 0.2 + this.manBeat * 0.5,
      beat: this.manBeat,
      playing: true,
    };
  }

  // ---------------------------------------------------------------- render

  render(frame: AudioFrame): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.elapsedTime;

    this.flashEnv *= Math.exp(-5.5 * dt);

    // lumière : suit la main, pulse avec le beat + flash
    this.mainLight.position.lerp(this.lightTarget, 0.12);
    this.mainLight.intensity +=
      (this.intensityTarget * (1 + frame.beat * 1.1) +
        this.flashEnv * 2800 -
        this.mainLight.intensity) *
      0.25;

    // structure : basses = taille, médiums = rotation
    const s = 1 + frame.bass * 0.85 + this.flashEnv * 0.25;
    this.structure.scale.setScalar(s);
    this.structure.rotation.y += dt * (0.25 + frame.mid * 2.6);
    this.structure.rotation.x += dt * (0.1 + frame.mid * 1.1);
    (this.structure.material as THREE.MeshStandardMaterial).emissiveIntensity =
      0.14 + frame.beat * 0.8 + this.flashEnv * 0.9;

    // anneaux gyroscopiques
    this.gyros.forEach((gyro, i) => {
      gyro.rotation.x += dt * (0.3 + frame.mid * 1.6) * (i % 2 ? 1 : -1);
      gyro.rotation.y += dt * (0.2 + frame.mid * 1.1);
      const gs = 1 + frame.beat * 0.12;
      gyro.scale.setScalar(gs);
      (gyro.material as THREE.MeshBasicMaterial).opacity = 0.3 + frame.beat * 0.5;
    });

    // onde de choc sur chaque beat
    if (frame.beat > this.prevBeat + 0.3) this.spawnShockwave();
    this.prevBeat = frame.beat;
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.age += dt;
      const scale = 1 + sw.age * 42;
      sw.mesh.scale.setScalar(scale);
      (sw.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.4 - sw.age * 0.55);
      if (sw.age > 0.75) {
        this.scene.remove(sw.mesh);
        sw.mesh.geometry.dispose();
        this.shockwaves.splice(i, 1);
      }
    }

    this.animateParticles(dt, t, frame);

    // barres spectrales
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < BAR_COUNT; i++) {
      const f = i / BAR_COUNT;
      const band = f < 0.33 ? frame.bass : f < 0.66 ? frame.mid : frame.high;
      const wob = 0.75 + 0.25 * Math.sin(t * 3.2 + i * 0.6);
      const h = 0.6 + band * 18 * wob + frame.beat * 2.5;
      const a = f * Math.PI * 2 + t * 0.05;
      q.setFromAxisAngle(up, -a);
      m.compose(
        new THREE.Vector3(Math.cos(a) * 26, -12 + h / 2, Math.sin(a) * 26),
        q,
        new THREE.Vector3(1, h, 1),
      );
      this.bars.setMatrixAt(i, m);
    }
    this.bars.instanceMatrix.needsUpdate = true;

    // sol en vagues : houle continue + gonflement sur les basses
    if (this.wave.visible) {
      const pos = this.waveGeo.getAttribute('position') as THREE.BufferAttribute;
      const amp = 1.1 + frame.bass * 5.5;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        pos.setZ(
          i,
          Math.sin(x * 0.07 + t * 1.3) * amp * 0.6 +
            Math.cos(y * 0.06 + t * 0.9) * amp * 0.6 +
            Math.sin((x + y) * 0.045 + t * 0.6) * amp * 0.4,
        );
      }
      pos.needsUpdate = true;
    }

    if (this.stars.visible) {
      (this.stars.material as THREE.PointsMaterial).opacity =
        0.4 + frame.high * 0.5 + 0.08 * Math.sin(t * 7);
    }

    // caméra : orbite auto si la 2e main ne pilote pas
    if (!this.camManual) this.camTheta += dt * (0.05 + frame.mid * 0.15);
    const r = this.camRadius - frame.beat * 2.5;
    const target = new THREE.Vector3(0, 8, 0);
    this.camera.position
      .setFromSphericalCoords(r, this.camPhi, this.camTheta)
      .add(target);
    this.camera.lookAt(target);

    this.composer.render();
  }

  /** Trois comportements : tourbillon orbital, pluie, respiration radiale. */
  private animateParticles(dt: number, t: number, frame: AudioFrame): void {
    const pm = this.particles.material as THREE.PointsMaterial;
    pm.size = 0.42 * (1 + frame.bass * 0.9);
    pm.opacity = 0.32 + frame.high * 0.42;

    const breathe = 1 + frame.bass * 0.35 + this.flashEnv * 0.15;
    for (let i = 0; i < P_COUNT; i++) {
      let x: number, y: number, z: number;
      if (this.particleMode === 0) {
        // tourbillon : orbites individuelles, accélérées par les médiums
        this.pTheta[i] += dt * this.pSpeed[i] * (0.25 + frame.mid * 1.8);
        const rad = this.pRad[i] * breathe;
        x = rad * Math.sin(this.pPhi[i]) * Math.cos(this.pTheta[i]);
        z = rad * Math.sin(this.pPhi[i]) * Math.sin(this.pTheta[i]);
        y = rad * Math.cos(this.pPhi[i]) * 0.65 + 10;
      } else if (this.particleMode === 1) {
        // pluie : chute continue, vitesse liée aux basses, légère dérive
        this.pY[i] -= dt * this.pSpeed[i] * (9 + frame.bass * 45);
        if (this.pY[i] < -14) this.pY[i] = 62;
        x = this.pBaseX[i] + Math.sin(t * 0.8 + i) * 1.2;
        z = this.pBaseZ[i] + Math.cos(t * 0.7 + i) * 1.2;
        y = this.pY[i];
      } else {
        // respiration : coquille qui gonfle sur les basses, scintille en surface
        const rad = this.pRad[i] * (1 + frame.bass * 0.7 + 0.05 * Math.sin(t * 2 + i));
        x = rad * Math.sin(this.pPhi[i]) * Math.cos(this.pTheta[i] + t * 0.04);
        z = rad * Math.sin(this.pPhi[i]) * Math.sin(this.pTheta[i] + t * 0.04);
        y = rad * Math.cos(this.pPhi[i]) * 0.7 + 10;
      }
      this.pPos[i * 3] = x;
      this.pPos[i * 3 + 1] = y;
      this.pPos[i * 3 + 2] = z;
    }
    (this.particles.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate =
      true;
  }

  private spawnShockwave(): void {
    if (this.shockwaves.length > 5) return;
    const [c1] = AMBIANCES[this.ambiance].palettes[this.paletteIdx];
    const mesh = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.06, 6, 64),
      new THREE.MeshBasicMaterial({ color: c1, transparent: true, opacity: 0.4 }),
    );
    mesh.position.y = 10;
    mesh.rotation.x = Math.PI / 2;
    this.scene.add(mesh);
    this.shockwaves.push({ mesh, age: 0 });
  }

  resize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(w, h);
  }
}
