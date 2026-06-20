import type { GestureState, HandState } from '../input/gestures';

export type WorldKind = 'universe' | 'map' | 'lightshow';
export type HudContext = 'universe' | 'globe' | 'city' | 'lightshow';

export const WORLD_ORDER: WorldKind[] = ['map', 'lightshow', 'universe'];
/** Noms courts pour le panneau d'aide VR. */
export const WORLD_SHORT: Record<WorldKind, string> = {
  map: 'CARTE',
  lightshow: 'LIGHT SHOW',
  universe: 'UNIVERS',
};
const WORLD_NAMES: Record<WorldKind, string> = {
  map: 'MONDE : CARTE',
  lightshow: 'MONDE : LIGHT SHOW',
  universe: 'MONDE : UNIVERS',
};

const LABELS: Record<HudContext, Record<string, string>> = {
  universe: {
    idle: 'STANDBY',
    hover: 'TRACKING',
    orbit: 'NAVIGATION',
    grab: 'TARGET LOCKED',
    zoom: 'ZOOM CONTROL',
    fist: 'STANDBY',
  },
  globe: {
    idle: 'STANDBY',
    hover: 'SCANNING',
    orbit: 'GLOBE ROTATION',
    grab: 'SELECTING',
    zoom: 'ZOOM CONTROL',
    fist: 'STANDBY',
  },
  city: {
    idle: 'STANDBY',
    hover: 'TRACKING',
    orbit: 'ROTATION',
    grab: 'MAP LOCKED · PAN',
    zoom: 'ALTITUDE',
    fist: 'MAINTIENS · RETOUR GLOBE',
  },
  lightshow: {
    idle: 'STANDBY',
    hover: 'TRACKING',
    orbit: 'LIGHT CONTROL',
    grab: 'INTENSITY',
    zoom: 'CAMERA',
    fist: 'PULSE',
  },
};

const HELP: Record<HudContext, string> = {
  universe:
    '✋ EXCENTRÉE = TOURNER · 🤏🤏 ÉCARTER = ZOOM · 🤏 = ATTRAPER · VISER GALAXIE + 🤏 = VOYAGER · HORS SYSTÈME : MAINTENIR 🤏 = RETOUR',
  globe:
    '✋ MAIN OUVERTE EXCENTRÉE = TOURNER (CENTRE = STOP) · 🤏 PINCER UN POINT = PLONGER · 🤏🤏 = ZOOM',
  city: '✋ HAUT/BAS = AVANCER/RECULER · ✋ GAUCHE/DROITE = PIVOTER · 🤏 TIRER = DÉPLACER · 🤏🤏 = ALTITUDE · ✊ = RETOUR GLOBE',
  lightshow:
    '✋ = LUMIÈRE (Z = DISTANCE MAIN) · ✋✋ 2E MAIN = CAMÉRA · 🤏 = INTENSITÉ/FLASH · ✌️ = PALETTE · 🤟 = FORME+PARTICULES · ✊ = BEAT',
};

const HELP_TOUCH: Record<HudContext, string> = {
  universe:
    '👆 GLISSER = TOURNER · 👆👆 2 DOIGTS = ZOOM · TAP = ATTRAPER · TAP GALAXIE = VOYAGER / RETOUR',
  globe: '👆 GLISSER = TOURNER · TAP SUR UN POINT = PLONGER · 👆👆 2 DOIGTS = ZOOM',
  city: '👆 GLISSER = AVANCER/PIVOTER · 👆👆 2 DOIGTS = ALTITUDE · APPUI LONG = RETOUR GLOBE',
  lightshow: '👆 GLISSER = LUMIÈRE · 👆👆 2 DOIGTS = CAMÉRA · TAP = FLASH · APPUI LONG = BEAT',
};

const IS_TOUCH = window.matchMedia('(pointer: coarse)').matches;

export class HUD {
  private cursor = document.getElementById('cursor')!;
  private cursor2 = document.getElementById('cursor2')!;
  private modeLabel = document.getElementById('mode-label')!;
  private status = document.getElementById('status')!;
  private audioHint = document.getElementById('audio-hint')!;
  private help = document.getElementById('help')!;
  private worldButton = document.getElementById('world-toggle') as HTMLButtonElement;
  private backButton = document.getElementById('globe-back') as HTMLButtonElement;
  private lsPanel = document.getElementById('ls-panel')!;
  private lsNow = document.getElementById('ls-now')!;
  private lsMode = document.getElementById('ls-mode') as HTMLButtonElement;
  private lsPause = document.getElementById('ls-pause') as HTMLButtonElement;

  private world: WorldKind = 'map';
  private context: HudContext = 'globe';
  onWorldToggle: ((world: WorldKind) => void) | null = null;
  onGlobeBack: (() => void) | null = null;
  onLsDemo: (() => void) | null = null;
  onLsTrack: ((url: string, name: string) => void) | null = null;
  onLsFile: ((file: File) => void) | null = null;
  onLsAmbiance: ((key: string) => void) | null = null;
  onLsRhythm: (() => void) | null = null;
  onLsPause: (() => void) | null = null;

  constructor() {
    this.worldButton.addEventListener('click', () => {
      const next = WORLD_ORDER[(WORLD_ORDER.indexOf(this.world) + 1) % WORLD_ORDER.length];
      this.setWorld(next);
      this.onWorldToggle?.(next);
    });
    this.backButton.addEventListener('click', () => this.onGlobeBack?.());

    // panneau Audio Reactor
    document.getElementById('ls-demo')!.addEventListener('click', () => this.onLsDemo?.());
    document.querySelectorAll<HTMLButtonElement>('.ls-track').forEach((btn) => {
      btn.addEventListener('click', () => this.onLsTrack?.(btn.dataset.url!, btn.dataset.name!));
    });
    const fileInput = document.getElementById('ls-file') as HTMLInputElement;
    fileInput.addEventListener('change', () => {
      const f = fileInput.files?.[0];
      if (f) this.onLsFile?.(f);
    });
    document.querySelectorAll<HTMLButtonElement>('#ls-ambs button').forEach((btn) => {
      btn.addEventListener('click', () => {
        document
          .querySelectorAll('#ls-ambs button')
          .forEach((b) => b.classList.toggle('on', b === btn));
        this.onLsAmbiance?.(btn.dataset.amb!);
      });
    });
    this.lsMode.addEventListener('click', () => this.onLsRhythm?.());
    this.lsPause.addEventListener('click', () => this.onLsPause?.());

    this.setWorld('map');
    this.setContext('globe');
  }

  setWorld(world: WorldKind): void {
    this.world = world;
    this.worldButton.textContent = WORLD_NAMES[world];
  }

  setContext(ctx: HudContext): void {
    if (ctx === this.context) return;
    this.context = ctx;
    this.help.textContent = (IS_TOUCH ? HELP_TOUCH : HELP)[ctx];
    this.backButton.classList.toggle('hidden', ctx !== 'city');
    this.lsPanel.classList.toggle('hidden', ctx !== 'lightshow');
  }

  setLsNow(text: string): void {
    this.lsNow.textContent = text;
  }

  setLsRhythm(mode: 'auto' | 'manual'): void {
    this.lsMode.textContent = mode === 'auto' ? 'RYTHME : AUTO' : 'RYTHME : MANUEL ✊';
  }

  setLsPlaying(playing: boolean): void {
    this.lsPause.textContent = playing ? '⏸ PAUSE' : '▶ LECTURE';
  }

  hideAudioHint(): void {
    this.audioHint.classList.add('hidden');
  }

  setStatus(text: string, kind: 'loading' | 'ready' | 'error' = 'loading'): void {
    this.status.textContent = text;
    this.status.className = kind === 'loading' ? '' : kind;
  }

  update(g: GestureState, labelOverride?: string | null, charge = 0): void {
    this.modeLabel.textContent = labelOverride ?? LABELS[this.context][g.mode] ?? 'STANDBY';
    this.placeCursor(this.cursor, g.hands[0]);
    this.placeCursor(this.cursor2, g.hands[1]);

    // bulle de charge autour du curseur (poing maintenu)
    const el = this.cursor.querySelector('.charge') as HTMLElement;
    el.style.transform = `translate(-50%, -50%) scale(${charge})`;
    el.style.opacity = String(charge * 0.9);
  }

  private placeCursor(el: HTMLElement, hand: HandState): void {
    if (!hand.present) {
      el.classList.add('hidden');
      return;
    }
    el.classList.remove('hidden');
    el.classList.toggle('pinch', hand.pinching);
    const x = hand.cursor.x * window.innerWidth;
    const y = hand.cursor.y * window.innerHeight;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }
}
