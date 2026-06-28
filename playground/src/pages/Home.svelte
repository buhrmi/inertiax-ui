<script>
  import { modal, createModal } from 'inertiax-ui'
</script>

<main class="playground">
  <h1>Inertia X UI</h1>
  <p class="subtitle">A collection of Svelte components for Inertia X — <a href="https://github.com/buhrmi/inertiax-ui" target="_blank" class="gh-link">GitHub ↗</a></p>

  <section class="demo-section">
    <h2>Modals</h2>

    <div class="demo-block">
      <h3 class="demo-title">modal action</h3>
      <p class="demo-desc">Use the <code>use:modal</code> action on links to open their <code>href</code> in a modal — no JavaScript handler needed.</p>
      <div class="demo-row">
        <div class="demo-code">
          <pre><code><span class="kw">import</span> {`{ modal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>

&lt;<span class="tag">a</span> <span class="attr">href</span>=<span class="str">"/welcome.json"</span> <span class="attr">use:modal</span>&gt;
  Open Modal
&lt;/<span class="tag">a</span>&gt;</code></pre>
        </div>
        <div class="demo-result">
          <a use:modal href="/welcome.json" class="try-btn">
            Open Modal ↗
          </a>
        </div>
      </div>
    </div>

    <div class="demo-block">
      <h3 class="demo-title">createModal</h3>
      <p class="demo-desc">Call <code>createModal</code> programmatically — useful when you need to trigger a modal from an event handler, or any custom logic.</p>
      <div class="demo-row">
        <div class="demo-code">
          <pre><code><span class="kw">import</span> {`{ createModal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>

<span class="fn">createModal</span>({`{
  src: '/scrollable.json'
}`})</code></pre>
        </div>
        <div class="demo-result">
          <button class="try-btn" onclick={() => createModal({ src: '/scrollable.json' })}>
            Open Scrollable Modal ↗
          </button>
        </div>
      </div>
    </div>
  </section>


</main>

<style>
  .playground {
    padding: 3rem 2rem;
    max-width: 780px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    background: linear-gradient(135deg, #58a6ff, #bc8cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    color: #8b949e;
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .subtitle a {
    color: #58a6ff;
    text-decoration: none;
  }

  .subtitle a:hover {
    text-decoration: underline;
  }

  .gh-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.15em 0.6em;
    background: rgba(88, 166, 255, 0.1);
    border: 1px solid rgba(88, 166, 255, 0.2);
    border-radius: 6px;
    font-size: 0.85rem;
  }

  .gh-link:hover {
    background: rgba(88, 166, 255, 0.18);
    text-decoration: none;
  }

  /* ---- demo section ---- */

  .demo-section {
    margin-bottom: 3rem;
  }

  .demo-section h2 {
    font-size: 1.4rem;
    color: #f0f6fc;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #30363d;
  }

  .demo-block + .demo-block {
    margin-top: 2rem;
  }

  .demo-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #f0f6fc;
    margin: 0 0 0.35rem;
  }

  .demo-desc {
    font-size: 0.8rem;
    color: #8b949e;
    margin: 0 0 0.75rem;
    line-height: 1.5;
  }

  .demo-desc code {
    color: #d2a8ff;
    background: rgba(210, 168, 255, 0.1);
    padding: 0.1em 0.35em;
    border-radius: 4px;
    font-size: 0.85em;
  }

  .demo-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 640px) {
    .demo-row {
      grid-template-columns: 1fr;
    }
  }

  .demo-code {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 10px;
    overflow-x: auto;
    display: flex;
    align-items: center;
  }

  .demo-code pre {
    padding: 1.25rem 1.5rem;
    margin: 0;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
    font-size: 0.85rem;
    line-height: 1.7;
    color: #e6edf3;
  }

  .demo-code code {
    font-family: inherit;
  }

  .demo-code .kw { color: #ff7b72; }
  .demo-code .fn { color: #d2a8ff; }
  .demo-code .str { color: #a5d6ff; }
  .demo-code .tag { color: #7ee787; }
  .demo-code .attr { color: #79c0ff; }

  .demo-result {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 10px;
    min-height: 120px;
  }

  .try-btn {
    padding: 0.75rem 1.75rem;
    background: #238636;
    border: 1px solid #2ea043;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    transition: background 0.2s, transform 0.1s;
  }

  .try-btn:hover {
    background: #2ea043;
  }

  .try-btn:active {
    transform: scale(0.97);
  }
</style>
