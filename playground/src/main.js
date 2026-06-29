import './app.css'
import 'inertiax-ui/dark.css'
import { createInertiaApp } from 'inertiax-svelte'
import { mount } from 'svelte'

const pages = import.meta.glob('./pages/*.svelte', { eager: true })

const routes = {
  '/welcome.json':  'Welcome',
  '/modal.json':    'Modal',
}

function initialPage() {
  const url = window.location.pathname || '/welcome.json'
  const component = routes[url]
  if (!component) {
    window.history.replaceState({}, '', '/welcome.json')
    return { component: 'Welcome', url: '/welcome.json' }
  }
  return { component, url }
}

createInertiaApp({
  resolve: (name) => {
    const key = `./pages/${name}.svelte`
    const mod = pages[key]
    if (!mod) throw new Error(`Page not found: ${name}`)
    return mod
  },
  page: {
    ...initialPage(),
    props: { errors: {} },
    version: null,
    rescuedProps: [],
    flash: {},
    rememberedState: {},
  },
  setup({ el, App, props }) {
    mount(App, { target: el, props })
  },
})
