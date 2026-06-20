/**
 * Couche VR/WebXR (casques via navigateur, ex. Quest Browser). Barrel : API
 * publique consommée par les mondes et main.ts. Détails répartis dans
 * state / hands / helpPanel / rig / render / session.
 */
export { xrHandState } from './state';
export { xrWorldRay, aimRaycaster, xrRender } from './render';
export { getXRRig } from './rig';
export { toggleVRHelp, showVRHelp, setVRWorldName } from './helpPanel';
export { setupVR } from './session';
