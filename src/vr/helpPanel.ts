import * as THREE from 'three';
import { xrHandState } from './state';

/**
 * Panneau d'aide VR (commandes des manettes) : texture canvas verrouillée
 * devant la tête, avec affichage/masquage et auto-masquage temporisé.
 */

let helpVisible = false;
let helpHideAt = 0; // timestamp d'auto-masquage (0 = pas de minuterie)
let helpWorldName = 'CARTE';
let helpTexture: THREE.CanvasTexture | null = null;
let helpCanvas: HTMLCanvasElement | null = null;

type HelpLine = [string, string];

// Commandes communes à tous les mondes (en tête de panneau).
const COMMON_HELP: HelpLine[] = [
  ['A', 'MONDE SUIVANT'],
  ['B', 'MONDE PRÉCÉDENT'],
  ['X / Y', 'AFFICHER / MASQUER CETTE AIDE'],
];

// Commandes propres à chaque monde, indexées par le nom court (WORLD_SHORT).
// Le panneau n'affiche que celles du monde courant → aide ciblée et lisible.
const WORLD_HELP: Record<string, HelpLine[]> = {
  CARTE: [
    ['STICK GAUCHE ↔', 'PIVOTER (TENIR = ACCÉLÈRE)'],
    ['STICK GAUCHE ↕', 'AVANCER / RECULER'],
    ['STICK DROIT ↕', 'ZOOM'],
    ['2 GÂCHETTES + ÉCARTER', 'ZOOM'],
    ['GÂCHETTE', 'PLONGER SUR LE POINT VISÉ'],
    ['GRIP', 'PINCER / PLONGER SUR UN POINT'],
    ['GÂCHETTE EN VILLE', 'RETOUR AU GLOBE'],
    ['CLIC STICK GAUCHE', 'MODE SPIDER-MAN (ON/OFF)'],
    ['SPIDER · STICK GAUCHE', 'MARCHER / COURIR (À FOND)'],
    ['SPIDER · STICK DROIT', 'TOURNER LA VUE (PAR CRANS)'],
    ['SPIDER · A', 'SAUTER (×2 = DOUBLE SAUT)'],
    ['SPIDER · GÂCHETTE', 'TIRER UNE TOILE · SE BALANCER'],
    ['SPIDER · GRIP (AU MUR)', "S'AGRIPPER · TIRER POUR GRIMPER"],
    ['SPIDER · A (AU MUR)', 'SE PROJETER VERS LE REGARD'],
    ['SPIDER · À-COUPS BRAS', 'POMPER POUR ACCÉLÉRER'],
  ],
  UNIVERS: [
    ['STICK GAUCHE', 'ORIENTER (TENIR = ACCÉLÈRE)'],
    ['STICK DROIT ↕', 'AVANCER / RECULER'],
    ['GÂCHETTE GAUCHE', 'LANCER UNE ÉTOILE'],
    ['GÂCHETTE DROITE', 'LANCER UN ASTÉROÏDE'],
    ['GRIP', 'ATTRAPER UN ASTRE · MAINTENIR : RETOUR'],
    ['CLIC STICK DROIT', 'TAILLE LUNE / SATELLITES'],
  ],
  'LIGHT SHOW': [
    ['BAGUETTES', 'FRAPPER LES FÛTS (BATTERIE VR)'],
    ['GÂCHETTE', 'PÉDALE GROSSE CAISSE (KICK)'],
    ['STICK GAUCHE ↕', 'HAUTEUR DU KIT'],
    ['STICK GAUCHE ↔', 'PROFONDEUR DU KIT'],
    ['CLIC STICK GAUCHE', 'JEU RYTHME (DRUM HERO)'],
    ['CLIC STICK DROIT', 'RAPPROCHER / RECULER LA BATTERIE'],
  ],
};

// Canvas fixe, dimensionné pour le monde qui a le plus de commandes : ainsi le
// plan 3D garde un ratio constant et aucune ligne n'est jamais rognée.
const HELP_W = 1100;
const HELP_TOP = 184; // y de la première ligne de commande
const HELP_ROW = 42; // hauteur d'une rangée
const MAX_LINES = COMMON_HELP.length + Math.max(...Object.values(WORLD_HELP).map((l) => l.length));
const HELP_H = HELP_TOP + MAX_LINES * HELP_ROW + 24;

/** Lignes affichées pour le monde courant (communes + spécifiques). */
function helpLines(): HelpLine[] {
  return [...COMMON_HELP, ...(WORLD_HELP[helpWorldName] ?? [])];
}

function drawHelp(): void {
  if (!helpCanvas) return;
  const c = helpCanvas;
  const ctx = c.getContext('2d')!;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = 'rgba(3, 14, 24, 0.82)';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = 'rgba(46, 230, 255, 0.9)';
  ctx.lineWidth = 4;
  ctx.strokeRect(8, 8, c.width - 16, c.height - 16);
  ctx.fillStyle = 'rgba(46, 230, 255, 0.22)';
  ctx.fillRect(8, 8, c.width - 16, 72);

  ctx.font = 'bold 40px monospace';
  ctx.fillStyle = '#ffc857';
  ctx.fillText('◉ COMMANDES MANETTES', 28, 60);
  ctx.font = 'bold 34px monospace';
  ctx.fillText(`MONDE : ${helpWorldName}`, 28, 130);

  const lines = helpLines();
  ctx.font = '28px monospace';
  // colonne des libellés calée après le bouton le plus large, jamais dessus
  const labelX = 28 + Math.max(...lines.map(([btn]) => ctx.measureText(btn).width)) + 30;
  lines.forEach(([btn, label], i) => {
    const y = HELP_TOP + i * HELP_ROW;
    ctx.fillStyle = '#ffc857';
    ctx.fillText(btn, 28, y);
    ctx.fillStyle = '#2ee6ff';
    ctx.fillText(label, labelX, y);
  });
  if (helpTexture) helpTexture.needsUpdate = true;
}

export function makeHelpPanel(rig: THREE.Group): THREE.Mesh {
  if (!helpCanvas) {
    helpCanvas = document.createElement('canvas');
    helpCanvas.width = HELP_W;
    helpCanvas.height = HELP_H;
    helpTexture = new THREE.CanvasTexture(helpCanvas);
    helpTexture.colorSpace = THREE.SRGBColorSpace;
    drawHelp();
  }
  const panel = new THREE.Mesh(
    // hauteur dérivée du ratio du canvas pour ne pas déformer le texte
    new THREE.PlaneGeometry(1.45, (1.45 * HELP_H) / HELP_W),
    new THREE.MeshBasicMaterial({
      map: helpTexture!,
      transparent: true,
      depthTest: false,
    }),
  );
  panel.renderOrder = 1000;
  panel.visible = false;
  rig.add(panel);
  return panel;
}

export function updateHelpPanel(rig: THREE.Group): void {
  const panel = rig.userData.helpPanel as THREE.Mesh;
  if (helpHideAt && performance.now() > helpHideAt) {
    helpVisible = false;
    helpHideAt = 0;
  }
  panel.visible = helpVisible;
  if (!helpVisible) return;
  // verrouillé devant la tête, légèrement sous le regard
  const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(xrHandState.headQuat);
  panel.position.copy(xrHandState.head).addScaledVector(fwd, 1.6);
  panel.position.y -= 0.12;
  panel.quaternion.copy(xrHandState.headQuat);
}

/** Bascule l'aide (boutons X/Y de la manette gauche). */
export function toggleVRHelp(): void {
  helpVisible = !helpVisible;
  helpHideAt = 0;
}

/** Affiche l'aide, avec auto-masquage optionnel (démo au lancement, switch). */
export function showVRHelp(durationMs = 0): void {
  helpVisible = true;
  helpHideAt = durationMs ? performance.now() + durationMs : 0;
}

/** Met à jour le nom du monde affiché sur le panneau d'aide VR. */
export function setVRWorldName(name: string): void {
  helpWorldName = name;
  drawHelp();
}
