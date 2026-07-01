import './app.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'inertiax-ui/dark.css'
import { createInertiaApp } from 'inertiax-svelte'
import { mount } from 'svelte'
import { createModal } from 'inertiax-ui'

window.__test__ = { createModal }

const pages = import.meta.glob('./pages/*.svelte', { eager: true })
const mdsvexPages = import.meta.glob('./pages/*.svx', { eager: true })
const pageObjects = import.meta.glob('../public/*.json', { eager: true })

// Build route map from JSON page objects
const routes = Object.fromEntries(
  Object.values(pageObjects).map((p) => [p.url, p.component])
)

function initialPage() {
  const url = window.location.pathname || '/welcome.json'
  const component = routes[url]
  if (!component) {
    window.history.replaceState({}, '', '/welcome.json')
    return { component: routes['/welcome.json'] || 'Welcome', url: '/welcome.json' }
  }
  return { component, url }
}

createInertiaApp({
  resolve: (name) => {
    const svelteKey = `./pages/${name}.svelte`
    const svxKey = `./pages/${name}.svx`
    const mod = pages[svelteKey] || mdsvexPages[svxKey]
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
