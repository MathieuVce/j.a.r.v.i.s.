/** Petites fonctions mathématiques partagées (navigation, animations). */

export function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

/** Accélération/décélération cubique douce, t ∈ [0,1]. */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Joystick virtuel à partir d'un curseur écran-normalisé [0..1] : zone morte
 * circulaire au centre, puis réponse quadratique jusqu'à la vitesse max en bord
 * de zone. Renvoie chaque axe dans [-1, 1]. Réponse commune à la webcam, au
 * light show et aux manettes VR (mains nues).
 */
export function deadzoneJoystick(
  cursor: { x: number; y: number },
  dead = 0.1,
  range = 0.32,
): { x: number; y: number } {
  const dx = cursor.x - 0.5;
  const dy = cursor.y - 0.5;
  const mag = Math.hypot(dx, dy);
  if (mag <= dead) return { x: 0, y: 0 };
  const eff = Math.min(1, (mag - dead) / range) ** 2;
  return { x: (dx / mag) * eff, y: (dy / mag) * eff };
}
