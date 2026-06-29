<script module>
  import AppLayout from '../layout.svelte'
  export const layout = AppLayout
</script>

<script>
  import { modal } from 'inertiax-ui'
  import { toast, Toaster } from 'svelte-sonner'
</script>

<Toaster />

<section class="demo-section">
  <h2>Modal</h2>
  <p class="subtitle">Display any Inertia X page inside a modal overlay. Works as a bottom sheet on mobile, centered dialog on desktop.</p>

  <div class="demo-block">
    <div class="demo-result">
      <a use:modal={{ onclose: () => toast.success('Modal closed!') }} href="/modal-content.json" class="try-btn">
        Open Modal ↗
      </a>
    </div>

    <div class="demo-row">
      <div class="demo-col">
        <h3 class="demo-title">modal action</h3>
        <p class="demo-desc">Use the <code>use:modal</code> action on links to open their <code>href</code> in a modal. Pass an object to add options like <code>onclose</code>.</p>
        <div class="demo-code">
          <pre><code><span class="kw">import</span> {`{ modal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>

&lt;<span class="tag">a</span> <span class="attr">href</span>=<span class="str">"/modal-content.json"</span> <span class="attr">use:modal</span>&gt;
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
src: '/modal-content.json'
}`})</code></pre>
        </div>

      </div>

      <div class="demo-col">
        <h3 class="demo-title">onclose callback</h3>
        <p class="demo-desc">Pass <code>onclose</code> to run logic when the modal closes — reload the parent page, reset state, or clean up.</p>
        <div class="demo-code">
          <pre><code><span class="kw">import</span> {`{ createModal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>
<span class="kw">import</span> {`{ router }`} <span class="kw">from</span> <span class="str">'inertiax-svelte'</span>

<span class="fn">createModal</span>({`{
  src: '/profile/edit',
  onclose() {
    router.reload()
  }
}`})</code></pre>
        </div>
        <p class="demo-desc">You can also pass <code>onclose</code> as an option to the <code>use:modal</code> action:</p>
        <div class="demo-code">
          <pre><code><span class="kw">import</span> {`{ router }`} <span class="kw">from</span> <span class="str">'inertiax-svelte'</span>

&lt;<span class="tag">a</span> <span class="attr">href</span>=<span class="str">"/modal-content.json"</span> <span class="attr">use:modal</span>=<span class="fn">&#123;&#123; onclose: router.reload &#125;&#125;</span>&gt;
Open Modal
&lt;/<span class="tag">a</span>&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>



<style>
  .demo-section {
    margin-bottom: 3rem;
  }

  .subtitle {
    color: #8b949e;
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .demo-section h2 {
    font-size: 1.6rem;
    color: #f0f6fc;
    margin-bottom: 0.5rem;
  }

  a {
    color: #58a6ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    .demo-row {
      grid-template-columns: 1fr;
    }
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
    margin-bottom: 1.25rem;
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
    padding: 1.5rem;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
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
