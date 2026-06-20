import * as THREE from 'three';

/**
 * Système solaire : specs des 8 planètes et génération procédurale des
 * textures (équirectangulaires, raccordées horizontalement) — aucune image
 * à télécharger, tout est calculé au démarrage.
 */

export type PlanetKind =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune';

export interface PlanetSpec {
  kind: PlanetKind;
  name: string;
  cls: string;
  /** Rayon scène (échelle stylisée, pas réelle). */
  r: number;
  /** Distance orbitale scène. */
  dist: number;
  radiusKm: number;
  orbitAu: number;
  moons: number;
  /** Couleur d'accent : anneau d'orbite, lueur de survol. */
  glow: number;
}

export const SOLAR_SYSTEM: PlanetSpec[] = [
  {
    kind: 'mercury',
    name: 'MERCURE',
    cls: 'TELLURIQUE',
    r: 0.55,
    dist: 7,
    radiusKm: 2440,
    orbitAu: 0.39,
    moons: 0,
    glow: 0x9a948e,
  },
  {
    kind: 'venus',
    name: 'VÉNUS',
    cls: 'TELLURIQUE',
    r: 0.95,
    dist: 10,
    radiusKm: 6052,
    orbitAu: 0.72,
    moons: 0,
    glow: 0xf0d9a8,
  },
  {
    kind: 'earth',
    name: 'TERRE',
    cls: 'TELLURIQUE',
    r: 1.0,
    dist: 13.5,
    radiusKm: 6371,
    orbitAu: 1.0,
    moons: 1,
    glow: 0x4aa8ff,
  },
  {
    kind: 'mars',
    name: 'MARS',
    cls: 'TELLURIQUE',
    r: 0.7,
    dist: 17,
    radiusKm: 3390,
    orbitAu: 1.52,
    moons: 2,
    glow: 0xd07a4a,
  },
  {
    kind: 'jupiter',
    name: 'JUPITER',
    cls: 'GÉANTE GAZEUSE',
    r: 2.6,
    dist: 34,
    radiusKm: 69911,
    orbitAu: 5.2,
    moons: 95,
    glow: 0xc8a070,
  },
  {
    kind: 'saturn',
    name: 'SATURNE',
    cls: 'GÉANTE GAZEUSE',
    r: 2.2,
    dist: 41,
    radiusKm: 58232,
    orbitAu: 9.54,
    moons: 146,
    glow: 0xd9c49a,
  },
  {
    kind: 'uranus',
    name: 'URANUS',
    cls: 'GÉANTE DE GLACES',
    r: 1.5,
    dist: 47,
    radiusKm: 25362,
    orbitAu: 19.2,
    moons: 28,
    glow: 0x8fd9de,
  },
  {
    kind: 'neptune',
    name: 'NEPTUNE',
    cls: 'GÉANTE DE GLACES',
    r: 1.45,
    dist: 52,
    radiusKm: 24622,
    orbitAu: 30.1,
    moons: 16,
    glow: 0x3f7de8,
  },
];

// ------------------------------------------------------------------- bruit

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Sampler = (u: number, v: number) => number;

/**
 * Bruit de valeur fractal (fbm), périodique en u — la texture se raccorde
 * donc parfaitement sur la couture de la sphère.
 */
function makeFbm(seed: number, basePeriod: number, octaves = 4): Sampler {
  const rng = mulberry32(seed);
  const layers = Array.from({ length: octaves }, (_, o) => {
    const period = basePeriod << o;
    const lattice = new Float32Array(period * period);
    for (let i = 0; i < lattice.length; i++) lattice[i] = rng();
    return { period, lattice };
  });
  return (u, v) => {
    let sum = 0;
    let amp = 0.5;
    let total = 0;
    for (const { period, lattice } of layers) {
      const x = u * period;
      const y = Math.abs(v) * period;
      const x0 = Math.floor(x) % period;
      const x1 = (x0 + 1) % period;
      const y0 = Math.floor(y) % period;
      const y1 = (y0 + 1) % period;
      const fx = x - Math.floor(x);
      const fy = y - Math.floor(y);
      const sx = fx * fx * (3 - 2 * fx);
      const sy = fy * fy * (3 - 2 * fy);
      const a = lattice[y0 * period + x0];
      const b = lattice[y0 * period + x1];
      const c = lattice[y1 * period + x0];
      const d = lattice[y1 * period + x1];
      sum += amp * ((a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy);
      total += amp;
      amp *= 0.5;
    }
    return sum / total;
  };
}

// ----------------------------------------------------------------- couleurs

type RGB = [number, number, number];

function mix(a: RGB, b: RGB, t: number): RGB {
  const k = Math.min(1, Math.max(0, t));
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
}

/** Masque elliptique doux (tempêtes : Grande Tache rouge, tache de Neptune). */
function spot(u: number, v: number, cu: number, cv: number, ru: number, rv: number): number {
  const du = Math.min(Math.abs(u - cu), 1 - Math.abs(u - cu)) / ru;
  const dv = (v - cv) / rv;
  const d = du * du + dv * dv;
  return d > 1 ? 0 : 1 - d;
}

function gasBands(
  u: number,
  v: number,
  palette: RGB[],
  freq: number,
  n1: Sampler,
  n2: Sampler,
): RGB {
  // turbulence : les bandes ondulent et se mélangent comme des nuages
  const turb = (n1(u * 3, v * 6) - 0.5) * 0.07 + (n2(u * 7, v * 14) - 0.5) * 0.025;
  const t = (v + turb) * freq;
  const idx = ((Math.floor(t) % palette.length) + palette.length) % palette.length;
  const f = t - Math.floor(t);
  const sm = f * f * (3 - 2 * f);
  return mix(palette[idx], palette[(idx + 1) % palette.length], sm);
}

/** Couleur + hauteur (bump) d'un pixel de la planète. */
function pixel(kind: PlanetKind, u: number, v: number, n1: Sampler, n2: Sampler): [RGB, number] {
  switch (kind) {
    case 'mercury': {
      const n = n1(u, v);
      return [mix([96, 92, 88], [168, 160, 152], n), n];
    }
    case 'venus': {
      const swirl = (n1(u * 2, v * 2) - 0.5) * 0.2;
      const band = 0.5 + 0.5 * Math.sin((v + swirl) * Math.PI * 7);
      const haze = n2(u * 3, v * 3);
      return [mix(mix([196, 148, 78], [240, 217, 168], band), [255, 240, 205], haze * 0.4), 0.5];
    }
    case 'earth': {
      const n = n1(u, v);
      const capEdge = 0.43 - n2(u * 6, v) * 0.025;
      let col: RGB;
      let h: number;
      if (Math.abs(v - 0.5) > capEdge) {
        col = [232, 238, 244]; // calottes polaires
        h = 0.85;
      } else if (n > 0.54) {
        const alt = (n - 0.54) / 0.46; // continents : plaines → montagnes
        col = mix([44, 100, 50], [140, 120, 82], alt);
        if (alt > 0.72) col = mix(col, [205, 205, 205], (alt - 0.72) * 2.8);
        h = 0.55 + alt * 0.45;
      } else {
        col = mix([8, 32, 82], [20, 86, 156], n / 0.54); // océans
        h = 0.25;
      }
      const cloud = n2(u * 2 + 0.31, v * 2);
      if (cloud > 0.6) col = mix(col, [255, 255, 255], Math.min(1, (cloud - 0.6) * 2.6) * 0.85);
      return [col, h];
    }
    case 'mars': {
      const n = n1(u, v);
      let col = mix([110, 48, 26], [206, 126, 76], n);
      if (n < 0.38) col = mix(col, [66, 30, 18], 0.55); // mers sombres
      if (Math.abs(v - 0.5) > 0.455) col = mix(col, [240, 238, 230], 0.85); // calottes
      return [col, n];
    }
    case 'jupiter': {
      let col = gasBands(
        u,
        v,
        [
          [200, 178, 154],
          [166, 124, 82],
          [232, 217, 195],
          [140, 90, 51],
          [216, 196, 170],
        ],
        9,
        n1,
        n2,
      );
      const storm = spot(u, v, 0.72, 0.66, 0.085, 0.045);
      if (storm > 0) col = mix(col, [180, 82, 48], storm * 0.9);
      return [col, 0.5];
    }
    case 'saturn':
      return [
        gasBands(
          u,
          v,
          [
            [217, 196, 154],
            [199, 171, 122],
            [233, 220, 184],
            [186, 152, 104],
          ],
          7,
          n1,
          n2,
        ),
        0.5,
      ];
    case 'uranus': {
      const n = (n1(u, v) - 0.5) * 0.25;
      const band = 0.5 + 0.5 * Math.sin(v * Math.PI * 4 + n * 3);
      return [mix([127, 200, 208], [172, 230, 235], band * 0.55 + n + 0.2), 0.5];
    }
    case 'neptune': {
      const swirl = (n1(u * 2, v * 2) - 0.5) * 0.25;
      const band = 0.5 + 0.5 * Math.sin((v + swirl) * Math.PI * 5);
      let col = mix([28, 66, 172], [72, 130, 232], band);
      const storm = spot(u, v, 0.32, 0.42, 0.07, 0.04);
      if (storm > 0) col = mix(col, [14, 36, 105], storm * 0.85);
      const wisp = n2(u * 4, v * 8);
      if (wisp > 0.74) col = mix(col, [225, 235, 250], (wisp - 0.74) * 2.2);
      return [col, 0.5];
    }
  }
}

const ROCKY: PlanetKind[] = ['mercury', 'mars', 'earth'];
const SEEDS: Record<PlanetKind, number> = {
  mercury: 11,
  venus: 23,
  earth: 37,
  mars: 41,
  jupiter: 53,
  saturn: 67,
  uranus: 79,
  neptune: 97,
};

function makePlanetTextures(kind: PlanetKind): {
  map: THREE.CanvasTexture;
  bump: THREE.CanvasTexture | null;
} {
  const W = 512;
  const H = 256;
  const n1 = makeFbm(SEEDS[kind], 8);
  const n2 = makeFbm(SEEDS[kind] * 7 + 3, 16);
  const rocky = ROCKY.includes(kind);

  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  const img = ctx.createImageData(W, H);
  const bumpCanvas = rocky ? document.createElement('canvas') : null;
  let bumpImg: ImageData | null = null;
  let bctx: CanvasRenderingContext2D | null = null;
  if (bumpCanvas) {
    bumpCanvas.width = W;
    bumpCanvas.height = H;
    bctx = bumpCanvas.getContext('2d')!;
    bumpImg = bctx.createImageData(W, H);
  }

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const [col, h] = pixel(kind, x / W, y / H, n1, n2);
      const o = (y * W + x) * 4;
      img.data[o] = col[0];
      img.data[o + 1] = col[1];
      img.data[o + 2] = col[2];
      img.data[o + 3] = 255;
      if (bumpImg) {
        const g = Math.floor(h * 255);
        bumpImg.data[o] = g;
        bumpImg.data[o + 1] = g;
        bumpImg.data[o + 2] = g;
        bumpImg.data[o + 3] = 255;
      }
    }
  }
  ctx.putImageData(img, 0, 0);

  // cratères de Mercure : impacts sombres avec un liseré clair
  if (kind === 'mercury') {
    const rng = mulberry32(5);
    for (let i = 0; i < 90; i++) {
      const cx = rng() * W;
      const cy = H * 0.08 + rng() * H * 0.84;
      const cr = 2 + rng() * rng() * 11;
      for (const ox of [-W, 0, W]) {
        ctx.beginPath();
        ctx.arc(cx + ox, cy, cr, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(30,28,26,0.32)';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + ox, cy, cr, -2.4, 0.6);
        ctx.strokeStyle = 'rgba(255,250,240,0.22)';
        ctx.lineWidth = Math.max(1, cr * 0.18);
        ctx.stroke();
      }
    }
  }

  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  map.anisotropy = 4;

  let bump: THREE.CanvasTexture | null = null;
  if (bumpCanvas && bumpImg && bctx) {
    bctx.putImageData(bumpImg, 0, 0);
    bump = new THREE.CanvasTexture(bumpCanvas);
    bump.wrapS = THREE.RepeatWrapping;
  }
  return { map, bump };
}

export function makePlanetMaterial(spec: PlanetSpec): THREE.MeshStandardMaterial {
  const { map, bump } = makePlanetTextures(spec.kind);
  const mat = new THREE.MeshStandardMaterial({
    map,
    roughness: ROCKY.includes(spec.kind) ? 0.92 : 0.68,
    metalness: 0.02,
    // auto-illumination douce par la texture elle-même : la face à l'ombre
    // reste lisible, et le survol/grab monte l'intensité (style holo)
    emissive: 0xffffff,
    emissiveMap: map,
    emissiveIntensity: 0.07,
  });
  if (bump) {
    mat.bumpMap = bump;
    mat.bumpScale = 0.5;
  }
  return mat;
}

/**
 * Lune : régolithe gris clair, mers basaltiques sombres (basse fréquence) et
 * cratères. Émissif très faible pour que les phases (éclairage du Soleil)
 * restent bien marquées — la face à l'ombre ne s'auto-illumine presque pas.
 */
export function makeMoonMaterial(): THREE.MeshStandardMaterial {
  const W = 512;
  const H = 256;
  const n1 = makeFbm(137, 8);
  const n2 = makeFbm(613, 4); // mers basaltiques, larges taches sombres
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  const img = ctx.createImageData(W, H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const n = n1(x / W, y / H);
      const maria = n2(x / W, y / H);
      let col = mix([62, 62, 68], [156, 156, 162], n);
      if (maria < 0.42) col = mix(col, [40, 42, 50], ((0.42 - maria) / 0.42) * 0.8);
      const o = (y * W + x) * 4;
      img.data[o] = col[0];
      img.data[o + 1] = col[1];
      img.data[o + 2] = col[2];
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  // cratères : impact sombre + liseré clair, répété sur la couture
  const rng = mulberry32(29);
  for (let i = 0; i < 120; i++) {
    const cx = rng() * W;
    const cy = H * 0.06 + rng() * H * 0.88;
    const cr = 1.5 + rng() * rng() * 9;
    for (const ox of [-W, 0, W]) {
      ctx.beginPath();
      ctx.arc(cx + ox, cy, cr, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(20,20,24,0.30)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + ox, cy, cr, -2.4, 0.5);
      ctx.strokeStyle = 'rgba(235,235,240,0.22)';
      ctx.lineWidth = Math.max(1, cr * 0.16);
      ctx.stroke();
    }
  }

  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  map.anisotropy = 4;
  return new THREE.MeshStandardMaterial({
    map,
    roughness: 0.97,
    metalness: 0.0,
    emissive: 0xffffff,
    emissiveMap: map,
    emissiveIntensity: 0.06,
  });
}

/** Anneaux de Saturne : bandes concentriques avec division de Cassini. */
export function makeSaturnRings(r: number): THREE.Mesh {
  const inner = r * 1.35;
  const outer = r * 2.35;
  const geo = new THREE.RingGeometry(inner, outer, 96, 1);
  // UV radiale : la texture 1D s'étire du bord interne au bord externe
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const rad = Math.hypot(pos.getX(i), pos.getY(i));
    uv.setXY(i, (rad - inner) / (outer - inner), 0.5);
  }

  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 4;
  const ctx = c.getContext('2d')!;
  for (let x = 0; x < 256; x++) {
    const t = x / 256;
    const band = 0.55 + 0.45 * Math.sin(t * 47) * Math.sin(t * 13 + 2);
    let alpha = 0.5 + 0.45 * band;
    if (t > 0.6 && t < 0.67) alpha *= 0.12; // division de Cassini
    if (t < 0.06) alpha *= t / 0.06;
    if (t > 0.94) alpha *= (1 - t) / 0.06;
    const lum = 185 + Math.floor(band * 55);
    ctx.fillStyle = `rgba(${lum},${lum - 22},${lum - 58},${alpha.toFixed(3)})`;
    ctx.fillRect(x, 0, 1, 4);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;

  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

/** Halo atmosphérique (Terre, Vénus) : coquille additive à peine visible. */
export function makeAtmosphere(r: number, color: number, opacity: number): THREE.Mesh {
  return new THREE.Mesh(
    new THREE.SphereGeometry(r * 1.05, 32, 24),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    }),
  );
}

/** Surface solaire : granulation orange/blanc en fbm. */
export function makeSunMaterial(): THREE.MeshBasicMaterial {
  const W = 256;
  const H = 128;
  const n = makeFbm(7, 8, 5);
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  const img = ctx.createImageData(W, H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const t = n(x / W, y / H);
      const col =
        t < 0.5
          ? mix([255, 106, 0], [255, 200, 87], t * 2)
          : mix([255, 200, 87], [255, 244, 200], (t - 0.5) * 2);
      const o = (y * W + x) * 4;
      img.data[o] = col[0];
      img.data[o + 1] = col[1];
      img.data[o + 2] = col[2];
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  return new THREE.MeshBasicMaterial({ map });
}
