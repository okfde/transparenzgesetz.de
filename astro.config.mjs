import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://okfde.github.io',
  base: '/transparenzgesetz.de', // for github pages testing
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    })
  ],
  vite: {
    plugins: [yaml()]
  }
});
