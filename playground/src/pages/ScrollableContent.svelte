<script>
</script>

<div class="page">
  <h2>Scrollable Modal Content</h2>
  <p>This modal contains longer content to demonstrate scrolling behavior.</p>

  <h3>Getting Started</h3>
  <p>Inertia X UI provides a set of Svelte components for building modal interfaces. The Modal component displays an Inertia X Frame within a modal overlay, with built-in support for browser history navigation.</p>

  <h3>Installation</h3>
  <p>Install the package via npm and import the CSS style you'd like to use. The default dark.css displays the modal as a bottom sheet on mobile and centered on desktop.</p>

  <h3>Creating Modals</h3>
  <p>Use the createModal function to programmatically open modals. Pass any props you'd like — they'll be forwarded to the Frame component along with a close function.</p>

  <h3>Navigation</h3>
  <p>The modal integrates with the browser's Navigation API. Pressing the browser back button will close the modal and return to the previous state. Forward navigation re-opens it.</p>

  <h3>Customization</h3>
  <p>Bring your own CSS for full styling control. Target the .inx-modal_wrapper, .inx-modal_bg, and .inx-modal classes. A --progress CSS variable is available for custom transitions.</p>

  <p class="scroll-hint">Scroll down for more →</p>
  <p class="end-marker">(end of scrollable content)</p>
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
  .scroll-hint {
    margin-top: 1.5rem;
    font-size: 0.85rem;
    color: #58a6ff;
  }
  .end-marker {
    margin-bottom: 3rem;
    color: #484f58;
  }
</style>
