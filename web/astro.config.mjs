import { defineConfig } from 'astro/config';

const GITHUB_USERNAME = 'aidenberzins';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${GITHUB_USERNAME}.github.io`,
  // root: './web',
});
