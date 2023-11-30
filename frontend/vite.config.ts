import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// error on use in stackblitz environment
// import react from '@vitejs/plugin-react-swc';

import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgProps: {
          focusable: '{false}',
        },
      },
    }),
  ],
  build: {
    outDir: "../src/main/resources/static"
  }
});

