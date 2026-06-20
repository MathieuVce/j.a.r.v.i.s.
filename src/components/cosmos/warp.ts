import * as THREE from 'three';

// ----------------------------------------------------------------- warp

export interface WarpField {
  object: THREE.LineSegments;
  /** Fait défiler les stries de `dz` le long de l'axe de voyage (-Z local). */
  scroll: (dz: number) => void;
}

/** Champ de stries « hyperespace » : segments lumineux le long de l'axe -Z
 *  local, étirés vers la queue. Invisible au repos ; scene.ts l'oriente, le
 *  positionne sur la caméra et le fait défiler pendant le saut. */
export function makeWarpField(count = 320, spread = 26, length = 1400): WarpField {
  const pos = new Float32Array(count * 2 * 3);
  const col = new Float32Array(count * 2 * 3);
  const half = length / 2;
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = spread * (0.25 + Math.random() * 0.75);
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    const z = -half + Math.random() * length;
    const len = 8 + Math.random() * 30;
    pos[i * 6] = x;
    pos[i * 6 + 1] = y;
    pos[i * 6 + 2] = z;
    pos[i * 6 + 3] = x;
    pos[i * 6 + 4] = y;
    pos[i * 6 + 5] = z - len;
    col[i * 6] = 0.8;
    col[i * 6 + 1] = 0.95;
    col[i * 6 + 2] = 1.0; // tête bleu-blanc
    col[i * 6 + 3] = 0.1;
    col[i * 6 + 4] = 0.3;
    col[i * 6 + 5] = 0.7; // queue sombre
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const lines = new THREE.LineSegments(
    geo,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    }),
  );
  lines.visible = false;
  lines.frustumCulled = false;
  const attr = geo.getAttribute('position') as THREE.BufferAttribute;

  const scroll = (dz: number): void => {
    for (let i = 0; i < count; i++) {
      let z0 = attr.getZ(i * 2) + dz;
      let z1 = attr.getZ(i * 2 + 1) + dz;
      if (z0 > half) {
        const len = z0 - z1;
        z0 -= length;
        z1 = z0 - len;
      }
      attr.setZ(i * 2, z0);
      attr.setZ(i * 2 + 1, z1);
    }
    attr.needsUpdate = true;
  };

  return { object: lines, scroll };
}
