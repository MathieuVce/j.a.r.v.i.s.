import * as THREE from 'three';
import { HandTracker } from './tracking';
import { GestureEngine } from './gestures';
import { Universe } from './scene';
import { MapWorld } from './globe';
import { LightShowWorld, type AmbianceKey } from './lightshow';
import { MusicEngine } from './music';
import { HUD, type WorldKind } from './hud';
import { AudioEngine } from './audio';

async function main(): Promise<void> {
  const canvas = document.getElementById('scene') as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x02060c, 1);

  const hud = new HUD();
  const universe = new Universe(renderer);
  const map = new MapWorld(renderer, (text, kind) => hud.setStatus(text, kind));
  const show = new LightShowWorld(renderer);
  const music = new MusicEngine();
  const audio = new AudioEngine();

  let world: WorldKind = 'map';
  let rhythm: 'auto' | 'manual' = 'auto';

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    universe.resize(window.innerWidth, window.innerHeight);
    map.resize(window.innerWidth, window.innerHeight);
    show.resize(window.innerWidth, window.innerHeight);
  });

  hud.onWorldToggle = (w) => {
    world = w;
  };
  hud.onGlobeBack = () => map.backToGlobe();

  // --- panneau Audio Reactor ---
  const playSafe = (p: Promise<void>, name: string) => {
    p.then(() => {
      hud.setLsNow(`♪ ${name}`);
      hud.setLsPlaying(true);
    }).catch((err) => {
      console.error(err);
      hud.setLsNow('ERREUR DE LECTURE — RÉESSAIE');
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
  hud.onLsRhythm = () => {
    rhythm = rhythm === 'auto' ? 'manual' : 'auto';
    hud.setLsRhythm(rhythm);
  };
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

  // la scène tourne tout de suite, le tracking arrive quand il est prêt
  let trackingReady = false;
  let prevHovered: string | null = null;
  let prevTransition = false;

  // bulle de charge : poing maintenu ~1,2 s en ville → retour au globe
  let charge = 0;
  let lastTime = performance.now();
  const CHARGE_DURATION = 1.2;

  function loop(): void {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    const result = trackingReady ? tracker.update() : null;
    const state = gestures.update(result);

    const charging =
      world === 'map' && map.state === 'city' && state.primary?.fist === true;
    charge = charging
      ? Math.min(1, charge + dt / CHARGE_DURATION)
      : Math.max(0, charge - dt * 3);
    if (charge >= 1) {
      charge = 0;
      map.backToGlobe();
      audio.lock();
    }

    if (world === 'universe') {
      hud.setContext('universe');
      hud.update(state);
      const wasHovering = universe.isHovering;
      const wasGrabbing = universe.isGrabbing;
      universe.applyGestures(state);
      if (universe.isHovering && !wasHovering) audio.blip();
      if (universe.isGrabbing && !wasGrabbing) audio.lock();
      if (!universe.isGrabbing && wasGrabbing) audio.releaseSound();
      universe.render();
    } else if (world === 'lightshow') {
      hud.setContext('lightshow');
      hud.update(state);
      show.applyGestures(state);
      const frame = rhythm === 'auto' ? music.frame() : show.manualFrame(state, dt);
      show.render(frame);
    } else {
      map.applyGestures(state);
      hud.setContext(map.state === 'city' ? 'city' : 'globe');
      hud.update(
        state,
        map.state === 'globe' && map.hoveredCityName
          ? `TARGET : ${map.hoveredCityName}`
          : map.inTransition
            ? 'DESCENT IN PROGRESS'
            : null,
        charge,
      );
      if (map.hoveredCity && map.hoveredCity !== prevHovered) audio.blip();
      prevHovered = map.hoveredCity;
      if (map.inTransition && !prevTransition) audio.lock();
      prevTransition = map.inTransition;
      map.render();
    }

    // souffle continu proportionnel au mouvement (zoom / joystick / plongée)
    const whoosh = Math.min(
      1,
      Math.abs(state.zoomVelocity) * 8 +
        Math.hypot(state.joystick.x, state.joystick.y) * 0.6 +
        (world === 'map' && map.inTransition ? 0.55 : 0),
    );
    audio.setWhoosh(whoosh);

    requestAnimationFrame(loop);
  }
  loop();

  try {
    hud.setStatus('INITIALIZING OPTICAL SENSORS…');
    await tracker.init();
    trackingReady = true;
    hud.setStatus('ALL SYSTEMS OPERATIONAL', 'ready');
  } catch (err) {
    console.error(err);
    hud.setStatus('CAMERA ACCESS DENIED — AUTORISE LA WEBCAM PUIS RECHARGE', 'error');
  }
}

main();
