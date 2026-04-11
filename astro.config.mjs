import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://gauss200.github.io',
  redirects: {
    '/admin': '/admin/index.html',
  },
});
