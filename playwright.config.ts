import { defineConfig, devices } from '@playwright/test';

// Smoke test du chemin NON-VR (webcam/tactile/desktop) : la VR n'est pas
// testable sans casque. Lance le serveur Vite, charge la page, vérifie le rendu.
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // caméra factice : évite que getUserMedia rejette et fasse échouer le
        // pipeline MediaPipe (on teste le rendu, pas le tracking réel).
        launchOptions: {
          args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
        },
      },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
