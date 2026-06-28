import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      // Resolve inertiax-svelte from the playground when imported
      // from the symlinked inertiax-ui parent package
      'inertiax-svelte': resolve(__dirname, 'node_modules/inertiax-svelte'),
    },
  },
  ssr: {
    noExternal: ['inertiax-ui'],
  },
})
