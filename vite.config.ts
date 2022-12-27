import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import StylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    StylelintPlugin({
      fix: true,
    }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    open: '/index.html',
    port: 8000,
  },
});
