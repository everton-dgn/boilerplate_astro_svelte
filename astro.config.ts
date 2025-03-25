import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  experimental: {
    serializeConfig: true
  },
  trailingSlash: 'always',
  publicDir: 'public',
  // site: 'https://example.com',
  prefetch: {
    prefetchAll: false
  },
  vite: {
    plugins: [
      Icons({
        compiler: 'svelte',
        autoInstall: true
      })
    ],
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [svelte()],
  output: 'static'
})
