import * as THREE from 'three';
import type { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import type { GestureState } from '../../input/gestures';
import { xrRender, xrHandState, aimRaycaster } from '../../vr';
import { makeBloomComposer } from '../../utils/composer';
import { easeInOutCubic } from '../../utils/math';
import { CYAN } from '../../utils/palette';
import type { World, WorldFrame, AudioCue } from '../../utils/world';
import { SOLAR_SYSTEM, makeMoonMaterial } from '../../components/planets';
import {
  makeGalaxy,
  makeBlackHole,
  makeMilkyWay,
  makeStarClusters,
  makeSpaceEnvironment,
  makeWarpField,
  type Animated,
  type WarpField,
} from '../../components/cosmos';
import {
  type Comet,
  universeGlow,
  makePanel,
  makeComet,
  makeProjectile,
  buildSun,
  SUN_RADIUS,
  buildStarfield,
  buildAsteroidBelt,
  buildGrids,
  buildNebulae,
} from './build';
import {
  ROT_SPEED,
  MIN_RADIUS,
  MAX_RADIUS,
  FORWARD,
  IDENTITY_QUAT,
  RETURN_HOLD,
  MOON_R,
  MOON_DIST,
  MOON_SPEED,
  MOON_INCL,
  HOLD_RADIUS,
  VR_THROW_GAIN,
  PROJECTILE_SPEED,
  PROJECTILE_START,
  PROJECTILE_RANGE,
  PROJECTILE_LIFE,
  HOLD_LERP,
  SCALE_LERP,
  PANEL_ASPECT,
  PANEL_VIEW,
  PANEL_MIN_W,
  PANEL_MAX_W,
} from './constants';
import type { Planet, Site, Warp, Pulse, Projectile } from './types';
import { addStations } from './stations-setup';
import { buildPlanets } from './planets-setup';

export class Universe implements World {
  private composer: EffectComposer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private raycaster = new THREE.Raycaster();
  private clock = new THREE.Clock();

  private radius = 50;
  private theta = 0.6;
  private phi = 1.25;
  // vitesses lissées pour une navigation fluide avec inertie
  private orbitVel = { x: 0, y: 0 };
  private zoomVel = 0;

  private planets: Planet[] = [];
  private comets: Comet[] = [];
  private pulses: Pulse[] = [];
  private projectiles: Projectile[] = [];
  // une étoile / un astéroïde vient d'être lancé cette frame (→ cue audio)
  private firedThisFrame = false;
  private grabbed: Planet | null = null;
  private grabDistance = 0;
  /** Distance d'inspection vers laquelle l'astre saisi glisse (hors VR) : il
   *  vient se présenter devant nous au lieu de rester à sa distance d'origine. */
  private grabInspectDist = 0;
  private grabPrevPos = new THREE.Vector3();
  private grabVelocity = new THREE.Vector3();
  private hovered: Planet | null = null;
  // tenue en main VR : la planète lévite au-dessus de la pince
  private vrHeld = false;
  private vrHoldScale = 1;
  private holdPrevTarget: THREE.Vector3 | null = null;
  private prevOtherX: number | null = null;
  private holdPrevHandDist: number | null = null;
  // Terre / planète tenue : la Lune + les satellites suivent-ils sa taille de
  // paume (false, défaut) ou restent-ils à leur taille « normale » (clic stick) ?
  private companionsNormalSize = false;
  // retour au système solaire (hors-site) : charge du maintien de la prise
  private returnCharge = 0;
  private prevGestureTime = 0;
  private hintText: string | null = null;
  // rotation imprimée à la planète tenue par la 2e main, cette frame (rad)
  private spinDrag: number | null = null;
  private sun!: THREE.Mesh;
  // le Soleil en tant que Planet attrapable (entrée dédiée dans `planets`)
  private sunBody!: Planet;
  private stars!: THREE.Points;
  private belt!: THREE.InstancedMesh;
  private nebulae: THREE.Sprite[] = [];
  private grid!: THREE.PolarGridHelper;
  // Lune : Planet à part entière (donc attrapable), mais sa cible n'est pas une
  // position fixe — elle suit la Terre sur une orbite calculée chaque frame.
  private earth!: Planet;
  private moon!: Planet;
  private moonAngle = 0;
  private moonOrbit!: THREE.Line;

  // navigation inter-sites : la caméra orbite autour de `center`, qui glisse
  // d'un site à l'autre pendant un saut en vitesse-lumière
  private center = new THREE.Vector3();
  private sites: Site[] = [];
  private currentSite = 0;
  private hoveredSite = -1;
  private warp: Warp | null = null;
  private warpField!: WarpField;
  /** Animations des décors cosmiques (galaxies, trou noir, voie lactée, amas). */
  private cosmicUpdates: Animated['update'][] = [];

  constructor(private renderer: THREE.WebGLRenderer) {
    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      2000, // assez loin pour garder les galaxies / le trou noir dans le champ
    );
    this.scene.fog = new THREE.FogExp2(0x02060c, 0.0022);

    // env map spatiale réfléchie : préparée avant les engins (look « vaisseau »)
    makeSpaceEnvironment(renderer);
    this.buildScene();

    // bloom discret : juste un halo, sans écraser les détails
    this.composer = makeBloomComposer(renderer, this.scene, this.camera, {
      strength: 0.45,
      radius: 0.5,
      threshold: 0.35,
    });
    this.updateCamera();
  }

  // ------------------------------------------------------------------ build

  private buildScene(): void {
    ({ sun: this.sun } = buildSun(this.scene));

    // 8 planètes du système solaire (construction extraite)
    this.planets.push(...buildPlanets(this.scene));

    // la Lune en orbite autour de la Terre
    this.earth = this.planets[SOLAR_SYSTEM.findIndex((s) => s.kind === 'earth')];
    this.buildMoon();

    // décors statiques : ceinture, grilles, nébuleuses, étoiles, comètes
    this.belt = buildAsteroidBelt(this.scene);
    this.grid = buildGrids(this.scene);
    this.nebulae = buildNebulae(this.scene);
    this.stars = buildStarfield(this.scene);
    for (let i = 0; i < 3; i++) this.comets.push(makeComet(this.scene, i * 4));

    // galaxies, trou noir, stations, aurores et champ de saut
    this.buildCosmos();

    // le Soleil est lui aussi attrapable. On l'enregistre EN DERNIER : les
    // lookups par index ci-dessus (Terre, Mars, Jupiter…) restent valides, et
    // son halo + sa lumière (parentés au mesh) le suivent quand on le déplace.
    const sunPanel = makePanel('SOLEIL', [
      'CLASSE ....... NAINE JAUNE (G2V)',
      'RAYON ........ 696 340 KM',
      'SURFACE ...... 5 500 °C',
      'MASSE ........ 99,86 % DU SYSTÈME',
    ]);
    sunPanel.visible = false;
    this.scene.add(sunPanel);
    this.sunBody = {
      mesh: this.sun,
      spin: 0.04, // ex-rotation manuelle du rendu, désormais gérée par la boucle
      spinVel: 0,
      home: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(),
      panel: sunPanel,
      r: SUN_RADIUS,
    };
    this.planets.push(this.sunBody);
  }

  // ---------------------------------------------------------------- cosmos

  /** Construit les décors « espace vivant » et le réseau de destinations. */
  private buildCosmos(): void {
    // sites de navigation : le système solaire (origine) + des galaxies et un
    // trou noir, posés loin et bien espacés (« pas collés »)
    this.addSite('SYSTÈME SOLAIRE', new THREE.Vector3(0, 0, 0), 50, 0xffd28a, 90);

    const galaxies: {
      c: THREE.Vector3;
      name: string;
      opts: Parameters<typeof makeGalaxy>[0];
      r: number;
    }[] = [
      {
        c: new THREE.Vector3(520, 90, -200),
        name: 'GALAXIE ANDROMÈDE',
        r: 150,
        opts: { count: 3400, radius: 120, arms: 5, core: 0xffe6b0, edge: 0x4a7bff, spin: 2.6 },
      },
      {
        c: new THREE.Vector3(-430, -110, 330),
        name: 'GALAXIE DU SOMBRERO',
        r: 140,
        opts: {
          count: 3000,
          radius: 110,
          arms: 2,
          core: 0xffd0a0,
          edge: 0xff5fa8,
          spin: 3.2,
          thickness: 0.07,
        },
      },
      {
        c: new THREE.Vector3(160, -180, 560),
        name: 'GALAXIE DU TOURBILLON',
        r: 150,
        opts: { count: 3200, radius: 118, arms: 4, core: 0xe8f0ff, edge: 0x37ffc4, spin: 2.2 },
      },
    ];
    for (const g of galaxies) {
      const gal = makeGalaxy(g.opts);
      gal.object.position.copy(g.c);
      this.scene.add(gal.object);
      this.cosmicUpdates.push(gal.update);
      this.addSite(g.name, g.c, g.r, (g.opts?.edge as number) ?? 0x4a7bff, 110);
    }

    const bhCenter = new THREE.Vector3(-220, 180, -490);
    const bh = makeBlackHole(6);
    bh.object.position.copy(bhCenter);
    this.scene.add(bh.object);
    this.cosmicUpdates.push(bh.update);
    this.addSite('TROU NOIR · SAGITTARIUS A*', bhCenter, 34, 0xff8a3c, 85);

    // fond de ciel : voie lactée (bande d'étoiles) + beaux amas colorés, qui
    // dérivent et scintillent doucement (univers vivant, en douceur)
    const milky = makeMilkyWay();
    this.scene.add(milky.object);
    this.cosmicUpdates.push(milky.update);
    const clusters = makeStarClusters();
    this.scene.add(clusters.object);
    this.cosmicUpdates.push(clusters.update);

    // stations / satellites / télescope en orbite, + fusées et navettes qui
    // errent dans tout l'univers — tous attrapables à la main
    addStations(this.scene, this.planets, this.earth);

    // champ de stries du saut en vitesse-lumière (piloté pendant le warp)
    this.warpField = makeWarpField();
    this.scene.add(this.warpField.object);
  }

  /** Ajoute une destination + sa balise lumineuse (visible à travers le brouillard). */
  private addSite(
    name: string,
    center: THREE.Vector3,
    radius: number,
    color: number,
    beaconSize: number,
  ): void {
    const beacon = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: universeGlow(),
        color,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      }),
    );
    beacon.position.copy(center);
    beacon.scale.set(beaconSize, beaconSize, 1);
    beacon.userData.base = beaconSize;
    this.scene.add(beacon);
    this.sites.push({ name, center: center.clone(), radius, color, beacon });
  }

  // ------------------------------------------------------------------- lune

  /** Position de la Lune sur son orbite (repère local centré sur la Terre),
   *  cercle incliné de MOON_INCL — partagé par la Lune, le tracé et les phases. */
  private moonOffset(a: number): THREE.Vector3 {
    return new THREE.Vector3(Math.cos(a) * MOON_DIST, 0, Math.sin(a) * MOON_DIST).applyAxisAngle(
      new THREE.Vector3(0, 0, 1),
      MOON_INCL,
    );
  }

  private buildMoon(): void {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(MOON_R, 32, 24), makeMoonMaterial());
    mesh.position.copy(this.earth.mesh.position).add(this.moonOffset(0));
    this.scene.add(mesh);

    const panel = makePanel('LUNE', [
      'CLASSE ....... SATELLITE NATUREL',
      'RAYON ........ 1737 KM',
      'DISTANCE ..... 384 400 KM',
      'PÉRIODE ...... 27,3 JOURS',
    ]);
    panel.scale.set(7, 3.9, 1);
    panel.visible = false;
    this.scene.add(panel);

    this.moon = {
      mesh,
      spin: 0,
      spinVel: 0,
      home: mesh.position.clone(),
      velocity: new THREE.Vector3(),
      panel,
      r: MOON_R,
    };
    this.planets.push(this.moon); // dans la liste → survol / saisie / lancer

    // tracé fin de l'orbite : cercle incliné, repositionné sur la Terre chaque frame
    const N = 160;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= N; i++) pts.push(this.moonOffset((i / N) * Math.PI * 2));
    this.moonOrbit = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0xbfd0ff, transparent: true, opacity: 0.3 }),
    );
    this.moonOrbit.frustumCulled = false;
    this.scene.add(this.moonOrbit);
  }

  /** Recale le tracé d'orbite sur la Terre (qui flotte / peut être lancée). */
  private updateMoonOrbit(): void {
    this.moonOrbit.position.copy(this.earth.mesh.position);
  }

  private respawnComet(c: Comet): void {
    const start = new THREE.Vector3().randomDirection().multiplyScalar(160);
    const target = new THREE.Vector3().randomDirection().multiplyScalar(25);
    c.head.position.copy(start);
    c.velocity.copy(
      target
        .sub(start)
        .normalize()
        .multiplyScalar(45 + Math.random() * 50),
    );
    c.history.forEach((p) => p.copy(start));
    c.head.visible = true;
    c.trail.visible = true;
  }

  // --------------------------------------------------------------- gestures

  update(state: GestureState, _dt: number): WorldFrame {
    const wasHovering = this.isHovering;
    const wasGrabbing = this.isGrabbing;
    const wasWarping = this.isWarping;
    this.applyGestures(state);

    const cues: AudioCue[] = [];
    if (this.isHovering && !wasHovering) cues.push('blip');
    if (this.isGrabbing && !wasGrabbing) cues.push('lock');
    if (!this.isGrabbing && wasGrabbing) cues.push('release');
    if (this.isWarping && !wasWarping) cues.push('lock');
    if (this.firedThisFrame) {
      cues.push('blip');
      this.firedThisFrame = false;
    }

    const hudLabel = this.isWarping
      ? 'SAUT VITESSE-LUMIÈRE…'
      : this.hoveredSiteName
        ? `WARP → ${this.hoveredSiteName}`
        : this.hint;

    return {
      hudContext: 'universe',
      hudLabel,
      charge: this.returnProgress, // maintien grip = retour système solaire
      whoosh: this.isWarping ? 0.9 : 0,
      cues,
    };
  }

  applyGestures(g: GestureState): void {
    // pendant un saut en vitesse-lumière, la cinématique pilote la caméra :
    // on ignore les entrées jusqu'à l'arrivée
    if (this.warp) return;

    const now = performance.now();
    const dt = this.prevGestureTime ? Math.min((now - this.prevGestureTime) / 1000, 0.05) : 0.016;
    this.prevGestureTime = now;

    // clic du stick droit : bascule la taille de la Lune & des satellites de la
    // planète tenue (adaptés ↔ taille normale) — sans effet sur le Soleil
    if (g.rightStickClick && this.grabbed !== this.sunBody) {
      this.companionsNormalSize = !this.companionsNormalSize;
    }

    // rotation progressive : la position de la main donne la vitesse
    this.orbitVel.x += (g.joystick.x * ROT_SPEED - this.orbitVel.x) * 0.08;
    this.orbitVel.y += (g.joystick.y * ROT_SPEED * 0.7 - this.orbitVel.y) * 0.08;
    this.theta += this.orbitVel.x;
    this.phi = THREE.MathUtils.clamp(this.phi + this.orbitVel.y, 0.2, Math.PI - 0.2);

    // zoom continu — coupé pendant une prise en main VR : l'écartement des
    // mains sert alors à changer la taille de la planète, pas à zoomer. On
    // retire aussi la part « deux gâchettes » (triggerZoom) : dans l'Univers
    // les gâchettes lancent des astres, elles ne zooment plus.
    const zoomInput = this.vrHeld && this.grabbed ? 0 : g.zoomVelocity - (g.triggerZoom ?? 0);
    this.zoomVel += (zoomInput - this.zoomVel) * 0.15;
    this.radius = THREE.MathUtils.clamp(
      this.radius * Math.exp(this.zoomVel),
      MIN_RADIUS,
      MAX_RADIUS,
    );

    this.updateCamera();
    this.spinDrag = null; // posé par holdInHand si la 2e main tourne la planète

    const pIdx = g.primary ? g.hands.indexOf(g.primary) : -1;
    // les astres n'existent que dans le système solaire (site 0) : centré sur
    // une galaxie, on ne peut plus les attraper — seul le retour est possible
    const atHome = this.currentSite === 0;
    this.hintText = null;

    if (atHome) {
      // gâchette : lancer un projectile depuis la manette qui tire.
      // Manette gauche (slot 1) = étoile filante ; droite (slot 0) = astéroïde.
      if (g.fireLeft && g.hands[1].present) {
        this.launchProjectile(1, g.hands[1].cursor, 'star');
      }
      if (g.fireRight && g.hands[0].present) {
        this.launchProjectile(0, g.hands[0].cursor, 'asteroid');
      }

      if (this.grabbed && this.vrHeld) {
        // VR : la planète reste en lévitation tant que la pince est fermée,
        // même si la seconde main pince aussi (rotation / mise à l'échelle)
        if (g.primary?.pinching && g.primary.xrPos) {
          this.holdInHand(g, g.primary.xrPos);
        } else {
          this.release();
        }
      } else {
        if (g.grabStart && g.primary) this.tryGrab(pIdx, g.primary.cursor);
        if (g.grabEnd) this.release();

        if (this.grabbed && g.mode === 'grab' && g.primary) {
          this.aim(pIdx, g.primary.cursor);
          const mesh = this.grabbed.mesh;
          this.grabPrevPos.copy(mesh.position);
          // l'astre vient vers nous jusqu'à une distance d'inspection confortable
          this.grabDistance += (this.grabInspectDist - this.grabDistance) * Math.min(1, dt * 3.5);
          mesh.position
            .copy(this.raycaster.ray.origin)
            .addScaledVector(this.raycaster.ray.direction, this.grabDistance);
          // vélocité lissée pour le lancer
          const instant = mesh.position.clone().sub(this.grabPrevPos).multiplyScalar(60);
          this.grabVelocity.lerp(instant, 0.25);
        }
      }

      if (!this.grabbed && g.primary) {
        this.setHovered(this.pickPlanet(pIdx, g.primary.cursor)?.planet ?? null);
      } else {
        this.setHovered(null);
      }

      // lasers VR : coupés à la planète visée par chaque main ; masqués tant
      // qu'une planète est tenue (ils la traverseraient) — la main qui tient
      // s'ouvre alors paume vers le haut
      if (this.grabbed && this.vrHeld) {
        xrHandState.hideRays = true;
        xrHandState.cradleHand = pIdx >= 0 ? pIdx : null;
      } else {
        g.hands.forEach((h, i) => {
          if (!h.present) return;
          const picked = this.pickPlanet(i, h.cursor);
          if (picked) xrHandState.rayHit[i] = picked.distance;
        });
      }

      // tenir une planète à satellites : indiquer la bascule de taille
      if (this.grabbed && this.vrHeld && this.hasCompanions(this.grabbed)) {
        this.hintText = this.companionsNormalSize
          ? 'LUNES & SATELLITES : TAILLE NORMALE · CLIC STICK DROIT'
          : 'LUNES & SATELLITES : ADAPTÉS À LA MAIN · CLIC STICK DROIT';
      }
    } else {
      // hors système solaire : aucune saisie d'astre
      this.setHovered(null);
    }

    // navigation inter-sites : viser une galaxie / le trou noir et pincer pour
    // sauter. Hors système solaire, viser la galaxie où l'on se trouve (ou son
    // ancien système) ramène au système solaire.
    this.updateSiteHover(g, pIdx);
    if (g.grabStart && !this.grabbed && this.hoveredSite >= 0) {
      this.startWarp(this.hoveredSite);
    }

    // retour au système solaire en maintenant la prise (grip / pince),
    // même sans viser — fonctionne aussi bien en VR qu'aux mains nues
    if (!atHome && !this.grabbed && g.primary?.pinching && this.hoveredSite < 0) {
      this.returnCharge = Math.min(1, this.returnCharge + dt / RETURN_HOLD);
      if (this.returnCharge >= 1) {
        this.returnCharge = 0;
        this.startWarp(0);
      }
    } else {
      this.returnCharge = Math.max(0, this.returnCharge - dt * 3);
    }

    // hors-site sans visée : rappeler comment rentrer (quand on vise une
    // destination, le HUD affiche déjà « WARP → … » à la place)
    if (!atHome && this.hoveredSite < 0) {
      this.hintText = 'RETOUR SYSTÈME SOLAIRE : VISER LA GALAXIE OU MAINTENIR LA PRISE';
    }
  }

  /** Survol d'une destination : la balise la plus proche de l'axe de visée de
   *  la main principale (tolérance angulaire généreuse pour viser de loin). */
  private updateSiteHover(g: GestureState, pIdx: number): void {
    this.hoveredSite = -1;
    if (this.grabbed || !g.primary || !g.primary.present || pIdx < 0) return;
    this.aim(pIdx, g.primary.cursor);
    const ray = this.raycaster.ray;
    const dir = new THREE.Vector3();
    let best = -1;
    let bestAng = 0.07; // ~4°
    for (let i = 0; i < this.sites.length; i++) {
      // au système solaire, on ne se cible pas soi-même ; ailleurs, viser la
      // galaxie où l'on est (pile en face) sert justement à rentrer
      if (i === this.currentSite && this.currentSite === 0) continue;
      dir.copy(this.sites[i].center).sub(ray.origin);
      if (dir.lengthSq() < 1) continue;
      const cos = dir.normalize().dot(ray.direction);
      if (cos <= 0) continue;
      const ang = Math.acos(Math.min(1, cos));
      if (ang < bestAng) {
        bestAng = ang;
        best = i;
      }
    }
    this.hoveredSite = best;
  }

  private startWarp(i: number): void {
    if (this.warp) return;
    // viser la galaxie où l'on se trouve (ou la balise du système solaire)
    // ramène à l'origine
    const dest = i === this.currentSite ? 0 : i;
    if (dest === this.currentSite) return;
    const s = this.sites[dest];
    this.warp = {
      t: 0,
      dur: 1.5,
      from: this.center.clone(),
      to: s.center.clone(),
      fromR: this.radius,
      toR: s.radius,
      site: dest,
    };
    this.warpField.object.visible = true;
    this.release(); // au cas où
    this.setHovered(null);
    this.hoveredSite = -1;
  }

  /** Cinématique du saut : glisse le centre d'orbite, étire le FOV et fait
   *  défiler les stries pour la sensation de vitesse-lumière. */
  private updateWarp(dt: number): void {
    const w = this.warp;
    if (!w) return;
    w.t += dt;
    const e = easeInOutCubic(Math.min(w.t / w.dur, 1));
    this.center.lerpVectors(w.from, w.to, e);
    this.radius = THREE.MathUtils.lerp(w.fromR, w.toR, e);

    const punch = Math.sin(Math.min(1, w.t / w.dur) * Math.PI); // 0 → 1 → 0
    this.camera.fov = 55 + punch * 38;
    this.camera.updateProjectionMatrix();
    this.updateCamera();

    // tunnel de stries centré sur le regard : suit la position et la direction
    // de la caméra, et défile pour la sensation de vitesse
    const fwd = new THREE.Vector3();
    this.camera.getWorldDirection(fwd);
    const wf = this.warpField.object;
    wf.position.copy(this.camera.position);
    wf.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), fwd);
    const mat = wf.material as THREE.LineBasicMaterial;
    mat.opacity = punch * 0.9;
    this.warpField.scroll(900 * dt);

    if (w.t >= w.dur) {
      this.center.copy(w.to);
      this.radius = w.toR;
      this.currentSite = w.site;
      this.warp = null;
      this.camera.fov = 55;
      this.camera.updateProjectionMatrix();
      this.warpField.object.visible = false;
      mat.opacity = 0;
      this.updateCamera();
    }
  }

  get isWarping(): boolean {
    return this.warp !== null;
  }
  get hoveredSiteName(): string | null {
    if (this.hoveredSite < 0) return null;
    // hors-site, viser la galaxie courante mène au système solaire : on
    // affiche donc la destination réelle du saut
    if (this.hoveredSite === this.currentSite) return this.sites[0].name;
    return this.sites[this.hoveredSite].name;
  }
  /** Indication contextuelle (bascule taille compagnons, retour au système). */
  get hint(): string | null {
    return this.hintText;
  }
  /** Charge du retour au système solaire (maintien de la prise), 0..1. */
  get returnProgress(): number {
    return this.returnCharge;
  }

  /** Configure le raycaster pour la main donnée : vrai rayon de manette en VR,
   *  sinon projection du curseur écran. */
  private aim(handIndex: number, cursor: { x: number; y: number }): void {
    aimRaycaster(this.raycaster, handIndex, cursor, this.camera, this.renderer.xr.isPresenting);
  }

  get isHovering(): boolean {
    return this.hovered !== null;
  }
  get isGrabbing(): boolean {
    return this.grabbed !== null;
  }

  /** Remonte la hiérarchie : un engin détaillé est touché par l'un de ses
   *  sous-meshes (panneaux, tuyères…), on retrouve le corps-planète parent. */
  private findPlanet(obj: THREE.Object3D): Planet | null {
    let o: THREE.Object3D | null = obj;
    while (o) {
      const p = this.planets.find((pl) => pl.mesh === o);
      if (p) return p;
      o = o.parent;
    }
    return null;
  }

  /**
   * Visée tolérante : impact direct du rayon, sinon la planète la plus proche
   * du rayon dans une marge angulaire (~2°) — les petites planètes lointaines
   * restent attrapables sans visée chirurgicale (essentiel en VR).
   */
  private pickPlanet(
    handIndex: number,
    cursor: { x: number; y: number },
  ): { planet: Planet; distance: number } | null {
    this.aim(handIndex, cursor);
    const hits = this.raycaster.intersectObjects(
      this.planets.map((p) => p.mesh),
      true, // récursif : les engins détaillés sont touchés par leurs sous-meshes
    );
    if (hits.length) {
      const planet = this.findPlanet(hits[0].object);
      if (planet) return { planet, distance: hits[0].distance };
    }
    const ray = this.raycaster.ray;
    let best: { planet: Planet; distance: number } | null = null;
    let bestScore = Infinity;
    for (const p of this.planets) {
      const along = p.mesh.position.clone().sub(ray.origin).dot(ray.direction);
      if (along <= 0) continue;
      const offAxis = ray.origin
        .clone()
        .addScaledVector(ray.direction, along)
        .distanceTo(p.mesh.position);
      const tolerance = Math.max(p.r * 1.6, along * 0.035);
      if (offAxis < tolerance && offAxis / tolerance < bestScore) {
        bestScore = offAxis / tolerance;
        best = { planet: p, distance: along };
      }
    }
    return best;
  }

  private tryGrab(handIndex: number, cursor: { x: number; y: number }): void {
    // En fermant la pince, le curseur (milieu pouce/index) glisse légèrement
    // vers le bas — ce qui obligeait à viser au-dessus de l'astre pour
    // l'attraper. On saisit donc en priorité l'astre DÉJÀ survolé (la visée
    // stable d'avant la pince) ; on ne relance un tir au curseur qu'à défaut.
    const picked = this.hovered
      ? {
          planet: this.hovered,
          distance: this.camera.position.distanceTo(this.hovered.mesh.position),
        }
      : this.pickPlanet(handIndex, cursor);
    if (!picked) return;
    this.grabbed = picked.planet;
    this.grabDistance = picked.distance;
    // distance d'inspection ∝ taille de l'astre (apparence ~constante)
    this.grabInspectDist = THREE.MathUtils.clamp(picked.planet.r * 7, 6, 18);
    this.grabVelocity.set(0, 0, 0);
    this.grabPrevPos.copy(this.grabbed.mesh.position);
    this.setEmissive(this.grabbed, 0.45);
    this.grabbed.panel.visible = true;
    this.sizePanel(this.grabbed, true);
    this.spawnPulse(this.grabbed.mesh.position);

    if (this.renderer.xr.isPresenting) {
      // VR : la planète vient flotter au-dessus de la main, à taille de paume
      this.vrHeld = true;
      this.vrHoldScale = HOLD_RADIUS / this.grabbed.r;
      this.holdPrevTarget = null;
      this.prevOtherX = null;
      this.holdPrevHandDist = null;
    }
  }

  /**
   * VR : la planète lévite au-dessus de la pince. Seconde main pincée :
   * glisser latéralement = la faire tourner, écarter les mains = la grossir.
   * Ouvrir la pince en mouvement = la lancer.
   */
  private holdInHand(g: GestureState, xrPos: { x: number; y: number; z: number }): void {
    const p = this.grabbed!;
    // espace de référence XR → monde : le rig porte la pose orbitale (caméra)
    const camQ = this.camera.quaternion;
    const target = new THREE.Vector3(xrPos.x, xrPos.y, xrPos.z)
      .applyQuaternion(camQ)
      .add(this.camera.position)
      .add(new THREE.Vector3(0, 0.04 + p.r * this.vrHoldScale * 0.8, 0).applyQuaternion(camQ));

    if (this.holdPrevTarget) {
      const instant = target
        .clone()
        .sub(this.holdPrevTarget)
        .multiplyScalar(60 * VR_THROW_GAIN);
      this.grabVelocity.lerp(instant, 0.3);
    }
    this.holdPrevTarget = target.clone();
    p.mesh.position.lerp(target, HOLD_LERP);

    const other = g.hands.find((h) => h.present && h !== g.primary);
    if (other?.pinching && other.xrPos && g.primary?.xrPos) {
      if (this.prevOtherX !== null) {
        // imprime une rotation ; render() la prolonge en inertie décroissante
        this.spinDrag = (other.cursor.x - this.prevOtherX) * 9;
      }
      this.prevOtherX = other.cursor.x;
      // mise à l'échelle : écart 3D réel entre les deux mains (écarter =
      // grossir) — indépendant du zoom de navigation, désormais aux gâchettes
      const d = Math.hypot(
        g.primary.xrPos.x - other.xrPos.x,
        g.primary.xrPos.y - other.xrPos.y,
        g.primary.xrPos.z - other.xrPos.z,
      );
      if (this.holdPrevHandDist !== null && d > 1e-4) {
        this.vrHoldScale = THREE.MathUtils.clamp(
          this.vrHoldScale * Math.exp(Math.log(d / this.holdPrevHandDist) * 1.4),
          0.05 / p.r,
          1.2 / p.r,
        );
      }
      this.holdPrevHandDist = d;
    } else {
      this.prevOtherX = null;
      this.holdPrevHandDist = null;
    }
  }

  private release(): void {
    if (!this.grabbed) return;
    // lancer : la planète part avec l'inertie puis revient en orbite (ressort)
    this.grabbed.velocity.copy(this.grabVelocity.clampLength(0, this.vrHeld ? 70 : 40));
    this.setEmissive(this.grabbed, 0.07);
    this.grabbed.panel.visible = false;
    this.grabbed = null;
    this.vrHeld = false;
    this.holdPrevTarget = null;
    this.prevOtherX = null;
    this.holdPrevHandDist = null;
  }

  private setHovered(planet: Planet | null): void {
    if (planet === this.hovered) return;
    // ne pas éteindre l'astre qu'on vient de saisir : il garde sa lueur et son
    // panneau de données pendant qu'on l'inspecte (la prise gère son extinction)
    if (this.hovered && this.hovered !== this.grabbed) {
      this.setEmissive(this.hovered, 0.07);
      this.hovered.panel.visible = false;
    }
    this.hovered = planet;
    if (this.hovered) {
      this.setEmissive(this.hovered, 0.3);
      this.hovered.panel.visible = true;
      this.sizePanel(this.hovered, true);
    }
  }

  private setEmissive(planet: Planet, intensity: number): void {
    // traverse tout l'engin : corps + sous-meshes (panneaux, tuyères, hublots)
    // s'illuminent ensemble au survol / à la saisie
    planet.mesh.traverse((o) => {
      const mat = (o as THREE.Mesh).material as
        | (THREE.Material & { emissiveIntensity?: number })
        | undefined;
      if (mat && mat.emissiveIntensity !== undefined) mat.emissiveIntensity = intensity;
    });
  }

  /**
   * Taille du panneau aux yeux du lecteur : largeur monde ∝ distance à la
   * caméra → taille apparente quasi constante. De près (ou tenu en main) il
   * rapetisse, de loin il grandit pour rester lisible. `snap` pose la taille
   * d'un coup (à l'apparition), sinon on lisse pour une transition douce.
   */
  private sizePanel(p: Planet, snap = false): void {
    const dist = this.camera.position.distanceTo(p.panel.position);
    const targetW = THREE.MathUtils.clamp(dist * PANEL_VIEW, PANEL_MIN_W, PANEL_MAX_W);
    const w = snap ? targetW : p.panel.scale.x + (targetW - p.panel.scale.x) * 0.18;
    p.panel.scale.set(w, w * PANEL_ASPECT, 1);
  }

  /** Place le panneau juste au-dessus de l'astre, bord inférieur au ras de son
   *  sommet : il flotte au-dessus sans jamais le chevaucher, même tenu en main.
   *  À appeler après sizePanel (la hauteur du panneau entre dans le calcul). */
  private placePanel(p: Planet): void {
    const scaledR = p.r * p.mesh.scale.x;
    p.panel.position.copy(p.mesh.position);
    p.panel.position.y += scaledR + p.panel.scale.y / 2 + 0.12;
  }

  /** Vrai si la planète possède des compagnons qui suivent sa taille de paume :
   *  satellites en orbite (ISS, ARÈS, sondes…) ou la Lune pour la Terre. */
  private hasCompanions(p: Planet): boolean {
    return p === this.earth || this.planets.some((q) => q.orbit?.parent === p);
  }

  /** Lance une étoile / un astéroïde depuis la main, dans la direction visée :
   *  l'astre part en ligne droite, culbute, puis disparaît au loin. */
  private launchProjectile(
    handIndex: number,
    cursor: { x: number; y: number },
    kind: 'star' | 'asteroid',
  ): void {
    this.aim(handIndex, cursor);
    const ray = this.raycaster.ray;
    const mesh = makeProjectile(kind);
    // démarre quasiment au bout de la manette qui tire (PROJECTILE_START court)
    mesh.position.copy(ray.origin).addScaledVector(ray.direction, PROJECTILE_START);
    this.scene.add(mesh);
    this.projectiles.push({
      mesh,
      velocity: ray.direction.clone().multiplyScalar(PROJECTILE_SPEED),
      spin: new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
      ),
      life: 0,
    });
    this.firedThisFrame = true;
  }

  private spawnPulse(pos: THREE.Vector3): void {
    const mesh = new THREE.Mesh(
      new THREE.RingGeometry(1, 1.12, 48),
      new THREE.MeshBasicMaterial({
        color: CYAN,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
      }),
    );
    mesh.position.copy(pos);
    mesh.lookAt(this.camera.position);
    this.scene.add(mesh);
    this.pulses.push({ mesh, age: 0 });
  }

  // ---------------------------------------------------------------- render

  render(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.elapsedTime;

    // décors « espace vivant » (galaxies, trou noir) + saut en cours
    for (const u of this.cosmicUpdates) u(dt, t);
    this.updateWarp(dt);

    // balises de destination : pulsation douce, accentuée au survol ; celle du
    // site courant est masquée (on est déjà dessus)
    this.sites.forEach((s, i) => {
      const mat = s.beacon.material as THREE.SpriteMaterial;
      const base = s.beacon.userData.base as number;
      const hov = i === this.hoveredSite;
      s.beacon.scale.setScalar(base * (1 + 0.08 * Math.sin(t * 2 + i)) * (hov ? 1.5 : 1));
      // balise du site courant masquée (on y est) — sauf si on la vise pour
      // rentrer au système solaire (hors-site)
      mat.opacity = i === this.currentSite && !hov ? 0 : hov ? 0.95 : 0.5;
    });

    // (le Soleil tourne désormais via la boucle des planètes — il est attrapable)

    // planète tenue en main (VR) : ses satellites (et la Lune pour la Terre)
    // adoptent sa taille de paume et resserrent leur orbite d'autant — sauf
    // bascule « taille normale » (clic stick droit)
    const heldParent =
      this.grabbed && this.vrHeld && !this.companionsNormalSize ? this.grabbed : null;
    const compScale = heldParent ? this.vrHoldScale : 1;
    // la Lune suit la taille de paume si la Terre est tenue
    const moonScale = heldParent === this.earth ? this.vrHoldScale : 1;

    // Lune : avance sur son orbite ; le tracé et les marqueurs de phase suivent
    // la Terre (qui flotte / peut être lancée) et s'orientent selon le Soleil
    this.moonAngle += dt * MOON_SPEED;
    this.updateMoonOrbit();
    this.moonOrbit.scale.setScalar(moonScale); // le tracé suit la taille adaptée
    // plan d'orbite fixe (monde) : le tracé reste horizontal quoi qu'il arrive
    this.moonOrbit.quaternion.copy(IDENTITY_QUAT);

    for (const p of this.planets) {
      // ce corps est-il un compagnon de la planète tenue (et suit sa taille) ?
      const companion =
        !!heldParent &&
        (p.orbit?.parent === heldParent || (p === this.moon && heldParent === this.earth));

      if (p.faceVelocity) {
        // engin en vol : orienté selon sa vitesse, plus bas (après la position)
      } else {
        // rotation : spin de fond + inertie manuelle qui décroît (ballon de basket)
        if (p === this.grabbed && this.spinDrag !== null && dt > 0) {
          p.mesh.rotation.y += this.spinDrag;
          p.spinVel = this.spinDrag / dt;
        } else {
          p.mesh.rotation.y += p.spinVel * dt;
        }
        p.spinVel *= Math.exp(-1.1 * dt);
        p.mesh.rotation.y += p.spin * dt;

        if (p === this.moon && p !== this.grabbed) {
          // verrouillage gravitationnel : la Lune montre toujours la même face
          p.mesh.rotation.y = Math.PI - this.moonAngle;
        }
      }

      // échelle : taille de paume si tenue en VR ; taille adaptée si compagnon
      // de la planète tenue ; sinon réelle — transition douce (SCALE_LERP)
      const targetScale =
        p === this.grabbed && this.vrHeld ? this.vrHoldScale : companion ? compScale : 1;
      if (Math.abs(p.mesh.scale.x - targetScale) > 1e-3) {
        p.mesh.scale.setScalar(
          p.mesh.scale.x + (targetScale - p.mesh.scale.x) * Math.min(1, dt * SCALE_LERP),
        );
      }
      if (p !== this.grabbed) {
        // ressort amorti vers la cible. La Lune et les stations visent une
        // position orbitale mobile (raideur forte pour coller à l'orbite et
        // revenir vite après un lancer) ; les engins errants suivent leur
        // trajectoire ; les planètes flottent autour de leur position d'origine.
        let target: THREE.Vector3;
        let stiff: number;
        let damp: number;
        if (p === this.moon) {
          const off = this.moonOffset(this.moonAngle).multiplyScalar(moonScale);
          target = this.earth.mesh.position.clone().add(off);
          stiff = 16;
          damp = 8;
        } else if (p.orbit) {
          const o = p.orbit;
          const a = o.phase + t * o.speed;
          const off = new THREE.Vector3(Math.cos(a) * o.dist, 0, Math.sin(a) * o.dist)
            .applyAxisAngle(new THREE.Vector3(1, 0, 0), o.incl)
            .multiplyScalar(companion ? compScale : 1);
          target = o.parent.mesh.position.clone().add(off);
          stiff = 14;
          damp = 8;
        } else if (p.path) {
          target = p.path(t);
          stiff = 10;
          damp = 7;
        } else {
          target = p.home.clone();
          target.y += Math.sin(t * 0.7 + p.home.x) * 0.25;
          stiff = 2.4;
          damp = 2.2;
        }
        const toTarget = target.sub(p.mesh.position);
        p.velocity.addScaledVector(toTarget, stiff * dt);
        p.velocity.multiplyScalar(Math.exp(-damp * dt));
        p.mesh.position.addScaledVector(p.velocity, dt);

        // engin en vol : oriente le nez (+Z) le long de la vitesse, en douceur
        if (p.faceVelocity && p.velocity.lengthSq() > 1e-5) {
          const q = new THREE.Quaternion().setFromUnitVectors(
            FORWARD,
            p.velocity.clone().normalize(),
          );
          p.mesh.quaternion.slerp(q, Math.min(1, dt * 4));
        }
      }

      // panneau : taille apparente constante (rapetisse de près / en main),
      // posé juste au-dessus de l'astre sans le chevaucher
      if (p.panel.visible) {
        this.sizePanel(p);
        this.placePanel(p);
      }
    }
    this.spinDrag = null; // consommé

    this.belt.rotation.y += dt * 0.02;
    this.stars.rotation.y += dt * 0.004;
    this.grid.rotation.y += dt * 0.01;

    // nébuleuses : teinte qui dérive doucement + pulsation d'intensité, chacune
    // déphasée — l'espace « respire » en couleurs, sans gros rideaux
    for (const n of this.nebulae) {
      const m = n.material as THREE.SpriteMaterial;
      const ud = n.userData;
      const hue = (((ud.baseH + 0.07 * Math.sin(t * 0.05 + ud.phase)) % 1) + 1) % 1;
      m.color.setHSL(hue, ud.baseS, ud.baseL);
      m.opacity = ud.baseOpacity * (0.55 + 0.45 * Math.sin(t * 0.28 + ud.phase));
    }

    // comètes
    for (const c of this.comets) {
      if (!c.head.visible) {
        c.respawnIn -= dt;
        if (c.respawnIn <= 0) this.respawnComet(c);
        continue;
      }
      c.head.position.addScaledVector(c.velocity, dt);
      c.history.pop();
      c.history.unshift(c.head.position.clone());
      const attr = c.trail.geometry.getAttribute('position') as THREE.BufferAttribute;
      c.history.forEach((p, i) => attr.setXYZ(i, p.x, p.y, p.z));
      attr.needsUpdate = true;
      if (c.head.position.length() > 230) {
        c.head.visible = false;
        c.trail.visible = false;
        c.respawnIn = 3 + Math.random() * 8;
      }
    }

    // ondes de choc du grab
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const pulse = this.pulses[i];
      pulse.age += dt;
      const s = 1 + pulse.age * 14;
      pulse.mesh.scale.set(s, s, s);
      (pulse.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(
        0,
        0.45 - pulse.age * 0.9,
      );
      if (pulse.age > 0.55) {
        this.scene.remove(pulse.mesh);
        pulse.mesh.geometry.dispose();
        this.pulses.splice(i, 1);
      }
    }

    // étoiles / astéroïdes lancés : course en ligne droite + culbute, retirés
    // au loin (hors champ) ou après expiration
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life += dt;
      pr.mesh.position.addScaledVector(pr.velocity, dt);
      pr.mesh.rotation.x += pr.spin.x * dt;
      pr.mesh.rotation.y += pr.spin.y * dt;
      pr.mesh.rotation.z += pr.spin.z * dt;
      if (
        pr.life > PROJECTILE_LIFE ||
        pr.mesh.position.distanceTo(this.center) > PROJECTILE_RANGE
      ) {
        this.scene.remove(pr.mesh);
        pr.mesh.traverse((o) => {
          const m = o as THREE.Mesh;
          m.geometry?.dispose();
          (m.material as THREE.Material | undefined)?.dispose();
        });
        this.projectiles.splice(i, 1);
      }
    }

    xrRender(this.renderer, this.composer, this.scene, this.camera);
  }

  private updateCamera(): void {
    this.camera.position.setFromSphericalCoords(this.radius, this.phi, this.theta).add(this.center);
    this.camera.lookAt(this.center);
  }

  resize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(w, h);
  }
}
