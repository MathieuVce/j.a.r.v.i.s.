# J.A.R.V.I.S — Holographic Interface

Interface holographique 3D contrôlée par la reconnaissance des mains en temps réel.
Inspirée de l'esthétique Jarvis d'Iron Man.

Démo en ligne : **https://jarvis-lyart-tau.vercel.app**

---

## Vue d'ensemble

J.A.R.V.I.S est une application web immersive qui utilise la caméra frontale pour détecter les mains de l'utilisateur via MediaPipe HandLandmarker.
Les gestes pilotent en temps réel trois univers 3D distincts rendus avec Three.js : un globe terrestre interactif, un système solaire explorable et un réacteur audio visuel.
Tout fonctionne côté client, sans backend, sans clé API payante.

---

## Architecture générale

```
src/
  main.ts        orchestrateur principal, boucle de rendu partagée
  tracking.ts    capture webcam + inférence MediaPipe (GPU)
  gestures.ts    moteur de gestes, modèle joystick + deux mains
  globe.ts       monde Carte : globe terrestre, villes, plongée cinématique
  city.ts        monde Ville : bâtiments OSM en 3D, navigation piétonne
  scene.ts       monde Univers : système solaire, planètes attrapables
  lightshow.ts   monde Light Show : réacteur audio, particules vivantes
  music.ts       moteur audio : FFT, détection de beat, lecture fichier/URL
  hud.ts         interface HUD : curseurs, labels, panneau Audio Reactor
  audio.ts       sons UI Jarvis (blips, whoosh, transitions)
  style.css      esthétique holographique cyan/ambre
```

Le `WebGLRenderer` Three.js est **partagé** entre tous les mondes. Chaque monde possède sa propre scène, sa caméra et son `EffectComposer` (bloom post-processing). On commute de monde en cliquant sur le bouton en haut à droite ou en lançant le geste correspondant.

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

**Moteur de gestes** (`gestures.ts`)
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

## Les trois scènes

### 1. Globe terrestre (scène par défaut)

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

---

## Gestes globaux

| Geste | Action |
|---|---|
| Main ouverte excentrée | Joystick orbite / navigation / lumière |
| Deux mains pincées écartées | Zoom avant |
| Deux mains pincées rapprochées | Zoom arrière |
| Pincer | Attraper / sélectionner / intensité lumière |
| Poing maintenu (1,2 s) | Retour au globe depuis la vue ville |
| ✌️ en Light Show | Changer de palette de couleurs |
| 🤟 en Light Show | Changer de forme + comportement particules |
| 2e main ouverte en Light Show | Joystick caméra |

---

## Crédits

Musiques Kevin MacLeod (Incompetech) — licence CC BY 4.0.
Contours géographiques Johan Sundström — licence ODbL.
Données bâtiments OpenStreetMap contributors — licence ODbL.
Modèle hand tracking MediaPipe — Apache 2.0.
