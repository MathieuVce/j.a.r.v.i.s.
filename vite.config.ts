import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// `npm run dev:vr` : HTTPS auto-signé + écoute sur le réseau local, pour
// tester WebXR depuis le navigateur du casque (contexte sécurisé obligatoire).
export default defineConfig(({ mode }) => ({
  plugins: mode === 'vr' ? [basicSsl()] : [],
}));
