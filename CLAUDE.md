# CLAUDE.md — Jarvis

Interface 3D immersive (Three.js / WebXR). Trois « mondes » pilotés par les mains
(webcam MediaPipe), le tactile, ou les manettes VR. 100 % client, pas de backend.

## Stack & commandes

- **Three.js r170**, **TypeScript 5.6 strict**, **Vite 6**, **MediaPipe tasks-vision**, Web Audio API.
- `npm run dev` — dev local. `npm run dev:vr` — HTTPS auto-signé + LAN pour tester WebXR au casque.
- `npm run build` — `tsc --noEmit && vite build`.
- `npm run lint` (ESLint) · `npm run format` (Prettier, `format:check` pour vérifier) · `npm run test:e2e` (smoke Playwright non-VR).
- Pas de framework UI : DOM brut + Three.js.

**Boucle de vérif après une modif** (rapide, autonome) : `npx tsc --noEmit` puis `npm run lint`. Un **hook** lance déjà `tsc --noEmit` automatiquement après chaque édition `.ts` (voir [.claude/settings.json](.claude/settings.json)) et te renvoie les erreurs. Pour une modif non-VR à valider sans casque : `npm run test:e2e`.

## Comment travailler ici (lis ça avant d'explorer)

- **Langue : commentaires et textes UI en français.** Garde ce style.
- Le `README.md` (à jour) donne la vue d'ensemble produit ; ce fichier est la **carte dev précise** — pour aller droit au bon fichier, utilise la carte ci-dessous.
- Va **directement** au bon fichier via la carte plutôt que de grep large. Les fichiers sont gros et cohésifs (un sujet = un fichier).
- **La VR ne peut pas être testée automatiquement** (il faut un casque). Après une modif VR : compiler, expliquer le comportement attendu, et dire que ça reste à valider au casque.
- Mappings de boutons VR : voir [src/input/xrinput.ts](src/input/xrinput.ts) (source unique) et [src/vr/helpPanel.ts](src/vr/helpPanel.ts) (doc affichée — **à garder synchro** quand tu changes un contrôle).

## Autonomie & économie de tokens

Principe : **agir, se vérifier so i-même, ne demander que les vrais choix produit.**

- **Se vérifier sans déléguer la validation** : boucle `tsc --noEmit` → `npm run lint` → (`npm run test:e2e` si modif non-VR). Le hook `PostToolUse` renvoie déjà les erreurs `tsc` automatiquement après chaque édition `.ts`. Ne conclure « fait » qu'après une vérif **verte**.
- **Décider avec des défauts raisonnables** quand le code ou les conventions tranchent ; réserver les questions à l'utilisateur aux vrais arbitrages produit (UX, comportement attendu), pas à ce qui est vérifiable dans le repo.
- **Lectures ciblées** : lire uniquement la portion utile (offset/limit), pas le fichier entier ; ne pas relire un fichier qu'on vient d'éditer (Edit/Write aurait échoué sinon) ; ne jamais lire/grepper les chemins exclus (section suivante).
- **Aller droit au bon fichier** via la carte d'archi plutôt que de grep large.
- **Paralléliser** les appels d'outils indépendants dans un même tour.
- **Diffs petits et ciblés** ; le reformatage Prettier de masse se committe à part (`chore: format`).
- **Réponses concises :** pas d'intro, pas de politesse, pas de blabla — droit au code/commande. Clore par un **récap de 1 à 3 lignes max** : ce qui a changé + état des vérifs (tsc/lint/build/smoke). Pas de reformulation du diff ni de détails superflus.
- **Modifications minimales (diff-only) :** ne jamais régénérer un fichier entier > 30 lignes. Produire uniquement les blocs modifiés (patch/diff). Ne pas réécrire imports/fonctions inchangés autour.

## Commits

- **Convention de commit :** appliquer strictement la spécification _Conventional Commits_. Tous les messages doivent être en **anglais**, clairs et concis.
  - Format : `<type>(<scope>): <short description>` (ex. `feat(auth): add biometrics login support via TurboModule`).
  - Types autorisés : `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.
- Un hook **pre-commit** (husky + lint-staged) formate/lint les fichiers stagés automatiquement — pas besoin de formater à la main avant de committer.
- Push sur `main` = **déploiement Vercel automatique** : ne pousser sur `main` qu'à la demande explicite de l'utilisateur.

## Fichiers d'exclusion stricts

Définis dans [.claude/settings.json](.claude/settings.json) (`permissions.deny`) — c'est l'équivalent d'un `.claudeignore`.
**Ne jamais lire ni grepper ces chemins** (volumineux, sans intérêt, gros gouffre à tokens) :

- `node_modules/**`, `dist/**`, `dist-ssr/**`, `.vite/**`
- `package-lock.json`, `*.tsbuildinfo`, `*.wasm`, `*.map`

Le [.gitignore](.gitignore) couvre déjà ces artefacts pour le dépôt. Si un type tiers (ex. three.js) est
vraiment nécessaire, demande plutôt que d'explorer `node_modules/`.

## Règles architecturales & comportement de code attendu

Règles à respecter pour toute modif (en plus des « Pièges » plus bas) :

**Architecture**

- **Un sujet = un fichier** ; respecter la séparation des dossiers : `input/` (sources d'entrée), `vr/` (couche WebXR), `worlds/` (mondes), `components/` (briques 3D réutilisables), `audio/`, `screens/` (HUD DOM), `utils/` (helpers).
- Les mondes passent **uniquement** par l'interface `World` ([utils/world.ts](src/utils/world.ts)). Pas de logique de monde dans `main.ts`.
- Toute entrée (webcam / tactile / VR) doit produire le **même `GestureState`** — ne pas court-circuiter ce contrat.
- Réutiliser les helpers de `utils/` (math, composer/bloom, palette, textures) plutôt que dupliquer.

**Textes affichés (titres, labels, HUD, panneaux 3D)**

- **Aucun caractère `-` (tiret / trait d'union), ni `—` / `–`, dans le texte affiché à l'utilisateur.** Utiliser `/`, `·`, `…` ou des points de conduite (`.......`) comme dans les panneaux existants. (Ceci ne concerne pas les commentaires de code.)
- Textes UI et commentaires **en français**.

**Responsivité — mobile ET web hors VR**

- La VR n'est **pas** le seul chemin : le **tactile mobile** et le **web desktop** (webcam) sont des cibles de premier ordre. Toute UI/fonctionnalité doit rester lisible et utilisable sur ces trois supports.
- Penser au redimensionnement : `main.ts` gère `resize` / `orientationchange` / `visualViewport` et un `pixelRatio` réduit sur mobile. Le HUD est du DOM ([screens/hud.ts](src/screens/hud.ts) + [styles/style.css](src/styles/style.css)) → vérifier le rendu à différentes tailles d'écran.
- Valider le chemin **non-VR** avec `npm run dev` (pas seulement le casque) avant de conclure.

**Qualité**

- `npx tsc --noEmit` doit passer (TS strict : `noUnusedLocals` / `noUnusedParameters`). Pas de code mort.

## Architecture

`main.ts` orchestre tout : une seule boucle `renderer.setAnimationLoop` (obligatoire en WebXR),
un registre de mondes uniformisés par l'interface `World`, et le choix de la source d'input.

```
src/
  main.ts                  Point d'entrée : boucle de rendu, registre des mondes, câblage HUD/audio/VR
  utils/world.ts           Interface World { update(state,dt) -> WorldFrame; render; resize; deactivate? }  ← contrat des mondes

  input/                   Produisent tous un GestureState unifié
    tracking.ts            Webcam + inférence MediaPipe (HandLandmarker, GPU)
    gestures.ts            Landmarks -> GestureState (modèle joystick, 2 mains, pince/poing/paume)
    touch.ts               Fallback tactile mobile -> GestureState
    xrinput.ts             Manettes/mains WebXR -> GestureState (+ remplit xrHandState). Mapping boutons ICI.

  vr/                      Couche WebXR (barrel: vr/index.ts)
    state.ts               xrHandState : pos/quat/pinch/fist/gamepads partagés (lu par les mondes)
    session.ts             setupVR : bouton + démarrage session XR
    rig.ts                 getXRRig : ancre le contenu dans l'espace local-floor
    render.ts              xrRender (compose VR/non-VR), raycaster de visée
    hands.ts               marqueurs de mains / lasers
    helpPanel.ts           panneau d'aide 3D (libellés de contrôles par monde)

  worlds/
    map/                   Monde CARTE (défaut)
      globe.ts             Globe terrestre, villes, plongée cinématique (entrée du monde)
      city.ts              Ville OSM 3D (bâtiments Overpass), navigation piétonne
      cityDecor.ts         Décors de ville
      spiderMode.ts        Mode Spider-Man (déplacement/toile/saut)
    universe/              Monde UNIVERS
      Universe.ts          Système solaire : la classe World (gestes, grab/hold, render, warp)
      build.ts             Fabriques bas niveau (buildSun, makePanel, makeComet, SUN_RADIUS…)
      planets-setup.ts     buildPlanets(scene) : construit les 8 planètes (appelé au setup)
      stations-setup.ts    addStations(scene, planets, earth) : stations/sondes/engins errants
      constants.ts         Constantes de réglage (navigation, Lune, prise VR, panneaux)
      types.ts             Types internes (Planet, Site, Warp, Pulse)
      index.ts             barrel
    lightshow/             Monde LIGHT SHOW (musique)
      lightshow.ts         Réacteur audio-visuel : particules, barres, structure, + intègre batterie/jeu
      drums.ts             Batterie VR : baguettes=manettes, pads, sons synthétisés, DrumFrame
      rhythm/              Mode jeu « Drum Hero »
        chart.ts           LANES (voies+couleurs) & partition (BPM, notes)
        game.ts            Logique de jeu/notation
        highway.ts         Autoroute de notes (gemmes, voies)
        scorePanel.ts      Panneau de score 3D

  components/
    planets.ts             SOLAR_SYSTEM (specs), matériaux/atmosphères/anneaux de planètes
    cosmos/                Décors « espace vivant » (barrel index.ts) : _shared, environment,
                           galaxies, blackHole, deepSky, stations, warp
  audio/
    music.ts               Moteur musique : FFT, détection de beat, lecture fichier/URL -> AudioFrame
    audio.ts               Sons UI Jarvis (blip/lock/whoosh)
  screens/hud.ts           HUD DOM : curseurs, labels, panneau Audio Reactor, ordre des mondes (WORLD_ORDER/WORLD_SHORT)
  utils/                   math, composer (bloom), textures, palette (helpers partagés)
  styles/style.css
```

## Flux d'une frame (main.ts `loop`)

1. Source d'input selon le contexte : VR -> `xrInput.update` · tactile -> `touch.update` · sinon webcam -> `gestures.update`.
2. A/B manette = monde suivant/précédent (sauf mode Spider-Man).
3. `world.update(state, dt)` -> `WorldFrame` (contexte HUD, charge, cues audio, whoosh).
4. HUD mis à jour, cues audio joués, `world.render(dt)`.

## Ajouter un monde

Implémenter l'interface `World` ([utils/world.ts](src/utils/world.ts)), l'instancier et l'enregistrer dans le
registre `worlds` de [main.ts](src/main.ts), et l'ajouter à `WORLD_ORDER`/`WORLD_SHORT` ([screens/hud.ts](src/screens/hud.ts)).

## Pièges

> **Journal vivant** : à chaque acquis non évident (gotcha, décision d'archi, piège résolu), ajouter une puce ici plutôt que de le re-déduire à la prochaine session. Garder court et actionnable.

- `setAnimationLoop` (pas `requestAnimationFrame`) : c'est la session casque qui cadence en VR.
- Tout le contenu VR vit dans l'espace **local-floor** (sol y=0, joueur à l'origine, regard -Z). Ne pas incliner le rig (mal de mer).
- Les couleurs des fûts ([drums.ts](src/worlds/lightshow/drums.ts)) et des voies ([rhythm/chart.ts](src/worlds/lightshow/rhythm/chart.ts)) doivent rester **uniques et cohérentes** entre elles.
- `cosmos/stations.ts` (`makeStation`) lit le cache IBL `SPACE_ENV` exporté en _live binding_ ESM par `cosmos/environment.ts` : il faut que `makeSpaceEnvironment()` ait été appelé avant (fait au setup d'Univers) sinon les matériaux métalliques n'ont pas d'envMap.
