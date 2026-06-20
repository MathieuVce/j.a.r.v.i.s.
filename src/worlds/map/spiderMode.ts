import * as THREE from 'three';
import type { GestureState } from '../../input/gestures';
import { xrHandState } from '../../vr';

/**
 * Mode jeu « Spider-Man » (VR uniquement), activé au clic du stick gauche en
 * ville. Le joueur est un personnage au sol soumis à la gravité : on marche /
 * court au stick droit, on saute (A, ×2 = double saut), et on tire une toile
 * par main (grip + gâchette ensemble, comme le lanceur de Spider-Man) pour se
 * balancer entre les bâtiments. Collisions complètes : sol + murs + toits.
 *
 * Repère : en VR le monde écrit `camera.position`/`quaternion` en coordonnées
 * monde, que le rig adopte au rendu (le casque ajoute sa pose par-dessus). On
 * pose donc `camera.position = pieds` (référentiel local-floor → le casque
 * fournit la taille) et `camera.quaternion = identity` (le casque pilote le
 * regard). Le rig restant non tourné, une pose manette en espace de référence
 * devient une pose monde par simple translation de `feet`.
 */

export interface BuildingBox {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  top: number;
}

// --- personnage (échelle ville : 1u≈1m, hauteurs ×2.5 ; à régler au casque) ---
const GRAVITY = 22; // u/s² (allégée : moins « lourd », chute plus aérienne)
const WALK = 9; // u/s au stick partiel
const RUN = 22; // u/s au stick à fond
const RUN_THRESH = 0.92; // |stick| au-delà = course
const GROUND_ACCEL = 60; // u/s² vers la vitesse désirée au sol
const AIR_ACCEL = 14; // contrôle aérien faible
const JUMP_VEL = 17; // impulsion verticale
const DOUBLE_JUMP_VEL = 15;
const STAND = 1.7; // hauteur pieds→tête (capsule + point d'accroche toile)
const CAPSULE_R = 0.5; // rayon horizontal (collision murs) — serré pour coller aux façades
const SNAP_ANGLE = Math.PI / 6; // 30° par cran de rotation de vue (stick droit, confort VR)
const SNAP_TRIGGER = 0.7; // |stick.x| qui déclenche un cran
const SNAP_RELEASE = 0.35; // retour sous ce seuil pour réarmer le cran suivant
const MAX_SPEED = 90; // plafond de stabilité physique
const PAN_LIMIT = 1200; // bord de la zone jouable (= city.ts)

// --- toile / balancier ---
const WEB_DEFAULT_DIST = 240; // ancrage par défaut si le rayon ne touche rien
const WEB_MIN_ANCHOR_Y = 90; // ancrage relevé (visuel « accroché en hauteur »)
const REEL = 14; // u/s de raccourcissement de la corde (feel du balancier)
const MIN_REST = 6; // longueur de corde minimale
const WEB_PULL = 60; // u/s² de traction active vers l'ancrage (le « zip » qui tire)
const WEB_PULL_MAX = 55; // u/s : plafond de la vitesse gagnée par la traction
const SWING_BOOST = 24; // u/s² tangentiel injecté en phase descendante (énergie du pendule)
const RELEASE_H_BOOST = 1.3; // multiplicateur d'élan horizontal au lâcher (si on monte)
const RELEASE_V_BOOST = 4; // u/s d'impulsion verticale au lâcher (saut spectaculaire)

// --- effets de vitesse (immersion + confort VR) ---
const WIND_COUNT = 140; // nombre de traits de vent
const WIND_BOX = 24; // demi-taille du volume de vent autour de la tête (u)
const WIND_LEN = 2.5; // longueur de base d'un trait (u), allongée par la vitesse
const WIND_SPEED_MIN = 16; // vitesse en deçà de laquelle aucun vent (u/s)
const WIND_SPEED_REF = 60; // vitesse de pleine intensité du vent (u/s)
const WIND_MAX_OPACITY = 0.55;
const VIGN_SPEED_MIN = 26; // vitesse d'apparition de la vignette anti nausée (u/s)
const VIGN_SPEED_REF = 72; // vitesse d'opacité maxi de la vignette (u/s)
const VIGN_MAX_OPACITY = 0.85;
const PUMP_GAIN = 0.6; // gain des à-coups de bras (pompage)
const DUAL_RELEASE_BOOST = 8; // propulsion avant au lâcher des deux toiles

// --- escalade au mur (wall climbing) ---
const GRAB_REACH = 1.5; // distance main↔façade pour s'accrocher (u) — généreuse
const CLIMB_GAIN = 1.8; // amplification du hissage (super héros : la main soulève fort)
const WALL_LEAP = 28; // u/s : vitesse de projection au saut depuis le mur
const WALL_LEAP_UP = 7; // u/s : composante verticale ajoutée à la projection
const CLIMB_RELEASE_BOOST = 1.4; // multiplie l'élan du corps quand on lâche en tirant

// --- collision ---
const CELL = 80; // taille de cellule de la grille de pruning
const SKIN = 0.1; // marge anti-jitter sol/toit
const STICK_DEADZONE = 0.15;

// Vecteurs de travail réutilisés dans la boucle (zéro allocation par frame →
// pas de micro-saccades du GC, critique pour le 90 FPS et le confort VR).
const _tangent = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _windDir = new THREE.Vector3();

/** Gant Spider-Man stylisé (bleu/noir, style Miles Morales) orienté vers /Z. */
function makeGlove(left: boolean): THREE.Group {
  const g = new THREE.Group();
  const blue = new THREE.MeshStandardMaterial({
    color: 0x2747ff,
    roughness: 0.45,
    metalness: 0.1,
    emissive: 0x0a1a66,
    emissiveIntensity: 0.45,
  });
  const black = new THREE.MeshStandardMaterial({ color: 0x0b0b14, roughness: 0.6, metalness: 0.1 });
  const palm = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.032, 0.1), blue);
  g.add(palm);
  // poignet (manchette noire)
  const cuff = new THREE.Mesh(new THREE.BoxGeometry(0.095, 0.04, 0.03), black);
  cuff.position.set(0, 0, 0.065);
  g.add(cuff);
  // 4 doigts bleus, bouts noirs, pointant vers /Z
  const sx = left ? -1 : 1;
  for (let k = 0; k < 4; k++) {
    const fx = -0.03 + k * 0.02;
    const finger = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.022, 0.06), blue);
    finger.position.set(fx, 0, -0.075);
    g.add(finger);
    const tip = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.022, 0.02), black);
    tip.position.set(fx, 0, -0.108);
    g.add(tip);
  }
  // pouce, du bon côté selon la main
  const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.022, 0.045), blue);
  thumb.position.set(sx * 0.052, 0, -0.02);
  thumb.rotation.y = sx * 0.6;
  g.add(thumb);
  // accent noir sur le dos de la main (toile du costume)
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.006, 0.06), black);
  back.position.set(0, 0.02, -0.01);
  g.add(back);
  g.traverse((o) => {
    o.frustumCulled = false;
  });
  return g;
}

/** Texture radiale pour la vignette anti nausée : centre clair → bords noirs. */
function makeVignetteTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(128, 128, 128 * 0.32, 128, 128, 128);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(0.62, 'rgba(0,0,0,0)');
  g.addColorStop(1, 'rgba(0,0,0,1)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

function clamp(v: number, a: number, b: number): number {
  return v < a ? a : v > b ? b : v;
}
function approach(cur: number, target: number, maxDelta: number): number {
  const d = target - cur;
  return Math.abs(d) <= maxDelta ? target : cur + Math.sign(d) * maxDelta;
}
function easeOut(t: number): number {
  return 1 - (1 - t) * (1 - t);
}
/** Zone morte radiale ; null si sous le seuil (pas de déplacement). */
function deadzone(s: { x: number; y: number } | null | undefined): { x: number; y: number } | null {
  if (!s) return null;
  const m = Math.hypot(s.x, s.y);
  if (m < STICK_DEADZONE) return null;
  const k = (m - STICK_DEADZONE) / (1 - STICK_DEADZONE) / m;
  return { x: s.x * k, y: s.y * k };
}

export class SpiderMode {
  active = false;

  private feet = new THREE.Vector3();
  private vel = new THREE.Vector3();
  private grounded = false;
  private jumpsUsed = 0;
  private prevA = false;

  // rotation de vue artificielle (snap turn au stick droit) : yaw appliqué au rig
  private turnYaw = 0;
  private prevSnap = false;
  private yawQuat = new THREE.Quaternion();

  private boxes: BuildingBox[] = [];
  private grid = new Map<string, number[]>();
  private mesh: THREE.Object3D | null = null;
  private raycaster = new THREE.Raycaster();

  // toile par main (0 = droite, 1 = gauche)
  private webAnchor: (THREE.Vector3 | null)[] = [null, null];
  private webRest = [0, 0];
  private webExtend = [0, 0]; // 0→1 animation de lancer
  private webHeld = [false, false];
  private handPrev: (THREE.Vector3 | null)[] = [null, null]; // pos main, espace réf
  private wasDualTaut = false;
  private wasSwinging = false; // au moins une toile tendue à la frame précédente
  private webLines: THREE.Line[] = [];
  private handGloves: THREE.Group[] = []; // gants Spider-Man (bleu/noir)

  // escalade : chaque main qui grippe se colle à la façade (ancre monde + normale).
  // Bouger la main déplace le corps en sens inverse → on se hisse.
  private gripAnchor: (THREE.Vector3 | null)[] = [null, null];
  private gripNormal: THREE.Vector3[] = [new THREE.Vector3(), new THREE.Vector3()];
  private climbVel = new THREE.Vector3(); // vitesse du corps issue de l'escalade (élan au lâcher)

  // effets de vitesse
  private windLines: THREE.LineSegments;
  private windOff: Float32Array; // offsets des traits dans le repère tête (u)
  private vignette: THREE.Mesh;

  // plan near de la ville, restauré à la sortie (rétréci en mode spider pour
  // ne pas couper les toiles/mains tout proches)
  private savedNear = 1;
  private savedFar = 12000;

  constructor(
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera,
  ) {
    for (let i = 0; i < 2; i++) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      const line = new THREE.Line(
        geo,
        new THREE.LineBasicMaterial({
          color: i === 0 ? 0xff5a6a : 0x6ab8ff,
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      line.frustumCulled = false;
      line.visible = false;
      this.webLines.push(line);
      this.scene.add(line);

      // gant Spider-Man (0 = main droite, 1 = main gauche)
      const glove = makeGlove(i === 1);
      glove.visible = false;
      this.handGloves.push(glove);
      this.scene.add(glove);
    }

    // vent : segments blancs filant à contresens de la vitesse (repère tête)
    const wgeo = new THREE.BufferGeometry();
    wgeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(WIND_COUNT * 2 * 3), 3),
    );
    this.windOff = new Float32Array(WIND_COUNT * 3);
    for (let i = 0; i < this.windOff.length; i++) {
      this.windOff[i] = (Math.random() * 2 - 1) * WIND_BOX;
    }
    this.windLines = new THREE.LineSegments(
      wgeo,
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.windLines.frustumCulled = false;
    this.windLines.visible = false;
    this.scene.add(this.windLines);

    // vignette anti nausée : plan dégradé radial enfant de la caméra (verrouillé
    // sur la tête en VR car la caméra suit la pose du casque)
    this.vignette = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.MeshBasicMaterial({
        map: makeVignetteTexture(),
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
      }),
    );
    this.vignette.position.set(0, 0, -1.2);
    this.vignette.renderOrder = 999;
    this.vignette.frustumCulled = false;
    this.vignette.visible = false;
    this.camera.add(this.vignette);
  }

  /** Effets de vitesse : vent (immersion) + vignette périphérique (anti nausée). */
  private updateFx(): void {
    const speed = this.vel.length();

    // vent : intensité selon la vitesse, traits orientés dans le sens du mouvement
    const windK = clamp((speed - WIND_SPEED_MIN) / (WIND_SPEED_REF - WIND_SPEED_MIN), 0, 1);
    if (windK <= 0) {
      this.windLines.visible = false;
    } else {
      this.windLines.visible = true;
      (this.windLines.material as THREE.LineBasicMaterial).opacity = WIND_MAX_OPACITY * windK;
      this.windLines.position.set(this.feet.x, this.feet.y + STAND, this.feet.z);
      _windDir.copy(this.vel).multiplyScalar(1 / Math.max(speed, 1e-4));
      const len = WIND_LEN + speed * 0.06;
      const attr = this.windLines.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let n = 0; n < WIND_COUNT; n++) {
        const o = n * 3;
        // dérive à contresens du joueur → impression de filer ; repli dans la boîte
        this.windOff[o] -= this.vel.x * 0.016;
        this.windOff[o + 1] -= this.vel.y * 0.016;
        this.windOff[o + 2] -= this.vel.z * 0.016;
        for (let a = 0; a < 3; a++) {
          if (this.windOff[o + a] > WIND_BOX) this.windOff[o + a] -= 2 * WIND_BOX;
          else if (this.windOff[o + a] < -WIND_BOX) this.windOff[o + a] += 2 * WIND_BOX;
        }
        const ox = this.windOff[o],
          oy = this.windOff[o + 1],
          oz = this.windOff[o + 2];
        attr.setXYZ(2 * n, ox, oy, oz);
        attr.setXYZ(2 * n + 1, ox + _windDir.x * len, oy + _windDir.y * len, oz + _windDir.z * len);
      }
      attr.needsUpdate = true;
    }

    // vignette : ferme la vision périphérique quand on file vite (confort VR)
    const vK = clamp((speed - VIGN_SPEED_MIN) / (VIGN_SPEED_REF - VIGN_SPEED_MIN), 0, 1);
    const mat = this.vignette.material as THREE.MeshBasicMaterial;
    mat.opacity = VIGN_MAX_OPACITY * vK;
    this.vignette.visible = vK > 0;
  }

  /** Position courante des pieds (lue par CityWorld au lâcher du mode). */
  get feetPos(): THREE.Vector3 {
    return this.feet;
  }

  setBuildings(mesh: THREE.Object3D | null, boxes: BuildingBox[]): void {
    this.mesh = mesh;
    this.boxes = boxes;
    this.buildGrid();
  }

  enter(spawnXZ: THREE.Vector2): void {
    this.feet.set(spawnXZ.x, 0, spawnXZ.y);
    this.resolveSpawn();
    this.feet.y = 0;
    this.vel.set(0, 0, 0);
    this.grounded = true;
    this.jumpsUsed = 0;
    this.prevA = false;
    this.turnYaw = 0;
    this.prevSnap = false;
    this.yawQuat.identity();
    this.handPrev = [null, null];
    this.webAnchor = [null, null];
    this.webHeld = [false, false];
    this.wasDualTaut = false;
    this.gripAnchor = [null, null];
    // plan near serré pour rendre les toiles/mains toutes proches. On NE touche
    // PAS au far : le dôme de ciel (rayon 7000) doit rester dans le frustum,
    // sinon sa calotte est clippée et on voit un « trou noir » au loin.
    this.savedNear = this.camera.near;
    this.savedFar = this.camera.far;
    this.camera.near = 0.1;
    this.camera.updateProjectionMatrix();
    this.active = true;
  }

  exit(): void {
    this.active = false;
    for (const l of this.webLines) l.visible = false;
    for (const gl of this.handGloves) gl.visible = false;
    this.windLines.visible = false;
    this.vignette.visible = false;
    this.webAnchor = [null, null];
    this.gripAnchor = [null, null];
    this.camera.near = this.savedNear;
    this.camera.far = this.savedFar;
    this.camera.updateProjectionMatrix();
  }

  // ------------------------------------------------------------ grille AABB

  private buildGrid(): void {
    this.grid.clear();
    for (let i = 0; i < this.boxes.length; i++) {
      const b = this.boxes[i];
      const x0 = Math.floor(b.minX / CELL);
      const x1 = Math.floor(b.maxX / CELL);
      const z0 = Math.floor(b.minZ / CELL);
      const z1 = Math.floor(b.maxZ / CELL);
      for (let cx = x0; cx <= x1; cx++) {
        for (let cz = z0; cz <= z1; cz++) {
          const k = cx + ',' + cz;
          let arr = this.grid.get(k);
          if (!arr) {
            arr = [];
            this.grid.set(k, arr);
          }
          arr.push(i);
        }
      }
    }
  }

  private candidates(x: number, z: number): number[] {
    const cx = Math.floor(x / CELL);
    const cz = Math.floor(z / CELL);
    const out: number[] = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const arr = this.grid.get(cx + dx + ',' + (cz + dz));
        if (arr) for (const i of arr) if (!out.includes(i)) out.push(i);
      }
    }
    return out;
  }

  private resolveSpawn(): void {
    for (const i of this.candidates(this.feet.x, this.feet.z)) {
      const b = this.boxes[i];
      const minX = b.minX - CAPSULE_R;
      const maxX = b.maxX + CAPSULE_R;
      const minZ = b.minZ - CAPSULE_R;
      const maxZ = b.maxZ + CAPSULE_R;
      if (this.feet.x > minX && this.feet.x < maxX && this.feet.z > minZ && this.feet.z < maxZ) {
        const pXmin = this.feet.x - minX;
        const pXmax = maxX - this.feet.x;
        const pZmin = this.feet.z - minZ;
        const pZmax = maxZ - this.feet.z;
        const m = Math.min(pXmin, pXmax, pZmin, pZmax);
        if (m === pXmin) this.feet.x = minX;
        else if (m === pXmax) this.feet.x = maxX;
        else if (m === pZmin) this.feet.z = minZ;
        else this.feet.z = maxZ;
      }
    }
  }

  // ----------------------------------------------------------------- update

  update(g: GestureState, dt: number): void {
    dt = Math.min(dt, 0.05);
    // pas de marqueurs/lasers de manette en mode spider : on dessine nos toiles
    xrHandState.hideMarkers = true;
    xrHandState.hideRays = true;

    // 0. rotation de vue (snap turn au stick droit) — à crans, désactivée pendant
    // l'escalade pour ne pas s'arracher du mur. Le yaw est appliqué au rig via
    // camera.quaternion (cf. xrRender) : pousser à droite tourne la vue à droite.
    const gripping = this.gripAnchor.some(Boolean);
    const rsx = g.rightStick?.x ?? 0;
    if (!gripping && Math.abs(rsx) > SNAP_TRIGGER) {
      if (!this.prevSnap) {
        this.turnYaw -= Math.sign(rsx) * SNAP_ANGLE;
        this.prevSnap = true;
      }
    } else if (Math.abs(rsx) < SNAP_RELEASE) {
      this.prevSnap = false;
    }
    this.yawQuat.setFromAxisAngle(_up, this.turnYaw);

    // 1. direction désirée depuis le stick gauche, relative au regard MONDE
    // (yaw de vue ∘ yaw tête).
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.worldHeadQuat());
    fwd.y = 0;
    if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, -1);
    else fwd.normalize();
    const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
    const ls = deadzone(g.leftStick);
    let desiredX = 0;
    let desiredZ = 0;
    if (ls) {
      const mag = Math.hypot(ls.x, ls.y);
      const speed = mag > RUN_THRESH ? RUN : WALK * (mag / RUN_THRESH);
      const dir = new THREE.Vector3().addScaledVector(right, ls.x).addScaledVector(fwd, -ls.y);
      if (dir.lengthSq() > 1e-6) {
        dir.normalize().multiplyScalar(speed);
        desiredX = dir.x;
        desiredZ = dir.z;
      }
    }

    // 2. accélération horizontale vers la cible
    const accel = (this.grounded ? GROUND_ACCEL : AIR_ACCEL) * dt;
    this.vel.x = approach(this.vel.x, desiredX, accel);
    this.vel.z = approach(this.vel.z, desiredZ, accel);

    // 3. escalade : grip (côté) près d'une façade → la main se colle au mur ;
    // bouger la main hisse le corps en sens inverse. Gravité suspendue tant
    // qu'au moins une main est accrochée ; au lâcher on garde l'élan du corps.
    const wasClimbing = this.gripAnchor.some(Boolean);
    this.updateClimb(dt);
    const climbing = this.gripAnchor.some(Boolean);
    if (climbing) {
      this.vel.set(0, 0, 0); // la locomotion vient des mains
    } else {
      if (wasClimbing) {
        this.vel.copy(this.climbVel).multiplyScalar(CLIMB_RELEASE_BOOST);
        this.grounded = false;
        this.jumpsUsed = 1;
      }
      this.vel.y -= GRAVITY * dt;
    }

    // 4. A (manette droite, bouton 4) : projection depuis le mur, sinon saut /
    //    double saut classique.
    const aPressed = xrHandState.gamepads[0]?.buttons[4]?.pressed === true;
    if (aPressed && !this.prevA) {
      if (climbing) {
        // se projeter vers le regard (3D, on peut viser un toit) + élan vertical,
        // en poussant dans la normale moyenne des mains accrochées.
        const look = new THREE.Vector3(0, 0, -1).applyQuaternion(this.worldHeadQuat()).normalize();
        this.vel.copy(look).multiplyScalar(WALL_LEAP);
        this.vel.y += WALL_LEAP_UP;
        _tangent.set(0, 0, 0);
        for (let i = 0; i < 2; i++) if (this.gripAnchor[i]) _tangent.add(this.gripNormal[i]);
        if (_tangent.lengthSq() > 1e-6) this.vel.addScaledVector(_tangent.normalize(), 4);
        this.gripAnchor = [null, null];
        this.grounded = false;
        this.jumpsUsed = 1; // un saut aérien reste possible après la projection
      } else if (this.grounded) {
        this.vel.y = JUMP_VEL;
        this.jumpsUsed = 1;
        this.grounded = false;
      } else if (this.jumpsUsed < 2) {
        this.vel.y = DOUBLE_JUMP_VEL;
        this.jumpsUsed = 2;
      }
    }
    this.prevA = aPressed;

    // 5. toiles : tir, contrainte de corde (pendule), pompage
    this.updateWebs(dt);

    if (this.vel.length() > MAX_SPEED) this.vel.setLength(MAX_SPEED);

    // 6. intégration (sous-pas si rapide → anti-tunnel en balancier)
    const travel = this.vel.length() * dt;
    const steps = travel > CAPSULE_R ? Math.min(4, Math.ceil(travel / CAPSULE_R)) : 1;
    const sdt = dt / steps;
    for (let s = 0; s < steps; s++) {
      const prevY = this.feet.y;
      this.feet.addScaledVector(this.vel, sdt);
      this.collide(prevY);
    }

    // 8. bord de zone
    this.feet.x = clamp(this.feet.x, -PAN_LIMIT, PAN_LIMIT);
    this.feet.z = clamp(this.feet.z, -PAN_LIMIT, PAN_LIMIT);

    // 9. caméra = tête (pieds + le casque fournit la taille). Le yaw de vue est
    // posé sur la caméra → adopté par le rig au rendu, le casque s'ajoute dessus.
    this.camera.position.copy(this.feet);
    this.camera.quaternion.copy(this.yawQuat);

    this.drawWebs();
    this.updateFx();
  }

  // ----------------------------------------------------------- collisions

  private collide(prevY: number): void {
    this.grounded = false;
    if (this.feet.y <= 0) {
      this.feet.y = 0;
      if (this.vel.y < 0) this.vel.y = 0;
      this.grounded = true;
    }
    for (let pass = 0; pass < 2; pass++) {
      for (const i of this.candidates(this.feet.x, this.feet.z)) {
        const b = this.boxes[i];
        const minX = b.minX - CAPSULE_R;
        const maxX = b.maxX + CAPSULE_R;
        const minZ = b.minZ - CAPSULE_R;
        const maxZ = b.maxZ + CAPSULE_R;
        if (
          this.feet.x <= minX ||
          this.feet.x >= maxX ||
          this.feet.z <= minZ ||
          this.feet.z >= maxZ
        )
          continue;
        // (a) atterrissage sur le toit : on descend et on franchit le sommet
        if (this.vel.y <= 0 && this.feet.y <= b.top && prevY >= b.top - SKIN) {
          this.feet.y = b.top;
          this.vel.y = 0;
          this.grounded = true;
          continue;
        }
        // (b) mur : sous le toit et en chevauchement → repousser sur l'axe le
        //     moins enfoncé
        if (this.feet.y < b.top - SKIN) {
          const pXmin = this.feet.x - minX;
          const pXmax = maxX - this.feet.x;
          const pZmin = this.feet.z - minZ;
          const pZmax = maxZ - this.feet.z;
          const m = Math.min(pXmin, pXmax, pZmin, pZmax);
          if (m === pXmin) {
            this.feet.x = minX;
            if (this.vel.x > 0) this.vel.x = 0;
          } else if (m === pXmax) {
            this.feet.x = maxX;
            if (this.vel.x < 0) this.vel.x = 0;
          } else if (m === pZmin) {
            this.feet.z = minZ;
            if (this.vel.z > 0) this.vel.z = 0;
          } else {
            this.feet.z = maxZ;
            if (this.vel.z < 0) this.vel.z = 0;
          }
        }
      }
    }
    if (this.grounded) this.jumpsUsed = 0;
  }

  // ------------------------------------------------------------- toiles

  private head(): THREE.Vector3 {
    return new THREE.Vector3(this.feet.x, this.feet.y + STAND, this.feet.z);
  }

  /** Point de la façade la plus proche de la main (et sa normale), si à portée. */
  private grabWall(h: THREE.Vector3): { point: THREE.Vector3; normal: THREE.Vector3 } | null {
    let bestPoint: THREE.Vector3 | null = null;
    const bestNormal = new THREE.Vector3();
    let bestD = GRAB_REACH;
    for (const idx of this.candidates(h.x, h.z)) {
      const b = this.boxes[idx];
      const cy = clamp(h.y, 0, b.top); // hauteur projetée sur la façade (sol → toit)
      const cx = clamp(h.x, b.minX, b.maxX);
      const cz = clamp(h.z, b.minZ, b.maxZ);
      const dx = h.x - cx;
      const dz = h.z - cz;
      const horiz = Math.hypot(dx, dz);
      let px = cx,
        pz = cz,
        nx = 0,
        nz = 0;
      if (horiz > 1e-3) {
        // main hors de l'emprise : le point clampé est déjà sur la face, normale sortante
        nx = dx / horiz;
        nz = dz / horiz;
      } else {
        // main au-dessus de l'emprise : projeter sur la face verticale la plus proche
        const pXmin = h.x - b.minX;
        const pXmax = b.maxX - h.x;
        const pZmin = h.z - b.minZ;
        const pZmax = b.maxZ - h.z;
        const m = Math.min(pXmin, pXmax, pZmin, pZmax);
        if (m === pXmin) {
          px = b.minX;
          nx = -1;
        } else if (m === pXmax) {
          px = b.maxX;
          nx = 1;
        } else if (m === pZmin) {
          pz = b.minZ;
          nz = -1;
        } else {
          pz = b.maxZ;
          nz = 1;
        }
      }
      const d = Math.hypot(h.x - px, h.y - cy, h.z - pz);
      if (d < bestD) {
        bestD = d;
        bestPoint = new THREE.Vector3(px, cy, pz);
        bestNormal.set(nx, 0, nz);
      }
    }
    return bestPoint ? { point: bestPoint, normal: bestNormal } : null;
  }

  /** Escalade : (dé)saisie des mains sur la façade puis hissage du corps. */
  private updateClimb(dt: number): void {
    for (let i = 0; i < 2; i++) {
      const grip = (xrHandState.gamepads[i]?.buttons[1]?.value ?? 0) > 0.5;
      const hw = this.handWorld(i);
      if (grip && hw) {
        if (!this.gripAnchor[i]) {
          const g = this.grabWall(hw);
          if (g) {
            this.gripAnchor[i] = g.point;
            this.gripNormal[i].copy(g.normal);
          }
        }
      } else {
        this.gripAnchor[i] = null;
      }
    }
    // hissage : déplacer le corps pour ramener chaque main accrochée sur son ancre
    let mx = 0,
      my = 0,
      mz = 0,
      n = 0;
    for (let i = 0; i < 2; i++) {
      const a = this.gripAnchor[i];
      const hw = this.handWorld(i);
      if (a && hw) {
        mx += a.x - hw.x;
        my += a.y - hw.y;
        mz += a.z - hw.z;
        n++;
      }
    }
    if (n > 0) {
      const k = CLIMB_GAIN / n;
      this.feet.x += mx * k;
      this.feet.y += my * k;
      this.feet.z += mz * k;
      if (this.feet.y < 0) this.feet.y = 0;
      this.climbVel.set((mx * k) / dt, (my * k) / dt, (mz * k) / dt);
      if (this.climbVel.length() > MAX_SPEED) this.climbVel.setLength(MAX_SPEED);
    } else {
      this.climbVel.set(0, 0, 0);
    }
  }

  /** Orientation monde de la tête : yaw de vue ∘ pose casque (espace réf). */
  private worldHeadQuat(): THREE.Quaternion {
    return this.yawQuat.clone().multiply(xrHandState.headQuat);
  }

  /** Orientation monde de la manette i (yaw de vue ∘ pose réf), ou null. */
  private handQuat(i: number): THREE.Quaternion | null {
    const q = xrHandState.quat[i];
    return q ? this.yawQuat.clone().multiply(q) : null;
  }

  /** Rayon de visée monde de la manette i (réf tournée par le yaw, + feet). */
  private worldRay(i: number): THREE.Ray | null {
    const r =
      xrHandState.rays[i] ??
      (xrHandState.pos[i] && xrHandState.quat[i]
        ? { pos: xrHandState.pos[i]!, quat: xrHandState.quat[i]! }
        : null);
    if (!r) return null;
    const origin = r.pos.clone().applyQuaternion(this.yawQuat).add(this.feet);
    const dir = new THREE.Vector3(0, 0, -1)
      .applyQuaternion(r.quat)
      .applyQuaternion(this.yawQuat)
      .normalize();
    return new THREE.Ray(origin, dir);
  }

  /** Position monde de la main i (origine visible des toiles). */
  private handWorld(i: number): THREE.Vector3 | null {
    const p = xrHandState.pos[i];
    return p ? p.clone().applyQuaternion(this.yawQuat).add(this.feet) : null;
  }

  private updateWebs(dt: number): void {
    // direction de déplacement (pour le pompage et la propulsion)
    const travel = new THREE.Vector3(this.vel.x, 0, this.vel.z);
    if (travel.lengthSq() > 1e-4) travel.normalize();
    else {
      travel.set(0, 0, -1).applyQuaternion(this.worldHeadQuat());
      travel.y = 0;
      if (travel.lengthSq() > 1e-6) travel.normalize();
    }

    // tir / lâcher : gâchette avant SEULE = lanceur de toile. Si le grip est
    // aussi tenu, c'est le geste d'accroche au mur → pas de toile.
    for (let i = 0; i < 2; i++) {
      const gp = xrHandState.gamepads[i];
      const held = (gp?.buttons[0]?.value ?? 0) > 0.5 && (gp?.buttons[1]?.value ?? 0) <= 0.5;

      if (held && !this.webHeld[i]) {
        const ray = this.worldRay(i);
        let anchor: THREE.Vector3 | null = null;
        if (ray && this.mesh) {
          this.raycaster.set(ray.origin, ray.direction);
          this.raycaster.far = 1400;
          const hits = this.raycaster.intersectObject(this.mesh, true);
          if (hits.length) anchor = hits[0].point.clone();
        }
        if (!anchor && ray) {
          anchor = ray.origin.clone().addScaledVector(ray.direction, WEB_DEFAULT_DIST);
          anchor.y = Math.max(anchor.y, WEB_MIN_ANCHOR_Y);
        }
        this.webAnchor[i] = anchor;
        this.webRest[i] = anchor ? this.head().distanceTo(anchor) : 0;
        this.webExtend[i] = 0;
        const hp = xrHandState.pos[i];
        this.handPrev[i] = hp ? hp.clone() : null;
      } else if (!held && this.webHeld[i]) {
        this.webAnchor[i] = null;
      }
      this.webHeld[i] = held;
    }

    // avance de l'animation de lancer
    for (let i = 0; i < 2; i++) {
      if (this.webAnchor[i]) this.webExtend[i] = Math.min(1, this.webExtend[i] + dt * 6);
    }

    // contrainte de corde inextensible (pendule 3D) + traction active vers
    // l'ancrage : la toile ne fait pas que retenir, elle TIRE (zip) — sans ça
    // le joueur a l'impression de se traîner, trop lourd.
    for (let i = 0; i < 2; i++) {
      const anchor = this.webAnchor[i];
      if (!anchor || this.webExtend[i] < 1) continue;
      const d = this.head().sub(anchor);
      const len = d.length();
      if (len > 1e-4) {
        const n = d.multiplyScalar(1 / len); // ancrage → tête (sortant)
        if (len > this.webRest[i]) {
          this.feet.addScaledVector(n, -(len - this.webRest[i]));
          const vr = this.vel.dot(n);
          if (vr > 0) this.vel.addScaledVector(n, -vr); // retire l'élan radial sortant
        }
        // traction vers le point visé : accélère le long de la corde, plafonnée
        const inward = Math.max(0, -this.vel.dot(n)); // vitesse déjà gagnée vers l'ancrage
        if (inward < WEB_PULL_MAX) {
          this.vel.addScaledVector(n, -Math.min(WEB_PULL * dt, WEB_PULL_MAX - inward));
        }
        // boost de balancier : en phase descendante on injecte une force le long
        // de la tangente (sens du mouvement) → on gagne de l'énergie comme un
        // vrai pendule au lieu de subir la gravité. Tangente = (corde × up) × corde.
        if (this.vel.y < 0) {
          _tangent.copy(n).cross(_up).cross(n);
          if (_tangent.lengthSq() > 1e-6) {
            _tangent.normalize();
            // orienter la tangente dans le sens du déplacement horizontal courant
            const sign = this.vel.x * _tangent.x + this.vel.z * _tangent.z < 0 ? -1 : 1;
            this.vel.addScaledVector(_tangent, SWING_BOOST * dt * sign);
          }
        }
      }
      this.webRest[i] = Math.max(MIN_REST, this.webRest[i] - REEL * dt); // reel-in
    }

    // pompage : à-coup des bras vers l'arrière (vitesse main en espace réf, donc
    // mouvement physique du bras, isolé du déplacement du joueur) → accélération
    const anyTaut = this.webAnchor.some((a, i) => a && this.webExtend[i] >= 1);
    if (anyTaut) {
      for (let i = 0; i < 2; i++) {
        if (!this.webAnchor[i]) continue;
        const hp = xrHandState.pos[i];
        const prev = this.handPrev[i];
        if (hp && prev && dt > 0) {
          const hv = hp
            .clone()
            .sub(prev)
            .multiplyScalar(1 / dt)
            .applyQuaternion(this.yawQuat); // réf → monde (cohérent avec travel)
          const back = Math.max(0, -hv.dot(travel));
          if (back > 0) this.vel.addScaledVector(travel, back * PUMP_GAIN);
        }
      }
    }

    // 2 toiles tendues puis lâchées → propulsion droite vers l'avant
    const bothTaut =
      !!this.webAnchor[0] &&
      !!this.webAnchor[1] &&
      this.webExtend[0] >= 1 &&
      this.webExtend[1] >= 1;
    if (bothTaut) this.wasDualTaut = true;
    const swinging = this.webAnchor.some((a, i) => a && this.webExtend[i] >= 1);
    const activeCount = (this.webAnchor[0] ? 1 : 0) + (this.webAnchor[1] ? 1 : 0);
    if (activeCount === 0) {
      if (this.wasDualTaut) this.vel.addScaledVector(travel, DUAL_RELEASE_BOOST);
      this.wasDualTaut = false;
    }
    // release boost : au lâcher de la dernière toile, si on file vers le haut on
    // conserve l'élan horizontal et on ajoute une impulsion verticale → éjection
    // spectaculaire au lieu de retomber comme une masse.
    if (this.wasSwinging && !swinging && this.vel.y > 0) {
      this.vel.x *= RELEASE_H_BOOST;
      this.vel.z *= RELEASE_H_BOOST;
      this.vel.y += RELEASE_V_BOOST;
    }
    this.wasSwinging = swinging;

    // mémorise la position des mains (espace réf) pour le pompage de la frame suivante
    for (let i = 0; i < 2; i++) {
      const hp = xrHandState.pos[i];
      this.handPrev[i] = hp ? hp.clone() : null;
    }
  }

  private drawWebs(): void {
    for (let i = 0; i < 2; i++) {
      const anchor = this.webAnchor[i];
      const hand = this.handWorld(i);
      const line = this.webLines[i];
      const glove = this.handGloves[i];
      const grip = this.gripAnchor[i];
      const q = this.handQuat(i);
      if (grip) {
        // accroché : le gant est plaqué SUR la façade (dos de la main vers la normale)
        glove.position.copy(grip);
        glove.quaternion.setFromUnitVectors(_up, this.gripNormal[i]);
        glove.visible = true;
      } else if (hand) {
        glove.position.copy(hand);
        if (q) glove.quaternion.copy(q);
        glove.visible = true;
      } else {
        glove.visible = false;
      }
      if (anchor && hand) {
        const tip = hand.clone().lerp(anchor, easeOut(this.webExtend[i]));
        const attr = line.geometry.getAttribute('position') as THREE.BufferAttribute;
        attr.setXYZ(0, hand.x, hand.y, hand.z);
        attr.setXYZ(1, tip.x, tip.y, tip.z);
        attr.needsUpdate = true;
        line.visible = true;
      } else {
        line.visible = false;
      }
    }
  }
}
