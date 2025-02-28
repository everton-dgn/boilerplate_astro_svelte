import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte';

export default defineConfig({
  experimental: {
    serializeConfig: true
  },
  trailingSlash: 'always',
  security: {
    checkOrigin: true
  },
  publicDir: 'public',
  // site: 'https://example.com',
  prefetch: {
    prefetchAll: false
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [svelte()],
  output: 'static'
})