import { getViteConfig } from 'astro/config'

const config = getViteConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,svelte}'],
      exclude: ['src/assets/', 'src/tests/']
    },
    globals: true,
    passWithNoTests: true,
    clearMocks: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/__tests__/*.test.ts'],
    exclude: ['**/node_modules/**', '**/playwright/**'],
    pool: 'forks',
    poolOptions: {
      forks: {
        isolate: false
      }
    }
  },
  resolve: {
    conditions: ['development', 'browser']
  }
})

export default config
