<script module>
  import AppLayout from '../layout.svelte'
  export const layout = AppLayout
</script>

<h2>Getting Started</h2>

<h3>What is Inertia.js?</h3>
<p><a href="https://inertiajs.com/">Inertia.js</a> lets you build single-page apps using classic server-side routing and controllers — no API needed. You write server-rendered pages like you always have, and Inertia handles the client-side navigation, component swapping, and history management. Think of it as the glue between your server-side framework (Laravel, Rails, etc.) and your Svelte components.</p>

<h3>What does Inertia X add?</h3>
<p>Inertia X is a fork of Inertia.js that adds several features to the Svelte adapter:</p>
<ul class="feature-list">
  <li><strong>&lt;Frame&gt;</strong> — multiple independent Inertia page regions on the same document. Each frame has its own router, history, and page state. Use cases: modals, sidebars, slide-out panels, multi-pane layouts.</li>
  <li><strong>Global click handler</strong> — plain <code>&lt;a&gt;</code> clicks inside a frame are automatically intercepted and turned into frame-scoped visits. No <code>&lt;Link&gt;</code> component needed.</li>
  <li><strong>visitOptions</strong> — set default visit behavior per frame (replace vs push, scroll preservation, URL updates).</li>
  <li><strong>History-aware mount</strong> — frames restore their previous page and scroll position from the browser history stack on mount, surviving reloads and remounts.</li>
</ul>

<h3>What is Inertia X UI?</h3>
<p>Inertia X UI is a companion UI library featuring Svelte components built on Inertia X. It provides ready-made patterns like modals, detail views, and overlays — all integrated with the browser's Navigation API for back/forward support out of the box.</p>

<h3>Quick Setup</h3>
<p>Install the package:</p>
<pre><code>npm install inertiax-ui</code></pre>

<p>Import a theme and the components you need:</p>
<pre><code>import 'inertiax-ui/dark.css'
import {`{ createModal, modal }`} from 'inertiax-ui'</code></pre>

<h3>Opening a Modal</h3>
<p>The <code>createModal</code> function opens any Inertia X page in a modal overlay:</p>
<pre><code>createModal({`{ src: '/welcome.json' }`})</code></pre>

<p>The <code>use:modal</code> action does the same from an anchor tag — no event handler needed:</p>
<pre><code>&lt;a href="/welcome.json" use:modal&gt;Open Modal&lt;/a&gt;</code></pre>

<h3>Styling</h3>
<p>Inertia X UI ships with a <code>dark.css</code> theme. Override any CSS custom property or write your own theme from scratch. The key classes to target:</p>

<ul class="class-list">
  <li><code>.inx-modal_wrapper</code> — full-screen overlay container</li>
  <li><code>.inx-modal_bg</code> — clickable backdrop</li>
  <li><code>.inx-modal</code> — the modal panel</li>
  <li><code>.inx-spinner</code> — loading indicator</li>
</ul>

<p>Svelte injects a <code>--progress</code> CSS variable (0–1) during transitions — use it with <code>transform</code> or <code>opacity</code> for custom animations.</p>
