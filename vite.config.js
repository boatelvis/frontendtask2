import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig';
import liveReload from 'vite-plugin-live-reload';
import path  from 'path';

export default defineConfig({
  plugins: [
    twig({
    }),
    liveReload(['templates/**/*.twig'], { root: process.cwd() }),
  ],
  root: path.resolve(__dirname),
  build: {
    outDir: './dist',
  },
})
