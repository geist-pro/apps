// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// apps.geist.pro: GitHub Pages, repository geist-pro/apps, custom domain (public/CNAME).
export default defineConfig({
  site: 'https://apps.geist.pro',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/privacy/') && !page.includes('/404') })],
});
