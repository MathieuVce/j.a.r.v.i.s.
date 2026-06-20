import * as THREE from 'three';

// Constantes de réglage du monde Univers (navigation, Lune, prise en main
// VR, panneaux). Extraites de Universe.ts pour regrouper le tuning.

export const ROT_SPEED = 0.035; // rad/frame à vitesse joystick max
export const MIN_RADIUS = 4;
export const MAX_RADIUS = 220;

/** Axe « avant » des engins (nez cuit vers +Z) — pour les orienter en vol. */
export const FORWARD = new THREE.Vector3(0, 0, 1);
/** Orientation neutre (réutilisée pour remettre le tracé d'orbite à plat). */
export const IDENTITY_QUAT = new THREE.Quaternion();
/** Durée de maintien de la prise pour rentrer au système solaire (hors-site). */
export const RETURN_HOLD = 1.0;

/** Lancer d'étoiles / astéroïdes (gâchette en VR) : vitesse, distance
 *  d'apparition devant la main, portée et durée de vie avant disparition. */
export const PROJECTILE_SPEED = 70;
export const PROJECTILE_START = 0.2;
export const PROJECTILE_RANGE = 600;
export const PROJECTILE_LIFE = 12;

// Lune : échelle stylisée (rapport rayon Lune/Terre ≈ 0.27 respecté), orbite
// resserrée pour rester lisible, inclinée comme l'orbite réelle (~5°).
export const MOON_R = 0.27;
export const MOON_DIST = 2.6;
export const MOON_SPEED = 0.35; // rad/s — un cycle complet en ~18 s
export const MOON_INCL = 0.09; // ~5,1° d'inclinaison orbitale

/** Rayon apparent (en m) d'une planète tenue en main en VR — assez petite
 *  pour tenir dans le creux de la main, pas dans le visage. */
export const HOLD_RADIUS = 0.12;
export const VR_THROW_GAIN = 14;
/** Glissement de la planète vers la main (plus bas = plus doux) et vitesse de
 *  mise à l'échelle quand elle rapetisse dans la paume — réglés pour une
 *  transition douce à la saisie plutôt qu'un « pop » instantané. */
export const HOLD_LERP = 0.22;
export const SCALE_LERP = 3.5;

// Panneau de données : on vise une taille apparente ~constante quel que soit
// l'éloignement. L'échelle monde croît donc avec la distance à la caméra :
// de près (ou tenu en main) le panneau rapetisse au lieu d'envahir le regard,
// de loin il reste lisible. Aspect calé sur le canvas (512×288).
export const PANEL_ASPECT = 288 / 512;
export const PANEL_VIEW = 0.34; // largeur apparente = largeur monde / distance
export const PANEL_MIN_W = 0.22; // planète tenue tout près des yeux
export const PANEL_MAX_W = 11; // planète lointaine
