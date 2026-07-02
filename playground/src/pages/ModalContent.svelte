<script>
  import { useRemember } from 'inertiax-svelte'

  const { close } = $props()
  let data = useRemember({ name: '' })
</script>

<main class="modal-content">
  <p class="chip">Step 1 of 2</p>
  <h2>Welcome to Inertia X UI</h2>
  <p>This page is rendered inside an Inertia X Frame, so the modal can navigate like a small app while staying in place.</p>

  <div class="callout">
    <h3>Enter Some Text</h3>
    <input type="text" placeholder="Type here, then go to step 2..." bind:value={data.name} />
    <p>Continue to the next page, then use browser back/forward. This value should remain available across modal navigation.</p>
  </div>

  <p class="footnote">You can close with the backdrop or the close button in the modal shell.</p>

  <nav class="page-nav">
    <a href="/modal-content-2.json" class="nav-link">Next Page →</a>
  </nav>
</main>

<style>
  .modal-content {
    padding: 1.2rem;
  }

  .chip {
    display: inline-flex;
    margin: 0 0 0.65rem;
    border-radius: 999px;
    border: 1px solid #4f5e98;
    background: #1d2550;
    color: #cad4ff;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.2rem 0.56rem;
  }

  .footnote {
    margin-top: 1rem;
    font-size: 0.85rem;
    color: #8e9ba8;
  }

  input {
    width: 100%;
    padding: 0.58rem 0.65rem;
    border-radius: 8px;
    border: 1px solid #33414f;
    background-color: #0f141b;
    color: #e6ecf2;
    margin-bottom: 0.5rem;
    font-size: 0.92rem;
  }

  .callout {
    background: linear-gradient(135deg, rgba(117, 104, 255, 0.16), rgba(107, 158, 255, 0.14));
    border: 1px solid rgba(126, 147, 255, 0.4);
    border-radius: 12px;
    padding: 1rem 1rem;
    margin: 1.25rem 0;
  }
  .callout h3 {
    margin-top: 0;
    color: #cad4ff;
  }
  .callout p {
    color: #d1dae4;
    margin-bottom: 0;
  }
</style>
