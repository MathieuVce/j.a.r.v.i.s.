import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * Décor de jour de la vue ville (sans état) : ciel + env map de reflets, pelouse,
 * herbe et arbres instanciés, rivière réfléchissante et ponts. Chaque fonction
 * ajoute ses objets à la scène fournie ; `CityWorld` garde la navigation et le
 * chargement des bâtiments.
 */

const RIVER_Z = 300; // position de la rivière le long de l'axe Z

/** Texture de pelouse : vert de base + taches vertes/dorées (répétée au sol). */
function makeGroundTexture(): THREE.CanvasTexture {
  const N = 256;
  const c = document.createElement('canvas');
  c.width = c.height = N;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#5d7a40';
  ctx.fillRect(0, 0, N, N);
  const tints = ['#4f6e36', '#688a45', '#7a9450', '#8a8a4a', '#435c30', '#6f8a3e'];
  for (let i = 0; i < 900; i++) {
    ctx.fillStyle = tints[(Math.random() * tints.length) | 0];
    ctx.globalAlpha = 0.25 + Math.random() * 0.4;
    ctx.beginPath();
    ctx.arc(Math.random() * N, Math.random() * N, 2 + Math.random() * 13, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(28, 28);
  return tex;
}

/** Normal map de vagues (deux trains de sinus), défilée pour animer l'eau. */
function makeWaterNormalTexture(): THREE.CanvasTexture {
  const N = 128;
  const c = document.createElement('canvas');
  c.width = c.height = N;
  const ctx = c.getContext('2d')!;
  const img = ctx.createImageData(N, N);
  const h = (x: number, y: number): number =>
    Math.sin(x * 0.2 + y * 0.05) + Math.sin(y * 0.23 - x * 0.04) + 0.5 * Math.sin((x + y) * 0.15);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const dx = (h((x + 1) % N, y) - h((x - 1 + N) % N, y)) * 0.5;
      const dy = (h(x, (y + 1) % N) - h(x, (y - 1 + N) % N)) * 0.5;
      const inv = 1 / Math.hypot(-dx, -dy, 1);
      const i = (y * N + x) * 4;
      img.data[i] = (-dx * inv * 0.5 + 0.5) * 255;
      img.data[i + 1] = (-dy * inv * 0.5 + 0.5) * 255;
      img.data[i + 2] = (1 * inv * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  return tex;
}

/** Un arbre : tronc brun + amas de feuillage vert, fusionnés (couleurs/sommet). */
function makeTreeGeometry(): THREE.BufferGeometry {
  // mergeGeometries exige des géométries homogènes : le cylindre est indexé,
  // les polyèdres ne le sont pas → on dé-indexe tout avant de fusionner.
  const paint = (geo: THREE.BufferGeometry, hex: number): THREE.BufferGeometry => {
    const g = geo.index ? geo.toNonIndexed() : geo;
    const c = new THREE.Color(hex);
    const n = g.getAttribute('position').count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    return g;
  };
  const parts: THREE.BufferGeometry[] = [];
  const trunk = new THREE.CylinderGeometry(0.28, 0.42, 3.6, 6);
  trunk.translate(0, 1.8, 0);
  parts.push(paint(trunk, 0x6b4a2c));
  const blobs: [number, number, number, number, number][] = [
    [0, 4.6, 0, 2.1, 0x4e7a30],
    [1.1, 4.0, 0.4, 1.4, 0x568435],
    [-0.9, 4.2, -0.5, 1.5, 0x456e2b],
    [0.2, 5.6, -0.2, 1.5, 0x5c8a3a],
  ];
  for (const [x, y, z, rad, hex] of blobs) {
    const f = new THREE.IcosahedronGeometry(rad, 0);
    f.translate(x, y, z);
    parts.push(paint(f, hex));
  }
  return mergeGeometries(parts, false);
}

/** Dôme de ciel dégradé (bleu au zénith → horizon chaud) avec halo et disque
 *  solaire, et carte d'environnement dérivée pour les reflets (vitres, eau). */
export function buildSky(
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  sunDir: THREE.Vector3,
): void {
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: { uSun: { value: sunDir } },
    vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
    fragmentShader: `
        varying vec3 vDir;
        uniform vec3 uSun;
        void main() {
          vec3 dir = normalize(vDir);
          float t = clamp(dir.y, 0.0, 1.0);
          vec3 zenith = vec3(0.16, 0.40, 0.74);
          vec3 horizon = vec3(0.85, 0.79, 0.70);
          vec3 col = mix(horizon, zenith, pow(t, 0.45));
          float s = max(dot(dir, normalize(uSun)), 0.0);
          col += vec3(1.0, 0.55, 0.25) * pow(s, 6.0) * 0.55;            // halo doré
          col += vec3(1.0, 0.93, 0.78) * smoothstep(0.9990, 0.9997, s); // disque solaire
          col = mix(col, horizon * 0.55, smoothstep(0.0, -0.18, dir.y)); // sous l'horizon
          gl_FragColor = vec4(col, 1.0);
        }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(7000, 32, 16), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -1;

  // reflets : on capture le ciel dans une env map (un seul rendu). far élevé
  // car le dôme est très grand, sinon il serait coupé et l'env serait noire.
  try {
    const tmp = new THREE.Scene();
    tmp.background = new THREE.Color(0x9ab4d4); // repli si le dôme n'était pas capturé
    tmp.add(sky);
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(tmp, 0, 1, 15000).texture;
    pmrem.dispose();
  } catch (err) {
    console.warn('Env map du ciel indisponible :', err);
  }
  scene.add(sky); // re-parenté dans la scène réelle
}

/** Grand disque de pelouse, texturé d'un vert tacheté (lecture « herbe »). */
export function buildGround(scene: THREE.Scene): void {
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(2600, 64),
    new THREE.MeshStandardMaterial({
      map: makeGroundTexture(),
      roughness: 0.96,
      metalness: 0,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.5;
  scene.add(ground);
}

/** Brins d'herbe : InstancedMesh de petits cônes, teintes vertes→dorées. */
export function buildGrass(scene: THREE.Scene): void {
  const COUNT = 16000;
  const blade = new THREE.ConeGeometry(0.16, 1.0, 3);
  blade.translate(0, 0.5, 0); // pivot à la base
  const grass = new THREE.InstancedMesh(
    blade,
    new THREE.MeshStandardMaterial({ roughness: 0.95, metalness: 0 }),
    COUNT,
  );
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * 650; // densité plus forte près du centre
    dummy.position.set(Math.cos(a) * r, -0.5, Math.sin(a) * r);
    dummy.rotation.set(
      (Math.random() - 0.5) * 0.5,
      Math.random() * Math.PI,
      (Math.random() - 0.5) * 0.5,
    );
    dummy.scale.setScalar(0.7 + Math.random() * 1.6);
    dummy.updateMatrix();
    grass.setMatrixAt(i, dummy.matrix);
    col.setHSL(0.22 + Math.random() * 0.08, 0.45 + Math.random() * 0.2, 0.3 + Math.random() * 0.14);
    grass.setColorAt(i, col);
  }
  grass.instanceMatrix.needsUpdate = true;
  scene.add(grass);
}

/** Arbres low-poly (tronc + feuillage) en InstancedMesh, couleurs par sommet. */
export function buildTrees(scene: THREE.Scene): void {
  const trees = new THREE.InstancedMesh(
    makeTreeGeometry(),
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0 }),
    340,
  );
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 340; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 35 + Math.sqrt(Math.random()) * 880;
    dummy.position.set(Math.cos(a) * r, -0.5, Math.sin(a) * r);
    dummy.rotation.y = Math.random() * Math.PI * 2;
    dummy.scale.setScalar(0.8 + Math.random() * 1.2);
    dummy.updateMatrix();
    trees.setMatrixAt(i, dummy.matrix);
  }
  trees.instanceMatrix.needsUpdate = true;
  scene.add(trees);
}

/** Rivière réfléchissante (vagues animées) + ponts qui l'enjambent (relief).
 *  Renvoie la normal map de l'eau, défilée chaque frame par le rendu. */
export function buildRiver(scene: THREE.Scene): THREE.CanvasTexture {
  const waterNormal = makeWaterNormalTexture();
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(3200, 64),
    new THREE.MeshStandardMaterial({
      color: 0x2f5c72,
      roughness: 0.08,
      metalness: 0.55,
      transparent: true,
      opacity: 0.9,
      normalMap: waterNormal,
      normalScale: new THREE.Vector2(0.35, 0.35),
    }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, 0.05, RIVER_Z);
  scene.add(water);

  // ponts : tablier + garde-corps + piles, en pierre claire
  const stone = new THREE.MeshStandardMaterial({
    color: 0x9a958c,
    roughness: 0.85,
    metalness: 0.05,
  });
  for (const bx of [-260, 240]) {
    const bridge = new THREE.Group();
    const deck = new THREE.Mesh(new THREE.BoxGeometry(16, 1.4, 96), stone);
    deck.position.y = 6;
    bridge.add(deck);
    for (const rx of [-7.4, 7.4]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.5, 96), stone);
      rail.position.set(rx, 7.2, 0);
      bridge.add(rail);
    }
    for (const pz of [-30, 30]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(13, 13, 4), stone);
      pillar.position.set(0, 0, pz);
      bridge.add(pillar);
    }
    bridge.position.set(bx, 0, RIVER_Z);
    scene.add(bridge);
  }
  return waterNormal;
}
