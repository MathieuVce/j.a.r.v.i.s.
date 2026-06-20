import * as THREE from 'three';

// Helpers partagés par les décors cosmiques (galaxies, trou noir, ciel).
export interface Animated {
  object: THREE.Object3D;
  update: (dt: number, t: number) => void;
}

// ---------------------------------------------------------- texture commune

let SOFT: THREE.CanvasTexture | null = null;
/** Pastille radiale douce, partagée par toutes les particules / halos.
 *  Haute résolution (256²) + dégradé gaussien multi-arrêts : les points de
 *  galaxie restent lisses (pas de carrés pixélisés) même grossis de très près. */
export function softParticle(): THREE.CanvasTexture {
  if (SOFT) return SOFT;
  const S = 256;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  // profil quasi gaussien : décroissance régulière, bord parfaitement fondu
  for (let i = 0; i <= 16; i++) {
    const t = i / 16;
    g.addColorStop(t, `rgba(255,255,255,${Math.exp(-t * t * 5.5).toFixed(4)})`);
  }
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, S, S);
  SOFT = new THREE.CanvasTexture(c);
  SOFT.minFilter = THREE.LinearMipmapLinearFilter;
  SOFT.magFilter = THREE.LinearFilter;
  SOFT.generateMipmaps = true;
  return SOFT;
}
