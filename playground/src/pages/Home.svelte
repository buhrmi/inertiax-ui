<script>
  import { modal, createModal } from 'inertiax-ui'
</script>

<main class="playground">
  <h1>Inertia X UI</h1>
  <p class="subtitle">A collection of Svelte components for Inertia X — <a href="https://github.com/buhrmi/inertiax-ui" target="_blank" class="gh-link">GitHub ↗</a></p>

  <section class="demo-section">
    <h2>Modals</h2>

    <div class="demo-block">
      <div class="demo-row">
        <div class="demo-left">
          <div class="demo-col">
            <h3 class="demo-title">modal action</h3>
            <p class="demo-desc">Use the <code>use:modal</code> action on links to open their <code>href</code> in a modal — no JavaScript handler needed.</p>
            <div class="demo-code">
              <pre><code><span class="kw">import</span> {`{ modal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>

&lt;<span class="tag">a</span> <span class="attr">href</span>=<span class="str">"/welcome.json"</span> <span class="attr">use:modal</span>&gt;
  Open Modal
&lt;/<span class="tag">a</span>&gt;</code></pre>
            </div>
          </div>

          <div class="demo-col">
            <h3 class="demo-title">createModal</h3>
            <p class="demo-desc">Call <code>createModal</code> programmatically — useful when you need to trigger a modal from an event handler, or any custom logic.</p>
            <div class="demo-code">
              <pre><code><span class="kw">import</span> {`{ createModal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>

<span class="fn">createModal</span>({`{
  src: '/welcome.json'
}`})</code></pre>
            </div>
          </div>
        </div>
        <div class="demo-result">
          <a use:modal href="/welcome.json" class="try-btn">
            Open Modal ↗
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="docs-section">
    <h2>Documentation</h2>
    <p>Full documentation, installation instructions, and source code are available on GitHub.</p>
    <a href="https://github.com/buhrmi/inertiax-ui" target="_blank" class="docs-link">
      View on GitHub ↗
    </a>

    <p class="footnote">Inertia X UI is a work in progress by <a href="https://github.com/buhrmi" target="_blank">buhrmi</a>.</p>
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

  a {
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

  .demo-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .demo-col {
    display: flex;
    flex-direction: column;
  }

  .demo-code {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 10px;
    overflow-x: auto;
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

  /* ---- docs section ---- */

  .docs-section {
    padding: 2rem 0;
    border-top: 1px solid #30363d;
  }

  .docs-section h2 {
    font-size: 1.2rem;
    color: #f0f6fc;
    margin-bottom: 0.5rem;
  }

  .docs-section p {
    color: #8b949e;
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }

  .docs-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.6rem 1.5rem;
    background: #21262d;
    border: 1px solid #30363d;
    border-radius: 8px;
    color: #e6edf3;
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s;
  }

  .docs-link:hover {
    background: #30363d;
    border-color: #58a6ff;
  }

  .footnote {
    margin-top: 1.5rem;
    color: #484f58;
    font-size: 0.8rem;
  }

  .footnote a {
    color: #8b949e;
    text-decoration: none;
  }

  .footnote a:hover {
    color: #58a6ff;
    text-decoration: underline;
  }
</style>
