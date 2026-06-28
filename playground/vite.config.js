import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      'inertiax-svelte': resolve(__dirname, 'node_modules/inertiax-svelte'),
    },
  },
  server: {
    headers: {
      'X-Inertia': 'true',
    },
  },
  ssr: {
    noExternal: ['inertiax-ui'],
  },
})
