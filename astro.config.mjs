import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    })
  ],
  vite: {
    plugins: [yaml()]
  }
});
