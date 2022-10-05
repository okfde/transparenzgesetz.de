import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  site: 'https://transparenzgesetz.de',
  integrations: [
    tailwind({
      config: { applyBaseStyles: false }
    })
  ],
  vite: {
    plugins: [yaml()]
  }
});
