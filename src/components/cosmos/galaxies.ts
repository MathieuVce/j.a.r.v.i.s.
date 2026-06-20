import * as THREE from 'three';
import { type Animated, softParticle } from './_shared';

// ----------------------------------------------------------------- galaxies

export interface GalaxyOpts {
  count?: number;
  radius?: number;
  arms?: number;
  core?: number;
  edge?: number;
  spin?: number;
  thickness?: number;
  spinSpeed?: number;
}

/** Galaxie spirale : bras logarithmiques en particules additives, dégradé du
 *  cœur chaud vers le bord froid, halo de noyau. Ignore le brouillard (fog:false)
 *  pour rester visible de très loin comme une vraie galaxie dans le ciel. */
export function makeGalaxy(o: GalaxyOpts = {}): Animated {
  const count = o.count ?? 2600;
  const radius = o.radius ?? 110;
  const arms = o.arms ?? 4;
  const core = new THREE.Color(o.core ?? 0xffe6b0);
  const edge = new THREE.Color(o.edge ?? 0x3a7bff);
  const spin = o.spin ?? 2.4;
  const thickness = o.thickness ?? 0.12;
  const spinSpeed = o.spinSpeed ?? 0.04;

  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const arm = ((i % arms) / arms) * Math.PI * 2;
    const r = Math.pow(Math.random(), 0.6) * radius;
    const t = r / radius;
    const branch = arm + (r / radius) * spin * Math.PI * 2;
    const scatter = (Math.random() - 0.5) * (0.4 + (1 - t) * 1.3);
    const a = branch + scatter * 0.5;
    const rr = r + scatter * 6;
    pos[i * 3] = Math.cos(a) * rr;
    pos[i * 3 + 1] = (Math.random() - 0.5) * thickness * radius * (1 - t * 0.8);
    pos[i * 3 + 2] = Math.sin(a) * rr;
    c.copy(core).lerp(edge, Math.pow(t, 0.7));
    const b = 0.6 + Math.random() * 0.4;
    col[i * 3] = c.r * b;
    col[i * 3 + 1] = c.g * b;
    col[i * 3 + 2] = c.b * b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const points = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      size: 1.7,
      map: softParticle(),
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      opacity: 0.85,
      fog: false,
    }),
  );

  const group = new THREE.Group();
  group.add(points);

  // double halo : noyau brillant compact + voile diffus large — masque la
  // raréfaction des points au centre quand on s'approche de la galaxie
  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: softParticle(),
      color: core,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    }),
  );
  halo.scale.set(radius * 0.5, radius * 0.5, 1);
  group.add(halo);
  const veil = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: softParticle(),
      color: core.clone().lerp(edge, 0.35),
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    }),
  );
  veil.scale.set(radius * 1.7, radius * 1.7, 1);
  group.add(veil);

  // inclinaison aléatoire : aucune galaxie n'est vue parfaitement de face
  group.rotation.set(
    (Math.random() - 0.5) * 1.1,
    Math.random() * Math.PI,
    (Math.random() - 0.5) * 0.6,
  );

  return {
    object: group,
    update: (dt) => {
      points.rotation.y += spinSpeed * dt;
    },
  };
}
