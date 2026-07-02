<script module>
  import AppLayout from '../layout.svelte'
  export const layout = AppLayout
</script>

<script>
  const { onsave, close } = $props()
  import { useRemember } from "inertiax-svelte"
  let data = useRemember({name: ""})
</script>

<div class="celebrate">
  <h2>🎉 Great Success!</h2>
  <p>You just navigated <strong>within a modal</strong>. Inertia X loaded this page inside the same modal overlay and can remember state inside each frame.</p>

  <div class="try-it">
    <h3>Now Try This</h3>
    <input type="text" placeholder="Type something here..." bind:value={data.name} />
    <p>Press your browser's <strong>back button</strong> to return to the previous page. Inertia remembers frame state, so when you go <strong>back</strong> and then <strong>forward</strong>, your text and scroll position are restored right where you left them.</p>
    <p class="hint">← Back button is in your browser chrome, top left</p>
  </div>

  <button class="secondary btn" onclick={() => close()}>Cancel</button>
  <button class="primary btn" onclick={() => onsave(data.name, close)}>Save</button>
</div>

<style>
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    margin-right: 0.5rem;
  }

  .celebrate {
    padding: 1.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #484f58;
    background-color: #161b22;
    color: #c9d1d9;
    margin-bottom: 0.5rem;
  }

  .primary {
    background-color: #58a6ff;
    color: white;
  }
  .secondary {
    background-color: #21262d;
    color: #8b949e;
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