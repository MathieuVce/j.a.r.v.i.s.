import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export interface BloomOpts {
  strength: number;
  radius: number;
  threshold: number;
}

/**
 * Chaîne de post-traitement commune aux mondes : rendu de la scène + bloom
 * (halo) + passe de sortie. Chaque monde fournit ses propres réglages de bloom.
 */
export function makeBloomComposer(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  bloom: BloomOpts,
): EffectComposer {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(
    new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      bloom.strength,
      bloom.radius,
      bloom.threshold,
    ),
  );
  composer.addPass(new OutputPass());
  return composer;
}
