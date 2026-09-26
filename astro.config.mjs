// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import reveal from 'astro-reveal';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nicopicotto.dev',
  output: 'static',
  integrations: [react(), reveal({ mode: 'observer' }), sitemap()],
  markdown: {
    // Colors come from --astro-code-* in src/styles/globals.css
    shikiConfig: { theme: 'css-variables' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
