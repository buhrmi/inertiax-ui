<script>
</script>

<div class="page">
  <h2>Scrollable Modal Content</h2>
  <p>This modal is capped at 90% of the viewport height and scrolls internally when content overflows.</p>

  <h3>Getting Started</h3>
  <p>Inertia X UI provides a set of Svelte components for building modal interfaces. The Modal component displays an Inertia X Frame within a modal overlay, with built-in support for browser history navigation.</p>
  <p>Install the package via npm and import the CSS style you'd like to use. The default dark.css displays the modal as a bottom sheet on mobile and centered on desktop.</p>

  <h3>Creating Modals</h3>
  <p>Use the <code>createModal</code> function to programmatically open modals from any event handler, button click, or custom logic. All passed props are forwarded to the Frame component.</p>
  <p>Alternatively, use the <code>use:modal</code> action on anchor tags — it automatically opens the link's <code>href</code> in a modal without writing any JavaScript.</p>

  <h3>Navigation &amp; History</h3>
  <p>The modal integrates with the browser's Navigation API. Pressing the browser back button closes the modal and returns to the previous state. Forward navigation re-opens it — no manual state management needed.</p>
  <p>Calling <code>close()</code> inside the modal triggers a history traversal. You can also call <code>close(false)</code> to close without affecting history, preventing forward navigation from re-opening the modal.</p>

  <h3>Styling</h3>
  <p>Inertia X UI ships with a default dark.css that renders the modal as a bottom sheet on mobile and centered on desktop. The key CSS classes to target for customization:</p>

  <ul class="class-list">
    <li><code>.inx-modal_wrapper</code> — full-screen overlay container</li>
    <li><code>.inx-modal_bg</code> — clickable backdrop</li>
    <li><code>.inx-modal</code> — the modal panel itself</li>
    <li><code>.inx-spinner</code> — loading animation</li>
  </ul>

  <p>Svelte injects a <code>--progress</code> CSS variable (0 to 1) during the transition. Use it to create custom in/out animations with <code>transform</code> or <code>opacity</code>.</p>

  <h3>Under the Hood</h3>
  <p>The Modal uses <code>history.pushState</code> to create a new history entry when opened. A <code>navigate</code> event listener watches for browser back/forward navigation and mounts or unmounts the modal accordingly. This means the modal behaves like a native page — bookmarkable, shareable, and fully integrated with browser navigation.</p>

  <p class="end-marker">— end of scrollable content —</p>
</div>

<style>
  .page {
    color: #e6edf3;
    padding: 2rem 1.5rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #f0f6fc;
  }
  h3 {
    font-size: 1.1rem;
    color: #f0f6fc;
    margin: 1.5rem 0 0.5rem;
  }
  p {
    color: #8b949e;
    line-height: 1.7;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }
  code {
    color: #d2a8ff;
    background: rgba(210, 168, 255, 0.1);
    padding: 0.1em 0.35em;
    border-radius: 4px;
    font-size: 0.85em;
  }
  .class-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 1rem;
  }
  .class-list li {
    padding: 0.5rem 0.75rem;
    color: #8b949e;
    font-size: 0.9rem;
    border-left: 2px solid #30363d;
    margin-bottom: 0.25rem;
  }
  .class-list code {
    color: #a5d6ff;
    background: transparent;
    padding: 0;
    font-size: 0.9em;
  }
  .end-marker {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #484f58;
    font-size: 0.85rem;
    text-align: center;
  }
</style>
