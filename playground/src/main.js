import './app.css'
import 'inertiax-ui/dark.css'
import { createInertiaApp } from 'inertiax-svelte'
import { mount } from 'svelte'

const pages = import.meta.glob('./pages/*.svelte', { eager: true })

createInertiaApp({
  resolve: (name) => {
    const key = `./pages/${name}.svelte`
    const mod = pages[key]
    if (!mod) throw new Error(`Page not found: ${name}`)
    return mod
  },
  page: {
    component: 'Modal',
    props: { errors: {} },
    url: '/',
    version: null,
    rescuedProps: [],
    flash: {},
    rememberedState: {},
  },
  setup({ el, App, props }) {
    mount(App, { target: el, props })
  },
})
