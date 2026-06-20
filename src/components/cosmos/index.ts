// Décors « espace vivant » du monde solaire (galaxies, trou noir, ciel profond,
// stations, champ de saut). Barrel : API publique consommée par worlds/universe.
// Découpé par sous-système — voir chaque module pour les détails.
export { type Animated, softParticle } from './_shared';
export { makeSpaceEnvironment } from './environment';
export { type GalaxyOpts, makeGalaxy } from './galaxies';
export { makeBlackHole } from './blackHole';
export { makeMilkyWay, makeStarClusters } from './deepSky';
export { type StationKind, makeStation } from './stations';
export { type WarpField, makeWarpField } from './warp';
