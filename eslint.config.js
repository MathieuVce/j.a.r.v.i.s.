import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

// Config plate (ESLint 10). Objectif : filet de sécurité léger, non bloquant,
// qui complète `tsc` sans dupliquer son boulot ni noyer sous le bruit.
export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'dist-ssr/**',
      'node_modules/**',
      '.vite/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  ...tseslint.configs.recommended,
  prettier, // désactive les règles de style qui entrent en conflit avec Prettier
  {
    rules: {
      // tsc gère déjà les variables inutilisées (noUnusedLocals) : on évite le
      // doublon, tout en tolérant les args préfixés _ (signatures d'interface).
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    // CONVENTION PROJET (texte affiché uniquement, donc limité au code source) :
    // pas de tiret cadratin (U+2014) ni demi-cadratin (U+2013) dans les chaînes
    // affichées (titres, labels, HUD, panneaux). Utiliser /, le point median,
    // les points de suspension ou des points de conduite. Le tiret simple reste
    // legitime dans le code (chemins, kebab-case) donc non couvert. Voir CLAUDE.md.
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'Literal[value=/[\\u2013\\u2014]/]',
          message:
            'Tiret cadratin/demi-cadratin interdit dans une chaine affichee. Utiliser /, point median ou points.',
        },
        {
          selector: 'TemplateElement[value.raw=/[\\u2013\\u2014]/]',
          message:
            'Tiret cadratin/demi-cadratin interdit dans un template affiche. Utiliser /, point median ou points.',
        },
      ],
    },
  },
);
