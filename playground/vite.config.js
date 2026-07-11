import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    svelte({
      extensions: ['.svelte', '.svx'],
    }),
    {
      name: 'inertia-json-guard',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url?.startsWith('/') || !req.url.endsWith('.json')) {
            return next()
          }
          if (req.headers['x-inertia']) {
            return next()
          }
          req.url = '/index.html'
          next()
        })
      },
    },
  ],
  resolve: {
    alias: {
      'inertiax-svelte': resolve(__dirname, 'node_modules/inertiax-svelte'),
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
  optimizeDeps: {
    include: ['esm-env'],
  },
  server: {
    headers: {
      'X-Inertia': 'true',
    },
  },
  ssr: {
    noExternal: ['inertiax-ui', 'esm-env'],
  },
})
