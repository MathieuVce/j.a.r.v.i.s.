import type { Kind } from '../drums';

/**
 * Données du morceau du mode jeu rythme (Guitar Hero batterie).
 * Tout est en « beats » (noires) ; le jeu convertit en secondes via l'horloge
 * audio. La boucle se répète à l'infini tant que le jeu tourne.
 */

export const BPM = 90; // tempo posé, confortable à jouer
export const LOOP_BEATS = 16; // 4 mesures de 4/4

export interface Lane {
  kind: Kind; // fût à frapper pour cette voie
  color: number; // couleur néon (calquée sur la palette des fûts, drums.ts)
  label: string;
}

/** 5 voies classiques, de gauche à droite face au joueur. Couleurs UNIQUES,
 *  identiques aux fûts correspondants (drums.ts). */
export const LANES: Lane[] = [
  { kind: 'kick', color: 0x3dff9b, label: 'KICK' }, // vert
  { kind: 'snare', color: 0x2ee6ff, label: 'SNARE' }, // cyan
  { kind: 'hat', color: 0xffe14d, label: 'HAT' }, // jaune
  { kind: 'tom', color: 0xff2ea6, label: 'TOM' }, // magenta
  { kind: 'crash', color: 0xff3b3b, label: 'CRASH' }, // rouge
];

/** Frappe d'un fût → index de voie (les fûts hors voie, floor/ride, sont ignorés). */
export const LANE_OF: Partial<Record<Kind, number>> = Object.fromEntries(
  LANES.map((l, i) => [l.kind, i]),
);

export interface Note {
  beat: number; // position dans la boucle, en beats (0 .. LOOP_BEATS)
  lane: number;
}

/** Groove simple et aéré de 4 mesures, pensé pour être jouable à deux mains :
 *  kick 1&3, snare 2&4, charley à la noire. Jamais plus de 2 voies en même
 *  temps (une par main), et un seul fût percussif par temps en dehors du
 *  charley qui marque la pulsation. Crash en tête de phrase à la place du
 *  charley (pas de superposition), petit fill de toms aéré en fin de boucle. */
function buildChart(): Note[] {
  const notes: Note[] = [];
  const add = (beat: number, lane: number) => notes.push({ beat, lane });

  for (let bar = 0; bar < LOOP_BEATS / 4; bar++) {
    const b = bar * 4;
    const lastBar = bar === LOOP_BEATS / 4 - 1;

    // charley à la noire = pulsation régulière (la 2e « couleur » avec le fût)
    for (let q = 0; q < 4; q++) {
      if (lastBar && q >= 2) continue; // on laisse respirer pour le fill
      add(b + q, 2);
    }

    add(b + 0, 0); // kick sur 1
    add(b + 1, 1); // snare sur 2

    if (lastBar) {
      // fill de toms aéré (croches espacées), un seul fût à la fois
      add(b + 2, 3);
      add(b + 3, 3);
      add(b + 3.5, 1); // snare de relance avant la reprise
    } else {
      add(b + 2, 0); // kick sur 3
      add(b + 3, 1); // snare sur 4
    }
  }

  // crash en tête de phrase, à la place du charley du temps 1 (max 2 voies)
  notes.splice(
    notes.findIndex((n) => n.beat === 0 && n.lane === 2),
    1,
  );
  add(0, 4); // crash + kick sur le tout premier temps

  return notes.sort((a, b) => a.beat - b.beat);
}

export const NOTES: Note[] = buildChart();
