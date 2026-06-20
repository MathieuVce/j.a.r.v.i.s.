# J.A.R.V.I.S Holographic Interface

![Three.js](https://img.shields.io/badge/Three.js-r170-black?style=flat&logo=threedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white)
![MediaPipe](https://img.shields.io/badge/MediaPipe-0.10.14-0097A7?style=flat&logo=google&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=flat&logo=webgl&logoColor=white)
![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-native-FF6B35?style=flat)
![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-Overpass-7EBC6F?style=flat&logo=openstreetmap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat&logo=vercel&logoColor=white)

---

Interface holographique 3D contrôlée par la reconnaissance des mains en temps réel.
Inspirée de l'esthétique Jarvis d'Iron Man.

Démo en ligne : **https://jarvis-lyart-tau.vercel.app**

## Vue d'ensemble

J.A.R.V.I.S est une application web immersive qui se pilote par les mains, via trois sources d'entrée interchangeables :
la **webcam** (détection des mains MediaPipe HandLandmarker), le **tactile** sur mobile, ou les **manettes / mains d'un casque VR** (WebXR).
Les gestes pilotent en temps réel trois mondes 3D rendus avec Three.js : un globe terrestre / ville interactive, un système solaire explorable, et un réacteur audio-visuel doublé d'une batterie VR jouable.
Tout fonctionne côté client, sans backend, sans clé API payante.

---

## Architecture générale

`main.ts` orchestre tout : une boucle de rendu unique (`renderer.setAnimationLoop`, requise en WebXR),
un registre de mondes uniformisés par l'interface `World`, et le choix de la source d'entrée selon le
contexte (manettes/mains VR, tactile mobile, ou webcam). Chaque monde a sa scène, sa caméra et son
`EffectComposer` (bloom). Le `WebGLRenderer` Three.js est **partagé** par tous les mondes.

```
src/
  main.ts                  orchestrateur : boucle de rendu, registre des mondes, câblage HUD/audio/VR
  utils/
    world.ts               interface World { update -> WorldFrame; render; resize; deactivate? } — contrat des mondes
    math.ts · composer.ts · textures.ts · palette.ts   helpers partagés (bloom, bruit, couleurs)

  input/                   produisent tous un GestureState unifié
    tracking.ts            capture webcam + inférence MediaPipe (GPU)
    gestures.ts            landmarks -> gestes (modèle joystick, deux mains, pince/poing/paume)
    touch.ts               fallback tactile mobile
    xrinput.ts             manettes / mains WebXR (+ remplit l'état partagé des mains)

  vr/                      couche WebXR (barrel : vr/index.ts)
    state.ts               xrHandState : pos/quat/pince/poing/manettes partagés
    session.ts             démarrage de la session XR     rig.ts     ancrage espace local-floor
    render.ts              composition du rendu VR + visée  hands.ts   marqueurs de mains / lasers
    helpPanel.ts           panneau d'aide 3D (contrôles par monde)

  worlds/
    map/                   monde Carte
      globe.ts             globe terrestre, villes, plongée cinématique (entrée du monde)
      city.ts              ville OSM 3D (bâtiments Overpass), navigation piétonne
      cityDecor.ts         décors de ville
      spiderMode.ts        mode Spider-Man (déplacement / toile / saut)
    universe/              monde Univers
      Universe.ts          système solaire : planètes attrapables, orbites, sauts inter-sites
      build.ts             construction du Soleil et des planètes
    lightshow/             monde Light Show
      lightshow.ts         réacteur audio-visuel (particules, barres, structure) + intègre la batterie
      drums.ts             batterie VR : baguettes = manettes, fûts, sons synthétisés
      rhythm/              mode jeu « Drum Hero » : chart.ts · game.ts · highway.ts · scorePanel.ts

  components/
    planets.ts             specs du système solaire, matériaux / atmosphères / anneaux
    cosmos.ts              galaxies, trou noir, ceinture, étoiles, comètes
  audio/
    music.ts               moteur musique : FFT, détection de beat, lecture fichier/URL
    audio.ts               sons UI Jarvis (blips, whoosh, transitions)
  screens/hud.ts           HUD : curseurs, labels, panneau Audio Reactor, ordre des mondes
  styles/style.css         esthétique holographique cyan/ambre
```

**Ajouter un monde** = implémenter l'interface `World` (`utils/world.ts`), l'enregistrer dans le registre
`worlds` de `main.ts`, et l'ajouter à `WORLD_ORDER` / `WORLD_SHORT` (`screens/hud.ts`). On commute de monde
via le bouton en haut à droite, le geste correspondant, ou les boutons A/B des manettes en VR.

---

## Technologies utilisées

**Rendu 3D**
Three.js r170 avec WebGL2. EffectComposer, UnrealBloomPass, OutputPass pour le post-processing.
Géométries instanciées (`InstancedMesh`) pour les barres spectrales et les bâtiments de ville.
`mergeGeometries` (trois-stdlib) pour regrouper les buildings en un seul draw call.

**Reconnaissance des mains**
MediaPipe Tasks Vision 0.10.14. Le modèle `hand_landmarker.task` est chargé depuis les CDN Google.
Inférence GPU via le délégué WebGL, 2 mains simultanées, 21 landmarks chacune, mode VIDEO (flux continu).
Le canvas de debug en bas à droite affiche le squelette miroir en temps réel.

**Moteur de gestes** (`input/gestures.ts`)
Les positions brutes des landmarks sont lissées par exponential smoothing (α = 0.4).
Le joystick est basé sur la **position absolue** de la main par rapport au centre de l'écran, pas sur un delta frame-à-frame. Cela élimine l'amplification du bruit de tracking.
Le zoom utilise le **ratio logarithmique** de la distance inter-mains entre deux frames consécutives : on peut répéter le geste sans effet de rebond.
La profondeur Z est estimée depuis la taille de la main (distance poignet → base majeur).

**Données géographiques**
Contours des pays : GeoJSON depuis `raw.githubusercontent.com/johan/world.geo.json` (CORS libre).
Bâtiments et routes des villes : API Overpass (OpenStreetMap), rayon 900 m autour de la ville sélectionnée. Les bâtiments sont extrudés en 3D avec `ExtrudeGeometry`.
Aucune Google Maps API, aucune clé payante.

**Audio**
Web Audio API native. FFT de taille 1024, 3 bandes (bass 1-5, mid 5-80, high 80-256 bins).
Beat detection : `bass > bassAvg × 1.3 + 0.04` avec un délai minimal de 260 ms entre deux beats.
Demo synthwave générée par oscillateurs programmés 120 BPM (kick, hi-hat bruit, basse scie, arpège).
Musiques Kevin MacLeod CC-BY streamées depuis archive.org.

**Stack frontend**
Vite 6, TypeScript 5.6 strict (`noUnusedLocals`, `noUnusedParameters`). Zéro framework UI.

---

## Les mondes

### 1. Globe terrestre (monde par défaut)

Un globe 3D translucide représente la Terre avec les contours des pays en lignes cyan à la Jarvis.
Des marqueurs pulsants indiquent des villes emblématiques.
La main ouverte excentrée fait tourner le globe (joystick : plus la main est loin du centre, plus la rotation est rapide).
Deux pinces écartées/rapprochées contrôlent le zoom.
Pincer un marqueur de ville déclenche une animation cinématique de 2,4 secondes : la caméra orbite jusqu'à la latitude/longitude de la ville puis plonge dessus.

### 2. Ville OSM (sous-scène de la Carte)

Après la plongée cinématique, la ville est chargée depuis l'API Overpass : bâtiments extrudés et routes filaires rendu dans un style holographique.
La navigation se fait main ouverte : haut/bas pour avancer/reculer, gauche/droite pour pivoter (modèle FPS).
Pincer et tirer déplace latéralement sur le plan au sol.
Deux pinces contrôlent l'altitude.
Maintenir le poing fermé pendant 1,2 secondes charge la bulle ambre autour du curseur et déclenche le retour au globe.
En VR, un **mode Spider-Man** (`worlds/map/spiderMode.ts`) permet de se déplacer dans la ville, lancer des toiles et sauter à la première personne.

### 3. Univers / Système solaire

Soleil central, planètes en orbite avec matériaux PBR (roughness, metalness), ceinture d'astéroïdes, comètes et nébuleuses particules.
Pincer une planète la verrouille (mode GRAB), on peut la déplacer en espace 3D puis la relâcher avec inertie et ressort de retour.
La main ouverte excentrée oriente la caméra en mode orbite.
Bloom léger : strength 0.45, threshold 0.35.

### 4. Light Show (réacteur audio)

Scène 3D entièrement réactive à la musique.

**Structure centrale** : wireframe morphable en 4 formes (icosaèdre, nœud torique, octaèdre, tore). 3 anneaux gyroscopiques tournent autour d'elle sur des axes indépendants et pulsent sur les beats. À chaque beat détecté un anneau de choc horizontal se propage depuis la structure et disparaît en fondu.

**Particules** : 2 000 particules vivantes en 3 comportements cyclés avec le geste 🤟 :
tourbillon orbital (orbites individuelles accélérées par les médiums), pluie (chute continue dont la vitesse explose sur les basses), respiration (coquille sphérique qui gonfle sur les basses).

**Barres spectrales** : 64 colonnes en anneau horizontal, hauteur liée aux basses/médiums/aigus.

**Sol en vagues** : nappe `PlaneGeometry` déformée chaque frame par superposition de 3 sinusoïdes, gonfle sur les basses.

**Caméra** : orbite automatique lente. La deuxième main ouverte devient un joystick caméra pour une orbite libre. Deux pinces contrôlent la distance (28 à 150 unités).

3 ambiances : Néon (magenta/sarcelle), Space (bleu nuit/violet), Minimal (gris/blanc).
Bloom : strength 0.7, threshold 0.32 — halo présent sans écraser les couleurs sombres.

**Batterie VR** (`worlds/lightshow/drums.ts`) : en session immersive, les manettes deviennent des baguettes et un kit néon (caisse claire, toms, charley, crash, ride, grosse caisse) se pose devant le joueur. Chaque frappe joue un son synthétisé (Web Audio) et alimente les effets du light show. La gâchette sert de pédale de grosse caisse, le stick gauche règle la hauteur / profondeur du kit ; chaque fût a sa couleur propre.

**Drum Hero** (`worlds/lightshow/rhythm/`) : un mode jeu rythme façon Guitar Hero — des gemmes descendent une autoroute de voies colorées (une par fût) jusqu'à la ligne de frappe, et les coups sont notés (perfect / good / miss).

---

## Gestes globaux

| Geste                          | Action                                      |
| ------------------------------ | ------------------------------------------- |
| Main ouverte excentrée         | Joystick orbite / navigation / lumière      |
| Deux mains pincées écartées    | Zoom avant                                  |
| Deux mains pincées rapprochées | Zoom arrière                                |
| Pincer                         | Attraper / sélectionner / intensité lumière |
| Poing maintenu (1,2 s)         | Retour au globe depuis la vue ville         |
| ✌️ en Light Show               | Changer de palette de couleurs              |
| 🤟 en Light Show               | Changer de forme + comportement particules  |
| 2e main ouverte en Light Show  | Joystick caméra                             |

En VR, les contrôles manettes (sticks, gâchettes, boutons A/B/X/Y) sont spécifiques à chaque monde et rappelés en jeu par le **panneau d'aide** (`vr/helpPanel.ts`), affichable avec les boutons X/Y.

---

## Crédits

Musiques Kevin MacLeod (Incompetech) — licence CC BY 4.0.
Contours géographiques Johan Sundström — licence ODbL.
Données bâtiments OpenStreetMap contributors — licence ODbL.
Modèle hand tracking MediaPipe — Apache 2.0.
