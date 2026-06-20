import { test, expect } from '@playwright/test';

// Erreurs console attendues hors ligne / sans vraie webcam : on les tolère, le
// but du smoke test est de détecter un crash de l'app, pas un échec réseau.
const TOLERATED = [
  /mediapipe/i,
  /hand_landmarker/i,
  /getUserMedia/i,
  /camera/i,
  /CORS/i,
  /Failed to fetch/i,
];

test('le chemin non-VR démarre : page chargée, canvas rendu, aucune exception JS', async ({
  page,
}) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', (e) => pageErrors.push(e.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto('/');

  // le canvas principal de la scène 3D est présent et a une taille réelle
  const canvas = page.locator('canvas#scene');
  await expect(canvas).toBeVisible();
  const box = await canvas.boundingBox();
  expect(box?.width ?? 0).toBeGreaterThan(0);
  expect(box?.height ?? 0).toBeGreaterThan(0);

  // le HUD est rendu (titre Jarvis présent)
  await expect(page.locator('#title')).toContainText('J.A.R.V.I.S');

  // laisse tourner quelques frames de la boucle de rendu
  await page.waitForTimeout(2500);

  // aucune exception JS non rattrapée (vrai signal de régression)
  expect(pageErrors, `exceptions JS: ${pageErrors.join(' | ')}`).toHaveLength(0);

  // aucune erreur console inattendue (les échecs webcam/réseau sont tolérés)
  const unexpected = consoleErrors.filter((e) => !TOLERATED.some((re) => re.test(e)));
  expect(unexpected, `erreurs console inattendues: ${unexpected.join(' | ')}`).toHaveLength(0);
});
