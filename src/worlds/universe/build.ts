import * as THREE from 'three';
import { makeSunMaterial } from '../../components/planets';
import { makeGlowTexture } from '../../utils/textures';
import { CYAN, AMBER } from '../../utils/palette';

/**
 * Constructeurs sans état du monde « univers » : ils ajoutent leurs objets à la
 * scène fournie et renvoient les poignées dont la classe Universe a besoin. Pas
 * de référence à l'instance → faciles à lire et à réutiliser.
 */

export interface Comet {
  head: THREE.Mesh;
  trail: THREE.Line;
  history: THREE.Vector3[];
  velocity: THREE.Vector3;
  respawnIn: number;
}

/** Glow des nébuleuses / balises de l'univers (réglage historique 256 px). */
export function universeGlow(): THREE.CanvasTexture {
  return makeGlowTexture(256, 0.35, 0.35);
}

/** Rayon scène du Soleil — partagé par le builder et la prise en main. */
export const SUN_RADIUS = 3.2;

/** Puissance et décroissance (∝ 1/d^decay) de la lumière du Soleil. */
export const SUN_LIGHT_INTENSITY = 900;
export const SUN_LIGHT_DECAY = 1.7;

/** Soleil granulé + halo + éclairage du système. Renvoie le mesh du soleil et
 *  sa lumière. Le halo et la lumière sont parentés au mesh : ils suivent le
 *  Soleil quand on l'attrape et le déplace, ce qui réoriente l'éclairage. */
export function buildSun(scene: THREE.Scene): { sun: THREE.Mesh; light: THREE.PointLight } {
  const sun = new THREE.Mesh(new THREE.SphereGeometry(SUN_RADIUS, 48, 32), makeSunMaterial());
  scene.add(sun);
  const sunHalo = new THREE.Mesh(
    new THREE.SphereGeometry(SUN_RADIUS * 1.125, 32, 24),
    new THREE.MeshBasicMaterial({
      color: AMBER,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    }),
  );
  sun.add(sunHalo);
  const light = new THREE.PointLight(0xfff3d0, SUN_LIGHT_INTENSITY, 0, SUN_LIGHT_DECAY);
  sun.add(light);
  scene.add(new THREE.AmbientLight(0xa8c8e0, 0.25));
  return { sun, light };
}

/** Ceinture d'astéroïdes instanciée. */
export function buildAsteroidBelt(scene: THREE.Scene): THREE.InstancedMesh {
  const beltCount = 450;
  const belt = new THREE.InstancedMesh(
    new THREE.DodecahedronGeometry(0.22, 0),
    new THREE.MeshStandardMaterial({
      color: 0x8a9aa3,
      roughness: 0.9,
      emissive: 0x2ee6ff,
      emissiveIntensity: 0.04,
      flatShading: true,
    }),
    beltCount,
  );
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const sc = new THREE.Vector3();
  for (let i = 0; i < beltCount; i++) {
    const a = Math.random() * Math.PI * 2;
    const d = 28 + (Math.random() - 0.5) * 3.5;
    const pos = new THREE.Vector3(Math.cos(a) * d, (Math.random() - 0.5) * 1.6, Math.sin(a) * d);
    q.setFromEuler(new THREE.Euler(Math.random() * 3, Math.random() * 3, Math.random() * 3));
    sc.setScalar(0.4 + Math.random() * 1.3);
    m.compose(pos, q, sc);
    belt.setMatrixAt(i, m);
  }
  scene.add(belt);
  return belt;
}

/** Grilles holographiques (polaire + sol cartésien + sphère céleste). Renvoie
 *  la grille polaire (dont l'opacité est animée au rendu). */
export function buildGrids(scene: THREE.Scene): THREE.PolarGridHelper {
  const grid = new THREE.PolarGridHelper(48, 16, 12, 64, CYAN, CYAN);
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.07;
  grid.position.y = -10;
  scene.add(grid);

  const floor = new THREE.GridHelper(280, 56, CYAN, CYAN);
  (floor.material as THREE.Material).transparent = true;
  (floor.material as THREE.Material).opacity = 0.045;
  floor.position.y = -10.05;
  scene.add(floor);

  const celestial = new THREE.Mesh(
    new THREE.SphereGeometry(135, 36, 24),
    new THREE.MeshBasicMaterial({
      color: CYAN,
      wireframe: true,
      transparent: true,
      opacity: 0.035,
      depthWrite: false,
    }),
  );
  scene.add(celestial);
  return grid;
}

/** Nébuleuses (sprites additifs au loin) ; teinte de base mémorisée pour la
 *  dérive + pulsation animées dans le rendu. */
export function buildNebulae(scene: THREE.Scene): THREE.Sprite[] {
  const nebulaTex = universeGlow();
  const nebulaColors = [0x2ee6ff, 0x9d7bff, 0x1f6dff, 0x37ffc4, 0xff7ad0, 0x6a8cff];
  const hsl = { h: 0, s: 0, l: 0 };
  const nebulae: THREE.Sprite[] = [];
  for (let i = 0; i < 18; i++) {
    const mat = new THREE.SpriteMaterial({
      map: nebulaTex,
      color: nebulaColors[i % nebulaColors.length],
      transparent: true,
      opacity: 0.04 + Math.random() * 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
    mat.color.getHSL(hsl);
    const sprite = new THREE.Sprite(mat);
    sprite.position.copy(
      new THREE.Vector3().randomDirection().multiplyScalar(150 + Math.random() * 160),
    );
    const s = 90 + Math.random() * 150;
    sprite.scale.set(s, s, 1);
    sprite.userData.baseH = hsl.h;
    sprite.userData.baseS = hsl.s;
    sprite.userData.baseL = hsl.l;
    sprite.userData.baseOpacity = mat.opacity;
    sprite.userData.phase = Math.random() * Math.PI * 2;
    scene.add(sprite);
    nebulae.push(sprite);
  }
  return nebulae;
}

/** Champ d'étoiles couvrant tout le volume navigable. */
export function buildStarfield(scene: THREE.Scene): THREE.Points {
  const starCount = 5000;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(150 + Math.random() * 1700);
    positions.set([v.x, v.y, v.z], i * 3);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      color: 0xbfefff,
      size: 0.8,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    }),
  );
  scene.add(stars);
  return stars;
}

/** Comète : tête lumineuse + traînée dégradée (réinitialisées au respawn). */
export function makeComet(scene: THREE.Scene, delay: number): Comet {
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xeaffff }),
  );
  head.visible = false;
  scene.add(head);

  const N = 28;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  const colors = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const f = 1 - i / N;
    colors.set([0.18 * f, 0.9 * f, 1.0 * f], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const trail = new THREE.Line(
    geo,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
    }),
  );
  trail.frustumCulled = false;
  scene.add(trail);

  return {
    head,
    trail,
    history: Array.from({ length: N }, () => new THREE.Vector3()),
    velocity: new THREE.Vector3(),
    respawnIn: delay,
  };
}

/** Étoile filante ou astéroïde lancé par le joueur. Renvoie un Object3D prêt à
 *  voler ; la classe Universe gère sa course, sa culbute et sa disparition. */
export function makeProjectile(kind: 'star' | 'asteroid'): THREE.Object3D {
  if (kind === 'star') {
    // étoile filante : noyau émissif + halo additif coloré
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 12, 10),
      new THREE.MeshBasicMaterial({ color: 0xeaffff }),
    );
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: universeGlow(),
        color: Math.random() < 0.5 ? CYAN : AMBER,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      }),
    );
    halo.scale.set(2.4, 2.4, 1);
    core.add(halo);
    return core;
  }
  // astéroïde : caillou facetté, légère lueur cyan comme la ceinture
  return new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.35 + Math.random() * 0.35, 0),
    new THREE.MeshStandardMaterial({
      color: 0x8a9aa3,
      roughness: 0.9,
      emissive: 0x2ee6ff,
      emissiveIntensity: 0.05,
      flatShading: true,
    }),
  );
}

/** Panneau de données holographique (CanvasTexture → Sprite). */
export function makePanel(title: string, lines: string[]): THREE.Sprite {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 288;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = 'rgba(4, 18, 28, 0.72)';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = 'rgba(46, 230, 255, 0.9)';
  ctx.lineWidth = 3;
  ctx.strokeRect(6, 6, c.width - 12, c.height - 12);
  ctx.fillStyle = 'rgba(46, 230, 255, 0.25)';
  ctx.fillRect(6, 6, c.width - 12, 54);

  ctx.font = 'bold 34px monospace';
  ctx.fillStyle = '#ffc857';
  ctx.fillText(`◉ ${title}`, 24, 46);
  ctx.font = '26px monospace';
  ctx.fillStyle = '#2ee6ff';
  lines.forEach((l, i) => ctx.fillText(l, 24, 108 + i * 42));

  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(c),
      transparent: true,
      depthWrite: false,
    }),
  );
  sprite.scale.set(9, 5, 1);
  return sprite;
}
