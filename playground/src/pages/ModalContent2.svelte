<script module>
  import AppLayout from '../layout.svelte'
  export const layout = AppLayout
</script>

<div class="celebrate">
  <h2>🎉 Great Success!</h2>
  <p>You just navigated <strong>within a modal</strong>. Inertia X loaded this page inside the same modal overlay.</p>

  <div class="try-it">
    <h3>Now Try This</h3>
    <p>Press your browser's <strong>back button</strong> to return to the previous page. Inertia's scroll restoration will drop you right where you left off — same scroll position, same state. Then press <strong>forward</strong> to come back here.</p>
    <p class="hint">← Back button is in your browser chrome, top left</p>
  </div>

</div>

<style>
  .celebrate {
    padding: 1.5rem;
  }

  .celebrate h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .celebrate p {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
  }

  .try-it {
    background: linear-gradient(135deg, rgba(88, 166, 255, 0.12), rgba(188, 140, 255, 0.1));
    border: 1px solid rgba(88, 166, 255, 0.25);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem auto;
    max-width: 440px;
    text-align: left;
  }

  .try-it h3 {
    margin-top: 0;
    color: #58a6ff;
  }

  .try-it p {
    margin-bottom: 0.5rem;
  }

  .hint {
    margin-top: 0.75rem !important;
    font-size: 0.8rem !important;
    color: #484f58 !important;
  }

  .feature-list {
    text-align: left;
    max-width: 400px;
    margin: 1.5rem auto 0;
  }
</style>