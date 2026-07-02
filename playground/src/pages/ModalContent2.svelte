<script module>
  import AppLayout from '../layout.svelte'
  export const layout = AppLayout
</script>

<script>
  import { useRemember } from 'inertiax-svelte'

  const { onsave, close } = $props()
  let data = useRemember({ name: '' })
</script>

<div class="celebrate">
  <p class="chip">Step 2 of 2</p>
  <h2>Review and Save</h2>
  <p>You just navigated <strong>inside the modal frame</strong>. Use the actions below to cancel or save and close the modal.</p>

  <div class="try-it">
    <h3>Navigation Check</h3>
    <p>The editable field now lives on Step 1. Press back to verify the value, then return here and click save to submit that remembered text.</p>
    <p class="hint">This step focuses on the final action.</p>
  </div>

  <div class="actions">
    <button class="secondary btn back-btn" type="button" onclick={() => window.history.back()}>Back</button>
    <button class="secondary btn" onclick={() => close()}>Cancel</button>
    <button class="primary btn" onclick={() => onsave(data.name, close)}>Save</button>
  </div>
</div>

<style>
  .btn {
    padding: 0.52rem 1.05rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid transparent;
  }

  .celebrate {
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

  .primary {
    background-color: #7568ff;
    border-color: #5f54db;
    color: white;
  }

  .primary:hover {
    background-color: #675ae9;
  }

  .secondary {
    background-color: #1a2129;
    border-color: #33414f;
    color: #b8c4d0;
  }

  .secondary:hover {
    background-color: #242e39;
  }

  .actions {
    margin-top: 0.7rem;
    display: flex;
    gap: 0.45rem;
    justify-content: flex-end;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
  }

  .try-it {
    background: linear-gradient(135deg, rgba(117, 104, 255, 0.16), rgba(107, 158, 255, 0.14));
    border: 1px solid rgba(126, 147, 255, 0.4);
    border-radius: 12px;
    padding: 1rem;
    margin: 1.1rem 0;
    text-align: left;
  }

  .try-it h3 {
    margin-top: 0;
    color: #cad4ff;
  }

  .try-it p {
    margin-bottom: 0.5rem;
  }

  .hint {
    margin-top: 0.65rem !important;
    font-size: 0.8rem !important;
    color: #94a2b0 !important;
  }

</style>