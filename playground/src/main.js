import './app.css'
import 'inertiax-ui/dark.css'
import { createInertiaApp } from 'inertiax-svelte'

const pages = import.meta.glob('./pages/*.svelte')

createInertiaApp({
  resolve: (name) => {
    const key = `./pages/${name}.svelte`
    const importer = pages[key]
    if (!importer) throw new Error(`Page not found: ${name}`)
    return importer()
  },
  page: {
    component: 'Home',
    props: { errors: {} },
    url: '/',
    version: null,
    rescuedProps: [],
    flash: {},
    rememberedState: {},
  }
})
