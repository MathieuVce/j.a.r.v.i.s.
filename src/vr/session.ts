import * as THREE from 'three';
import { showVRHelp } from './helpPanel';

/** Branche le bouton « LANCER EN VR » ; le laisse caché si pas de casque. */
export function setupVR(
  renderer: THREE.WebGLRenderer,
  button: HTMLButtonElement,
  onError: (message: string) => void,
): void {
  const xr = navigator.xr;
  if (!xr) return;
  xr.isSessionSupported('immersive-vr')
    .then((ok) => {
      if (ok) button.classList.remove('hidden');
    })
    .catch(() => {});

  let session: XRSession | null = null;
  button.addEventListener('click', async () => {
    if (session) {
      void session.end();
      return;
    }
    try {
      session = await xr.requestSession('immersive-vr', {
        optionalFeatures: ['local-floor', 'hand-tracking'],
      });
      session.addEventListener('end', () => {
        session = null;
        button.textContent = '◎ LANCER EN VR';
      });
      await renderer.xr.setSession(session);
      button.textContent = '◎ QUITTER LA VR';
      showVRHelp(14000); // démo rapide des commandes à l'entrée en VR
    } catch (err) {
      console.error(err);
      session = null;
      onError('SESSION VR REFUSÉE · VÉRIFIE LE CASQUE');
    }
  });
}
