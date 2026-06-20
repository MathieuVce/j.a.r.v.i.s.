import * as THREE from 'three';
import { type Animated, softParticle } from './_shared';

// --------------------------------------------------------------- trou noir

/** Trou noir : horizon noir, anneau de photons, disque d'accrétion en
 *  cisaillement keplerien (l'intérieur tourne plus vite que l'extérieur). */
export function makeBlackHole(rh = 6): Animated {
  const group = new THREE.Group();

  const horizon = new THREE.Mesh(
    new THREE.SphereGeometry(rh, 32, 24),
    new THREE.MeshBasicMaterial({ color: 0x000000, fog: false }),
  );
  group.add(horizon);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(rh * 1.16, rh * 0.035, 16, 96),
    new THREE.MeshBasicMaterial({
      color: 0xfff1d0,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    }),
  );
  ring.rotation.x = Math.PI / 2.3;
  group.add(ring);

  const N = 2200;
  const inner = rh * 1.4;
  const outer = rh * 4.2;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const baseR = new Float32Array(N);
  const ang = new Float32Array(N);
  const hot = new THREE.Color(0xfff4e0);
  const mid = new THREE.Color(0xff9a3c);
  const cold = new THREE.Color(0x7a1e10);
  const c = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const r = inner + Math.pow(Math.random(), 1.5) * (outer - inner);
    baseR[i] = r;
    ang[i] = Math.random() * Math.PI * 2;
    const t = (r - inner) / (outer - inner);
    c.copy(hot).lerp(mid, Math.min(1, t * 1.6));
    if (t > 0.5) c.lerp(cold, (t - 0.5) * 1.6);
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const disk = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      size: 1.6,
      map: softParticle(),
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.95,
      fog: false,
    }),
  );
  disk.rotation.x = Math.PI / 2.3;
  group.add(disk);

  const attr = geo.getAttribute('position') as THREE.BufferAttribute;
  const update = (dt: number): void => {
    for (let i = 0; i < N; i++) {
      const r = baseR[i];
      ang[i] += dt * (1.8 / Math.pow(r / inner, 1.5));
      const a = ang[i];
      attr.setXYZ(i, Math.cos(a) * r, Math.sin(a * 3 + r) * r * 0.02, Math.sin(a) * r);
    }
    attr.needsUpdate = true;
    ring.rotation.z += dt * 0.06;
  };
  update(0);

  return { object: group, update };
}
