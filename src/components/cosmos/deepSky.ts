import * as THREE from 'three';
import { type Animated, softParticle } from './_shared';

// ------------------------------------------------- ciel profond (voie lactée)

/** Tirage gaussien centré (Box-Muller) : concentre les étoiles près du plan
 *  galactique pour dessiner une bande étroite. */
function gauss(): number {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/**
 * Voie lactée : bande dense d'étoiles fines serrées autour d'un plan galactique
 * incliné, parsemée de halos diffus chauds/froids (le « lait »). Très loin
 * derrière tout (fond de ciel), elle dérive lentement et scintille en douceur.
 */
export function makeMilkyWay(radius = 820): Animated {
  const group = new THREE.Group();

  const N = 7000;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const c = new THREE.Color();
  const warm = new THREE.Color(0xfff1d6);
  const cool = new THREE.Color(0x9fc4ff);
  const pink = new THREE.Color(0xff9ec4);
  for (let i = 0; i < N; i++) {
    const a = Math.random() * Math.PI * 2;
    const lat = gauss() * 0.16; // bande étroite autour de l'équateur galactique
    const r = radius * (0.92 + Math.random() * 0.16);
    const cl = Math.cos(lat);
    pos[i * 3] = Math.cos(a) * cl * r;
    pos[i * 3 + 1] = Math.sin(lat) * r;
    pos[i * 3 + 2] = Math.sin(a) * cl * r;
    c.copy(warm).lerp(cool, Math.random() * 0.7);
    if (Math.random() > 0.94) c.lerp(pink, 0.5); // rares régions roses
    const b = 0.45 + Math.random() * 0.55;
    col[i * 3] = c.r * b;
    col[i * 3 + 1] = c.g * b;
    col[i * 3 + 2] = c.b * b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const stars = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      size: 2.2,
      map: softParticle(),
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: false, // fines étoiles de fond, taille pixel constante
      opacity: 0.9,
      fog: false,
    }),
  );
  group.add(stars);

  // halos diffus le long de la bande : le « lait » (poussières éclairées)
  const haze: THREE.Sprite[] = [];
  for (let i = 0; i < 22; i++) {
    const a = Math.random() * Math.PI * 2;
    const lat = gauss() * 0.12;
    const r = radius * 0.98;
    const cl = Math.cos(lat);
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: softParticle(),
        color: new THREE.Color().copy(warm).lerp(cool, Math.random()),
        transparent: true,
        opacity: 0.05 + Math.random() * 0.05,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      }),
    );
    sprite.position.set(Math.cos(a) * cl * r, Math.sin(lat) * r, Math.sin(a) * cl * r);
    const s = radius * (0.18 + Math.random() * 0.22);
    sprite.scale.set(s, s, 1);
    sprite.userData.base = (sprite.material as THREE.SpriteMaterial).opacity;
    sprite.userData.phase = Math.random() * Math.PI * 2;
    group.add(sprite);
    haze.push(sprite);
  }

  // plan galactique incliné : la bande traverse le ciel en diagonale
  group.rotation.set(0.34, 0.6, 0.5);

  const starMat = stars.material as THREE.PointsMaterial;
  return {
    object: group,
    update: (dt, time) => {
      group.rotation.y += dt * 0.002; // dérive très lente
      starMat.opacity = 0.78 + 0.14 * Math.sin(time * 0.4); // scintillement global
      for (const h of haze) {
        const m = h.material as THREE.SpriteMaterial;
        m.opacity =
          (h.userData.base as number) *
          (0.7 + 0.3 * Math.sin(time * 0.5 + (h.userData.phase as number)));
      }
    },
  };
}

/**
 * Beaux amas d'étoiles colorés, dispersés à moyenne distance : chacun est une
 * bouffée gaussienne de points (cœur blanc → bord teinté) coiffée d'un halo,
 * qui scintille doucement (pulsation décalée par amas).
 */
export function makeStarClusters(): Animated {
  const group = new THREE.Group();
  const defs: { c: THREE.Vector3; color: number; r: number; n: number }[] = [
    { c: new THREE.Vector3(180, 70, 120), color: 0x7fb0ff, r: 26, n: 360 },
    { c: new THREE.Vector3(-210, -50, 90), color: 0xff9ec4, r: 30, n: 320 },
    { c: new THREE.Vector3(60, 150, -210), color: 0xffe0a0, r: 24, n: 340 },
    { c: new THREE.Vector3(-120, 120, 240), color: 0x8af0d0, r: 28, n: 300 },
    { c: new THREE.Vector3(240, -120, -120), color: 0xc7a0ff, r: 26, n: 320 },
  ];
  const glows: THREE.Sprite[] = [];
  const cc = new THREE.Color();
  const white = new THREE.Color(0xffffff);
  for (const d of defs) {
    const color = new THREE.Color(d.color);
    const pos = new Float32Array(d.n * 3);
    const col = new Float32Array(d.n * 3);
    for (let i = 0; i < d.n; i++) {
      const rr = Math.pow(Math.random(), 2) * d.r; // concentration centrale
      const dir = new THREE.Vector3().randomDirection().multiplyScalar(rr);
      pos[i * 3] = d.c.x + dir.x;
      pos[i * 3 + 1] = d.c.y + dir.y;
      pos[i * 3 + 2] = d.c.z + dir.z;
      cc.copy(white).lerp(color, rr / d.r); // cœur blanc → bord coloré
      const b = 0.6 + Math.random() * 0.4;
      col[i * 3] = cc.r * b;
      col[i * 3 + 1] = cc.g * b;
      col[i * 3 + 2] = cc.b * b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    group.add(
      new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          size: 2.6,
          map: softParticle(),
          vertexColors: true,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
          opacity: 0.9,
          fog: false,
        }),
      ),
    );
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: softParticle(),
        color,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      }),
    );
    glow.position.copy(d.c);
    glow.scale.set(d.r * 2.4, d.r * 2.4, 1);
    glow.userData.base = 0.4;
    glow.userData.phase = Math.random() * Math.PI * 2;
    group.add(glow);
    glows.push(glow);
  }
  return {
    object: group,
    update: (_dt, time) => {
      for (const g of glows) {
        const m = g.material as THREE.SpriteMaterial;
        m.opacity =
          (g.userData.base as number) *
          (0.65 + 0.35 * Math.sin(time * 0.7 + (g.userData.phase as number)));
      }
    },
  };
}
