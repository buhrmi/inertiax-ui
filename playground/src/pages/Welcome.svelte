<script>
  const { close } = $props()
</script>

<div class="page">
  <h2>Welcome to Inertia X UI</h2>
  <p>This modal is powered by Inertia X, a fork of Inertia that adds the Frame component. All content here is rendered within an Inertia X frame.</p>

  <ul class="feature-list">
    <li>Native browser history integration</li>
    <li>Mobile bottom-sheet on small screens</li>
    <li>Back/forward navigation support</li>
    <li>Smooth CSS transitions</li>
    <li>Lightweight and fast</li>
  </ul>

  <p class="footnote">Navigate back, or press the ✕ button or the backdrop to close the modal.</p>
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
  p {
    color: #8b949e;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  .feature-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding: 0;
  }
  .feature-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    font-size: 0.95rem;
  }
  .feature-list li::before {
    content: '✓';
    color: #3fb950;
    font-weight: bold;
  }
  .footnote {
    margin-top: 1.5rem;
    font-size: 0.85rem;
    color: #484f58;
  }
</style>
