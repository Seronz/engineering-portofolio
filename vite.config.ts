import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// `BASE_URL` is set by the GitHub Pages workflow to match the repository path
// (for example `/engineering-portofolio/`). Local dev falls back to `/`.
export default defineConfig({
  base: process.env.BASE_URL ?? '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // CSS is not processed in tests, so responsive rules (which jsdom cannot
    // evaluate) never hide content from the accessibility tree.
    css: false,
  },
})
