import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://warrenjackson.com',
  redirects: {
    '/admin': '/admin/index.html',
  },
});
