import * as THREE from 'three';

// ----------------------------------------------- environnement réfléchi (IBL)

export let SPACE_ENV: THREE.Texture | null = null;
/**
 * Petit environnement spatial procédural (équirectangulaire → PMREM) : fond
 * sombre, soleil chaud, lueurs nébuleuses et étoiles. Sert d'`envMap` aux
 * engins pour le vrai look « vaisseau spatial » — le métal reflète le soleil
 * et l'espace au lieu d'être terne. À préparer une fois (il faut le renderer),
 * avant de construire les engins ; le résultat est mis en cache.
 */
export function makeSpaceEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  if (SPACE_ENV) return SPACE_ENV;
  const W = 512;
  const H = 256;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  // fond : dégradé bleu nuit → noir
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0b1838');
  bg.addColorStop(0.5, '#050a18');
  bg.addColorStop(1, '#01030a');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);
  // lueurs nébuleuses colorées → reflets diffus subtils sur le métal
  const blobs: [number, number, number, string][] = [
    [W * 0.2, H * 0.42, 120, 'rgba(46,230,255,0.5)'],
    [W * 0.78, H * 0.62, 140, 'rgba(157,123,255,0.45)'],
    [W * 0.5, H * 0.82, 110, 'rgba(55,255,196,0.32)'],
  ];
  for (const [x, y, r, color] of blobs) {
    const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
    gg.addColorStop(0, color);
    gg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gg;
    ctx.fillRect(0, 0, W, H);
  }
  // soleil : disque chaud très lumineux → glint spéculaire net sur le métal
  const sx = W * 0.66;
  const sy = H * 0.28;
  const sun = ctx.createRadialGradient(sx, sy, 0, sx, sy, 72);
  sun.addColorStop(0, '#ffffff');
  sun.addColorStop(0.25, '#fff0cf');
  sun.addColorStop(0.5, 'rgba(255,210,140,0.5)');
  sun.addColorStop(1, 'rgba(255,180,90,0)');
  ctx.fillStyle = sun;
  ctx.fillRect(0, 0, W, H);
  // champ d'étoiles
  for (let i = 0; i < 240; i++) {
    ctx.fillStyle = `rgba(255,255,255,${(0.4 + Math.random() * 0.6).toFixed(2)})`;
    const r = Math.random() > 0.92 ? 1.6 : 0.8;
    ctx.fillRect(Math.random() * W, Math.random() * H, r, r);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  SPACE_ENV = pmrem.fromEquirectangular(tex).texture;
  pmrem.dispose();
  tex.dispose();
  return SPACE_ENV;
}
