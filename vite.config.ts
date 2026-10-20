/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // MUI's ESM build imports react-transition-group by directory, which Node can't resolve
  // when externalized, so bundle it into the prerender build.
  ssr: { noExternal: [/^@mui\//, 'react-transition-group'] },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,
    // Same directory-import issue as the SSR build: let Vite transform MUI.
    server: { deps: { inline: [/@mui\//, 'react-transition-group'] } },
  },
})
