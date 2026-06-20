import * as THREE from 'three';
import { HandTracker } from './input/tracking';
import { GestureEngine } from './input/gestures';
import { Universe } from './worlds/universe';
import { MapWorld } from './worlds/map/globe';
import { LightShowWorld, type AmbianceKey } from './worlds/lightshow/lightshow';
import { MusicEngine } from './audio/music';
import { HUD, WORLD_ORDER, WORLD_SHORT, type WorldKind } from './screens/hud';
import { AudioEngine } from './audio/audio';
import { TouchEngine } from './input/touch';
import { setupVR, setVRWorldName, showVRHelp } from './vr';
import { XRInputEngine } from './input/xrinput';
import type { World, AudioCue } from './utils/world';

async function main(): Promise<void> {
  const canvas = document.getElementById('scene') as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  const isMobile = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x02060c, 1);
  renderer.xr.enabled = true;

  const hud = new HUD();
  const universe = new Universe(renderer);
  const map = new MapWorld(renderer, (text, kind) => hud.setStatus(text, kind));
  const music = new MusicEngine();
  // la batterie VR et le mode jeu rythme passent par le moteur musique
  const show = new LightShowWorld(renderer, music);
  const audio = new AudioEngine();

  // registre des mondes : main les pilote uniformément via l'interface World
  const worlds: Record<WorldKind, World> = { map, lightshow: show, universe };
  let world: WorldKind = 'map';

  /** Change de monde en libérant proprement le monde quitté. */
  const goToWorld = (next: WorldKind): void => {
    if (next === world) return;
    worlds[world].deactivate?.();
    world = next;
  };

  const onResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    universe.resize(w, h);
    map.resize(w, h);
    show.resize(w, h);
  };
  window.addEventListener('resize', onResize);
  // sur iOS, innerWidth/innerHeight ne sont pas encore à jour au moment de l'événement
  window.addEventListener('orientationchange', () => setTimeout(onResize, 300));
  window.visualViewport?.addEventListener('resize', onResize);

  hud.onWorldToggle = (w) => {
    goToWorld(w);
    setVRWorldName(WORLD_SHORT[w]);
  };
  hud.onGlobeBack = () => map.backToGlobe();

  // boutons A/B des manettes : monde suivant/précédent, en pleine VR
  const cycleWorld = (dir: 1 | -1) => {
    const i = WORLD_ORDER.indexOf(world);
    goToWorld(WORLD_ORDER[(i + dir + WORLD_ORDER.length) % WORLD_ORDER.length]);
    hud.setWorld(world);
    setVRWorldName(WORLD_SHORT[world]);
    showVRHelp(2600); // flash du panneau : on voit où on vient d'arriver
    audio.blip();
  };

  setupVR(renderer, document.getElementById('vr-toggle') as HTMLButtonElement, (msg) =>
    hud.setStatus(msg, 'error'),
  );

  // --- panneau Audio Reactor ---
  const playSafe = (p: Promise<void>, name: string) => {
    p.then(() => {
      hud.setLsNow(`♪ ${name}`);
      hud.setLsPlaying(true);
    }).catch((err) => {
      console.error(err);
      hud.setLsNow('ERREUR DE LECTURE · RÉESSAIE');
      hud.setLsPlaying(false);
    });
  };
  hud.onLsDemo = () => {
    music.playDemo();
    hud.setLsNow('♪ SYNTH DEMO 120 BPM');
    hud.setLsPlaying(true);
  };
  hud.onLsTrack = (url, name) => {
    hud.setLsNow('CHARGEMENT…');
    playSafe(music.playUrl(url, name), name);
  };
  hud.onLsFile = (file) => playSafe(music.playFile(file), file.name.toUpperCase());
  hud.onLsAmbiance = (key) => show.setAmbiance(key as AmbianceKey);
  hud.onLsRhythm = () => hud.setLsRhythm(show.toggleRhythmMode());
  hud.onLsPause = () => hud.setLsPlaying(music.togglePlay());

  // l'AudioContext exige un geste utilisateur
  const enableAudio = () => {
    audio.init();
    hud.hideAudioHint();
  };
  window.addEventListener('pointerdown', enableAudio);
  window.addEventListener('keydown', enableAudio);

  const video = document.getElementById('video') as HTMLVideoElement;
  const debug = document.getElementById('debug') as HTMLCanvasElement;
  const tracker = new HandTracker(video, debug);
  const gestures = new GestureEngine();
  const touch = new TouchEngine(canvas);
  const xrInput = new XRInputEngine();

  // la scène tourne tout de suite, le tracking arrive quand il est prêt
  let trackingReady = false;
  let lastTime = performance.now();

  const playCue = (cue: AudioCue): void => {
    if (cue === 'blip') audio.blip();
    else if (cue === 'lock') audio.lock();
    else audio.releaseSound();
  };

  function loop(): void {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    // en VR : mains du casque + manettes · sinon tactile s'il est actif,
    // sinon le tracking webcam
    const state = renderer.xr.isPresenting
      ? xrInput.update(renderer)
      : touch.active
        ? touch.update()
        : gestures.update(trackingReady ? tracker.update() : null);

    // A/B changent de monde — sauf en mode Spider-Man (A = saut, B réservé)
    if (!map.spiderActive) {
      if (state.worldNext) cycleWorld(1);
      else if (state.worldPrev) cycleWorld(-1);
    }

    // pilotage uniforme du monde courant via l'interface World
    const w = worlds[world];
    const info = w.update(state, dt);
    hud.setContext(info.hudContext);
    hud.update(state, info.hudLabel ?? null, info.charge ?? 0);
    for (const cue of info.cues ?? []) playCue(cue);
    w.render(dt);

    // souffle continu : base commune (mouvement / zoom) + apport du monde
    const base =
      Math.abs(state.zoomVelocity) * 8 + Math.hypot(state.joystick.x, state.joystick.y) * 0.6;
    audio.setWhoosh(Math.min(1, base + (info.whoosh ?? 0)));
  }
  // setAnimationLoop (et non requestAnimationFrame) : indispensable en WebXR,
  // c'est la session du casque qui cadence les frames pendant la VR
  renderer.setAnimationLoop(loop);

  try {
    hud.setStatus('INITIALIZING OPTICAL SENSORS…');
    await tracker.init();
    trackingReady = true;
    hud.setStatus('ALL SYSTEMS OPERATIONAL', 'ready');
  } catch (err) {
    console.error(err);
    hud.setStatus('CAMERA ACCESS DENIED · AUTORISE LA WEBCAM PUIS RECHARGE', 'error');
  }
}

main();
