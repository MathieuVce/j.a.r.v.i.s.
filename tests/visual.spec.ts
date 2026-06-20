import { test, expect } from '@playwright/test';

// Régression visuelle des 3 mondes (chemin non-VR). Math.random est seedé pour
// figer la construction de scène ; on capture une frame après un délai fixe et
// on compare avec une tolérance (l'animation continue d'avancer un peu).
// Snapshots propres à la PLATEFORME (darwin/linux) : `npm run test:visual:update`
// pour (re)créer la base. Hors CI tant que des baselines Linux ne sont pas commitées.

const WORLDS = ['map', 'lightshow', 'universe'] as const; // ordre WORLD_ORDER

test('rendu des 3 mondes', async ({ page }) => {
  test.setTimeout(90_000); // MediaPipe (CDN) + 3 mondes + captures
  await page.addInitScript(() => {
    let s = 1234567; // LCG déterministe -> construction reproductible
    Math.random = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  });
  await page.goto('/');
  const canvas = page.locator('canvas#scene');
  await expect(canvas).toBeVisible();

  for (let i = 0; i < WORLDS.length; i++) {
    // dispatchEvent : déclenche le handler même si un panneau recouvre le bouton
    if (i > 0) await page.locator('#world-toggle').dispatchEvent('click');
    await page.waitForTimeout(1200);
    expect(await canvas.screenshot()).toMatchSnapshot(`world-${i}-${WORLDS[i]}.png`, {
      maxDiffPixelRatio: 0.2,
    });
  }
});
