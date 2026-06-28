<script>
  const { close } = $props()
</script>

<div class="page">
  <h2>Welcome to Inertia X UI</h2>
  <p>This modal is powered by Inertia X, its content is rendered within an Inertia X Frame component.</p>

  <div class="callout">
    <h3>✨ Try Navigating</h3>
    <p>Click the link below to go to the Get Started page, then press your browser's <strong>back button</strong>. You'll return here with your scroll position exactly where you left it — Inertia's scroll restoration at work.</p>
  </div>

  <ul class="feature-list">
    <li>Native browser history integration</li>
    <li>Mobile bottom-sheet on small screens</li>
    <li>Back/forward navigation support</li>
    <li>Smooth CSS transitions</li>
    <li>Lightweight and fast</li>
  </ul>

  <p class="footnote">Navigate back, or press the ✕ button or the backdrop to close the modal.</p>

  <nav class="page-nav">
    <a href="/get-started.json" class="nav-link">Get Started →</a>
  </nav>
</div>

<style>
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
  .callout {
    background: linear-gradient(135deg, rgba(88, 166, 255, 0.1), rgba(188, 140, 255, 0.08));
    border: 1px solid rgba(88, 166, 255, 0.2);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    margin: 1.25rem 0;
  }
  .callout h3 {
    margin-top: 0;
    color: #58a6ff;
  }
  .callout p {
    color: #b0b8c4;
    margin-bottom: 0;
  }
  .callout strong {
    color: #e6edf3;
  }
</style>
