import * as THREE from 'three';

/**
 * Texture de halo radial (blanc opaque au centre → transparent au bord), à
 * teinter ensuite via la couleur du matériau. Paramétrable pour reproduire les
 * réglages historiques de chaque monde (résolution + point/alpha intermédiaire).
 */
export function makeGlowTexture(size = 128, midStop = 0.4, midAlpha = 0.3): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  const r = size / 2;
  const grad = ctx.createRadialGradient(r, r, 0, r, r, r);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(midStop, `rgba(255,255,255,${midAlpha})`);
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}
