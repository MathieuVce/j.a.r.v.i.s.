import type { GestureState } from '../input/gestures';
import type { HudContext } from '../screens/hud';

/** Effets sonores ponctuels qu'un monde peut demander sur une frame. */
export type AudioCue = 'blip' | 'lock' | 'release';

/** Infos qu'un monde renvoie chaque frame pour piloter le HUD et l'audio. */
export interface WorldFrame {
  hudContext: HudContext;
  /** Texte d'état affiché (null = libellé par défaut selon le mode). */
  hudLabel?: string | null;
  /** Bulle de charge autour du curseur, 0..1. */
  charge?: number;
  /** Souffle audio propre au monde (ajouté au souffle commun mouvement/zoom). */
  whoosh?: number;
  /** Sons ponctuels à jouer cette frame. */
  cues?: AudioCue[];
}

/**
 * Monde affichable : même contrat pour l'univers, la carte/ville et le light
 * show. main.ts les pilote uniformément via un registre — ajouter un monde =
 * implémenter cette interface et l'enregistrer.
 */
export interface World {
  /** Applique les gestes et avance la logique ; renvoie les infos HUD/audio. */
  update(state: GestureState, dt: number): WorldFrame;
  render(dt: number): void;
  resize(w: number, h: number): void;
  /** Quitté (sortie VR / changement de monde) : libère timers/sessions. */
  deactivate?(): void;
}
