import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';
import icons from 'unplugin-icons/vite';

export default defineConfig({
  base: '/transparenzranking.de', // for github pages testing
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    })
  ],
  vite: {
    plugins: [yaml(), icons({ compiler: 'raw' })]
  }
});
