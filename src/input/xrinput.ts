import * as THREE from 'three';
import type { GestureState, HandState, Mode } from './gestures';
import { xrHandState, toggleVRHelp } from '../vr';

/**
 * Entrées VR : hand-tracking natif du casque ET manettes, fusionnés dans le
 * même GestureState que la webcam et le tactile — les mondes ne voient pas
 * la différence.
 *
 * Mains nues (façon Iron Man) :
 *  - 🤏 pince pouce/index   → attraper une planète, plonger sur une ville
 *  - 🤏🤏 deux pinces        → écarter/rapprocher = zoom dans l'espace
 *  - ✋ paume ouverte        → joystick : la main excentrée déplace/tourne
 *  - ✊ poing                → charge retour globe / beat
 *
 * Manettes :
 *  - grip (côté) = attraper / saisir (poing fermé naturel) · gâchette (avant) =
 *    dans la CARTE, zoom à deux mains (tenir les deux et écarter/rapprocher) ;
 *    dans l'UNIVERS, lancer une étoile / un astéroïde dans la direction visée ;
 *    tenue seule = poing-action · A/B = monde suivant/précédent · X/Y = aide ·
 *    stick gauche = orienter la caméra · stick droit = avancer/reculer (tenir
 *    incliné monte la vitesse) · clic du stick droit = taille des satellites
 *
 * Le « curseur » : pour une main nue c'est sa projection dans le regard ;
 * pour une manette c'est le point visé par son rayon (laser), comme dans la
 * plupart des interfaces VR.
 */

const PINCH_ON = 0.025; // m entre pouce et index — pince fermée…
const PINCH_OFF = 0.045; // …et rouverte au-delà (hystérésis)
const FIST_MAX = 0.09; // majeur-poignet sous 9 cm = poing
const OPEN_MIN = 0.13; // majeur-poignet au-delà de 13 cm = paume ouverte
const ZOOM_GAIN = 1.1;
const ZOOM_MAX = 0.08; // même borne anti-pic que les autres moteurs
const JOY_DEADZONE = 0.1;
const JOY_RANGE = 0.32;
const STICK_DEADZONE = 0.15;
const STICK_RAMP_TIME = 2.2; // s de stick maintenu pour atteindre la pleine vitesse
const STICK_MIN_MULT = 0.22; // fraction de la vitesse max au premier contact
const STICK_ZOOM = 0.014; // vitesse d'avance/recul (échelle log/frame) à fond
const PROJ = 0.7; // focale virtuelle de la projection main → curseur
const SMOOTHING = 0.5;

function emptyHand(): HandState {
  return {
    present: false,
    cursor: { x: 0.5, y: 0.5 },
    pinching: false,
    pinchStrength: 0,
    openPalm: false,
    fist: false,
    fingersUp: 0,
    victory: false,
    threeFingers: false,
    depth: 0.15,
  };
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

export class XRInputEngine {
  private prevPinch = [false, false];
  private prevPinchDist: number | null = null;
  private prevGrabbing = false;
  private prevStickClick = false; // front montant du clic stick droit
  private prevTrigger = [false, false]; // front montant des gâchettes (lancer)
  private prevCursor: ({ x: number; y: number } | null)[] = [null, null];
  // boutons A/B/X/Y : détection de front montant, par slot puis par bouton
  private prevButtons: [boolean, boolean][] = [
    [false, false],
    [false, false],
  ];
  // accélération progressive des sticks (0 → 1 tant qu'on les maintient)
  private rotRamp = 0;
  private zoomRamp = 0;
  private lastTime = 0;

  update(renderer: THREE.WebGLRenderer): GestureState {
    const hands: [HandState, HandState] = [emptyHand(), emptyHand()];
    const positions: (THREE.Vector3 | null)[] = [null, null];
    const wristPositions: (THREE.Vector3 | null)[] = [null, null];
    const quats: (THREE.Quaternion | null)[] = [null, null];
    const rays: ({ pos: THREE.Vector3; quat: THREE.Quaternion } | null)[] = [null, null];
    const gpads: (Gamepad | null)[] = [null, null];
    let joystick = { x: 0, y: 0 };
    let zoomVelocity = 0;
    let leftStick: { x: number; y: number } | null = null;
    let rightStick: { x: number; y: number } | null = null;
    let worldNext = false;
    let worldPrev = false;
    let rightStickClick = false;
    let fireLeft = false;
    let fireRight = false;
    // « prêt à zoomer » par main : pince (mains nues) ou gâchette avant (manette).
    // Le zoom bi-manuel se déclenche quand les deux mains le sont.
    const zoomReady = [false, false];
    // ce slot tient-il une gâchette de manette ? (sert à isoler le zoom manette)
    const zoomTrigger = [false, false];

    const now = performance.now();
    const dt = this.lastTime ? Math.min((now - this.lastTime) / 1000, 0.05) : 0.016;
    this.lastTime = now;

    const session = renderer.xr.getSession();
    const frame = renderer.xr.getFrame();
    const ref = renderer.xr.getReferenceSpace();
    const viewer = session && frame && ref ? frame.getViewerPose(ref) : null;

    if (session && frame && ref && viewer) {
      const headInv = new THREE.Matrix4().fromArray(viewer.transform.matrix).invert();
      xrHandState.head.set(
        viewer.transform.position.x,
        viewer.transform.position.y,
        viewer.transform.position.z,
      );
      const ho = viewer.transform.orientation;
      xrHandState.headQuat.set(ho.x, ho.y, ho.z, ho.w);

      for (const source of session.inputSources) {
        // droite → slot 0 (main principale), gauche → slot 1, comme la webcam
        let slot = source.handedness === 'left' ? 1 : 0;
        if (hands[slot].present) slot = slot === 0 ? 1 : 0;
        if (hands[slot].present) continue;
        const h = hands[slot];
        let pos: THREE.Vector3 | null = null;

        if (source.hand) {
          // --- main nue : articulations du hand-tracking ---
          const joint = (name: string): THREE.Vector3 | null => {
            const space = source.hand!.get(name as XRHandJoint);
            const pose = space ? frame.getJointPose?.(space, ref) : undefined;
            return pose
              ? new THREE.Vector3(
                  pose.transform.position.x,
                  pose.transform.position.y,
                  pose.transform.position.z,
                )
              : null;
          };
          const thumb = joint('thumb-tip');
          const index = joint('index-finger-tip');
          const middle = joint('middle-finger-tip');
          // le poignet donne aussi l'orientation (axe -Z vers les doigts),
          // utilisée par la batterie VR pour orienter les baguettes
          const wristSpace = source.hand.get('wrist' as XRHandJoint);
          const wristPose = wristSpace ? frame.getJointPose?.(wristSpace, ref) : undefined;
          const wrist = wristPose
            ? new THREE.Vector3(
                wristPose.transform.position.x,
                wristPose.transform.position.y,
                wristPose.transform.position.z,
              )
            : null;
          if (wristPose) {
            const o = wristPose.transform.orientation;
            quats[slot] = new THREE.Quaternion(o.x, o.y, o.z, o.w);
          }
          if (wrist) wristPositions[slot] = wrist.clone();
          if (thumb && index) {
            const d = thumb.distanceTo(index);
            h.pinchStrength = clamp(1 - (d - PINCH_ON) / (PINCH_OFF - PINCH_ON), 0, 1);
            h.pinching = this.prevPinch[slot] ? d < PINCH_OFF : d < PINCH_ON;
            // mains nues : la pince sert à la fois à saisir et à zoomer
            zoomReady[slot] = h.pinching;
            pos = thumb.add(index).multiplyScalar(0.5);
          }
          if (middle && wrist) {
            const ext = middle.distanceTo(wrist);
            h.fist = ext < FIST_MAX && !h.pinching;
            h.openPalm = ext > OPEN_MIN && !h.pinching;
          }
        } else if (source.gripSpace || source.targetRaySpace) {
          // --- manette : grip (côté) = fermer le poing pour attraper,
          //     gâchette (avant) = poing-action, sticks = navigation ---
          // gripSpace (poignée) pour la position physique — baguettes, lancer ;
          // targetRaySpace (rayon de visée) pour pointer, comme un laser
          const gripPose = source.gripSpace ? frame.getPose(source.gripSpace, ref) : null;
          const rayPose = source.targetRaySpace ? frame.getPose(source.targetRaySpace, ref) : null;
          const pose = gripPose ?? rayPose;
          if (pose) {
            pos = new THREE.Vector3(
              pose.transform.position.x,
              pose.transform.position.y,
              pose.transform.position.z,
            );
            const o = pose.transform.orientation;
            quats[slot] = new THREE.Quaternion(o.x, o.y, o.z, o.w);
          }
          if (rayPose) {
            const o = rayPose.transform.orientation;
            rays[slot] = {
              pos: new THREE.Vector3(
                rayPose.transform.position.x,
                rayPose.transform.position.y,
                rayPose.transform.position.z,
              ),
              quat: new THREE.Quaternion(o.x, o.y, o.z, o.w),
            };
          }
          const gp = source.gamepad;
          if (gp) {
            gpads[slot] = gp;
            const trigger = gp.buttons[0]?.value ?? 0; // gâchette avant
            const squeeze = gp.buttons[1]?.value ?? 0; // grip latéral
            // attraper = fermer le poing avec le grip latéral (geste naturel
            // de saisie). Hystérésis pour ne pas relâcher au moindre tremblement.
            h.pinchStrength = squeeze;
            h.pinching = this.prevPinch[slot] ? squeeze > 0.35 : squeeze > 0.65;
            // gâchette avant : zoom à deux mains (tenir les deux et écarter /
            // rapprocher) ET, en impulsion, lancer une étoile / un astéroïde
            // dans l'Univers (qui neutralise alors le zoom gâchette via
            // triggerZoom). Tenue seule elle vaut aussi « poing » (retour globe
            // en ville, beat de la batterie).
            const triggerDown = trigger > 0.5;
            zoomReady[slot] = triggerDown;
            zoomTrigger[slot] = triggerDown;
            if (triggerDown && !this.prevTrigger[slot]) {
              if (source.handedness === 'left') fireLeft = true;
              else fireRight = true;
            }
            this.prevTrigger[slot] = triggerDown;
            h.fist = !h.pinching && trigger > 0.7;
            const ax = gp.axes[2] ?? 0; // mapping xr-standard
            const ay = gp.axes[3] ?? 0;
            if (source.handedness === 'left') leftStick = { x: ax, y: ay };
            else rightStick = { x: ax, y: ay };

            // clic du stick droit (bouton 3 manette droite) : bascule la taille
            // des satellites/Lune quand on tient la Terre en main
            if (source.handedness !== 'left') {
              const click = gp.buttons[3]?.pressed === true;
              if (click && !this.prevStickClick) rightStickClick = true;
              this.prevStickClick = click;
            }

            // boutons hauts : A/B (droite) changent de monde, X/Y (gauche)
            // affichent/masquent l'aide
            const btnA = gp.buttons[4]?.pressed === true;
            const btnB = gp.buttons[5]?.pressed === true;
            const [pA, pB] = this.prevButtons[slot];
            if (source.handedness === 'left') {
              if ((btnA && !pA) || (btnB && !pB)) toggleVRHelp();
            } else {
              if (btnA && !pA) worldNext = true;
              if (btnB && !pB) worldPrev = true;
            }
            this.prevButtons[slot] = [btnA, btnB];
          }
        }
        this.prevPinch[slot] = h.pinching;
        if (!pos) continue;

        h.present = true;
        h.xrPos = { x: pos.x, y: pos.y, z: pos.z };
        positions[slot] = pos;

        const prev = this.prevCursor[slot];
        const ray = rays[slot];
        if (ray) {
          // manette : le curseur est le point visé par le rayon (laser) —
          // on projette la direction de visée dans le repère de la tête
          const dirLocal = new THREE.Vector3(0, 0, -1)
            .applyQuaternion(ray.quat)
            .transformDirection(headInv);
          if (dirLocal.z < -0.15) {
            const rawX = clamp(0.5 + (dirLocal.x / -dirLocal.z) * PROJ, 0, 1);
            const rawY = clamp(0.5 - (dirLocal.y / -dirLocal.z) * PROJ, 0, 1);
            h.cursor.x = prev ? prev.x + (rawX - prev.x) * SMOOTHING : rawX;
            h.cursor.y = prev ? prev.y + (rawY - prev.y) * SMOOTHING : rawY;
          } else if (prev) {
            h.cursor.x = prev.x;
            h.cursor.y = prev.y;
          }
        } else {
          // projection main → curseur, indépendante de l'orientation de la
          // tête : on prend l'écart main↔tête dans l'espace de référence (axes
          // monde, -Z = avant initial), sans appliquer la rotation du casque.
          // Ainsi tourner la tête pour « regarder autour » ne déplace plus le
          // curseur ni l'univers — seul le mouvement de la main compte.
          const local = pos.clone().sub(xrHandState.head);
          if (local.z < -0.08) {
            const rawX = clamp(0.5 + (local.x / -local.z) * PROJ, 0, 1);
            const rawY = clamp(0.5 - (local.y / -local.z) * PROJ, 0, 1);
            h.cursor.x = prev ? prev.x + (rawX - prev.x) * SMOOTHING : rawX;
            h.cursor.y = prev ? prev.y + (rawY - prev.y) * SMOOTHING : rawY;
          } else if (prev) {
            h.cursor.x = prev.x;
            h.cursor.y = prev.y;
          }
        }
        this.prevCursor[slot] = { x: h.cursor.x, y: h.cursor.y };
        // main proche du visage = profondeur forte (lumière du light show)
        const local = pos.clone().applyMatrix4(headInv);
        h.depth = clamp(0.32 - local.length() * 0.35, 0.06, 0.3);
        h.fingersUp = h.openPalm ? 4 : h.fist ? 0 : 2;
      }
    }

    // partage avec vr.ts/drums.ts : marqueurs de mains, lasers et baguettes
    xrHandState.pos = positions;
    xrHandState.quat = quats;
    xrHandState.wristPos = wristPositions;
    xrHandState.pinchStrength = [hands[0].pinchStrength, hands[1].pinchStrength];
    xrHandState.fist = [hands[0].fist, hands[1].fist];
    xrHandState.rays = rays;
    // le monde actif posera la distance de l'objet visé pendant applyGestures
    xrHandState.rayHit = [null, null];
    xrHandState.gamepads = gpads;
    xrHandState.pinch = [hands[0].pinching, hands[1].pinching];

    const present = hands.filter((h) => h.present);
    const primary = present[0] ?? null;

    // --- zoom bi-manuel : distance 3D réelle entre les deux mains, quand les
    //     deux sont « prêtes à zoomer » (pince mains nues / gâchette manette) ---
    const twoZoom =
      hands[0].present &&
      hands[1].present &&
      zoomReady[0] &&
      zoomReady[1] &&
      positions[0] !== null &&
      positions[1] !== null;
    // part du zoom imputable aux deux gâchettes (manette) : l'Univers la retire
    // pour réserver les gâchettes au lancer ; les autres mondes l'ignorent
    let triggerZoom = 0;
    if (twoZoom) {
      const d = Math.max(1e-4, positions[0]!.distanceTo(positions[1]!));
      if (this.prevPinchDist !== null) {
        // écarter les mains (d augmente) → valeur négative → on se rapproche
        zoomVelocity = clamp(-Math.log(d / this.prevPinchDist) * ZOOM_GAIN, -ZOOM_MAX, ZOOM_MAX);
        if (zoomTrigger[0] && zoomTrigger[1]) triggerZoom = zoomVelocity;
      }
      this.prevPinchDist = d;
    } else {
      this.prevPinchDist = null;
    }

    // --- sticks : vitesse progressive (douce au départ, max si maintenu) ---
    const rotActive = leftStick !== null && Math.hypot(leftStick.x, leftStick.y) > STICK_DEADZONE;
    this.rotRamp = rotActive
      ? Math.min(1, this.rotRamp + dt / STICK_RAMP_TIME)
      : Math.max(0, this.rotRamp - dt * 3);

    const zoomActive = rightStick !== null && Math.abs(rightStick.y) > STICK_DEADZONE;
    this.zoomRamp = zoomActive
      ? Math.min(1, this.zoomRamp + dt / STICK_RAMP_TIME)
      : Math.max(0, this.zoomRamp - dt * 3);

    // stick droit : avancer/reculer (pousser = avancer), cumulable avec la
    // pince bi-manuelle
    if (zoomActive) {
      const mult = STICK_MIN_MULT + (1 - STICK_MIN_MULT) * this.zoomRamp;
      zoomVelocity = clamp(zoomVelocity + rightStick!.y * STICK_ZOOM * mult, -ZOOM_MAX, ZOOM_MAX);
    }

    // --- mode (mêmes priorités que le moteur webcam) ---
    let mode: Mode = 'idle';
    if (twoZoom) mode = 'zoom';
    else if (primary?.pinching) mode = 'grab';
    else if (rotActive) mode = 'orbit';
    else if (primary?.openPalm) mode = 'orbit';
    else if (primary?.fist) mode = 'fist';
    else if (primary) mode = 'hover';

    if (mode === 'orbit') {
      if (rotActive) {
        // stick gauche : oriente la caméra, la vitesse monte s'il est maintenu
        const mult = STICK_MIN_MULT + (1 - STICK_MIN_MULT) * this.rotRamp;
        joystick = { x: leftStick!.x * mult, y: leftStick!.y * mult };
      } else if (primary) {
        const dx = primary.cursor.x - 0.5;
        const dy = primary.cursor.y - 0.5;
        const mag = Math.hypot(dx, dy);
        if (mag > JOY_DEADZONE) {
          const eff = Math.min(1, (mag - JOY_DEADZONE) / JOY_RANGE) ** 2;
          joystick.x = (dx / mag) * eff;
          joystick.y = (dy / mag) * eff;
        }
      }
    }

    const grabbing = mode === 'grab';
    const grabStart = grabbing && !this.prevGrabbing;
    const grabEnd = !grabbing && this.prevGrabbing;
    this.prevGrabbing = grabbing;

    return {
      hands,
      primary,
      mode,
      joystick,
      zoomVelocity,
      // sticks bruts exposés en plus du joystick fusionné : la vue rue les
      // mappe séparément (stick gauche = pivot + avancer, stick droit = zoom)
      leftStick,
      rightStick,
      grabStart,
      grabEnd,
      worldNext,
      worldPrev,
      rightStickClick,
      fireLeft,
      fireRight,
      triggerZoom,
    };
  }
}
