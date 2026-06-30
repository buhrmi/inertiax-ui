<script module>
  import AppLayout from '../layout.svelte'
  export const layout = AppLayout
</script>

<script>
  import { modal } from 'inertiax-ui'
  import { toast, Toaster } from 'svelte-sonner'
</script>

<Toaster richColors />

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
        <h3 class="demo-title">Creating and Closing a Modal</h3>
        <p class="demo-desc">Call <code>createModal</code> to create a modal. It returns a function that can be called to close the modal.</p>
        <div class="demo-code">
<pre><code><span class="kw">import</span> {`{ createModal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>

<span class="cmt">// createModal returns a close function</span>
<span class="kw">const</span> closeModal = <span class="fn">createModal</span>({`{
  src: '/modal-content.json'
}`})

<span class="cmt">// Call it to close the modal</span>
<span class="fn">closeModal</span>()</code></pre>
        </div>
      
      </div>

      <div class="demo-col">
        <h3 class="demo-title">Modal Action</h3>
        <p class="demo-desc">You can also use the <code>use:modal</code> action, which passes options to <code>createModal</code> internally.</p>
        <div class="demo-code">
          <pre><code><span class="kw">import</span> {`{ modal }`} <span class="kw">from</span> <span class="str">'inertiax-ui'</span>

&lt;<span class="tag">a</span> <span class="attr">href</span>=<span class="str">"/modal-content.json"</span> <span class="attr">use:modal</span>&gt;
  Open Modal
&lt;/<span class="tag">a</span>&gt;</code></pre>

      </div>
        
      </div>


      <div class="demo-col">
        <h3 class="demo-title">onclose callback</h3>
        <p class="demo-desc">Modals accept an <code>onclose</code> callback. This callback is invoked when the modal is closed.</p>
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

      <div class="demo-col">
        <h3 class="demo-title">The close() function</h3>
        <p class="demo-desc">Modal pages receive a <code>close</code> function via <code>$props()</code>. Call <code>close()</code> to navigate back in history and unmount. Call <code>close(false)</code> to just unmount without affecting history — forward navigation won't re-open it.</p>
        <div class="demo-code">
          <pre><code><span class="kw">const</span> {`{ close }`} = <span class="fn">$props</span>()

<span class="cmt">// Navigate back, then unmount</span>
&lt;<span class="tag">button</span> <span class="attr">onclick</span>={`{close}`}&gt;Close&lt;/<span class="tag">button</span>&gt;

<span class="cmt">// Just unmount, don't touch history</span>
&lt;<span class="tag">button</span> <span class="attr">onclick</span>={`{() => close(false)}`}&gt;Close&lt;/<span class="tag">button</span>&gt;</code></pre>
        </div>
      </div>

      <div class="demo-col">
        <h3 class="demo-title">Parent Communication</h3>
        <p class="demo-desc">All props passed to <code>createModal</code> are forwarded to the page component. Pass callbacks to let the modal communicate back.</p>
        <div class="demo-code">
          <pre><code><span class="cmt">// Parent: pass a callback as a prop</span>
<span class="fn">createModal</span>({`{
  src: '/modal-content.json',
  onSave: () => { `}<span class="cmt">/* do something cool */</span>{` }
}`})


<span class="cmt">// Modal page: receive it via $props()</span>
<span class="kw">const</span> {`{ onSave, close }`} = <span class="fn">$props</span>()

&lt;<span class="tag">button</span> <span class="attr">onclick</span>={`{onSave}`}&gt;
  Save
&lt;/<span class="tag">button</span>&gt;</code></pre>
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
  .demo-code .cmt { color: #8b949e; font-style: italic; }

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
