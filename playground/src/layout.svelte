<script>
  import { usePage } from 'inertiax-svelte'

  let { children } = $props()

  let currentPage = usePage()
  const links = [
    { path: '/modal.json', label: 'Modal' },
  ]
</script>

<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-brand">
      <a href="/welcome.json" class="brand-link">
        <span class="brand-icon"><img src="/logo.png" alt="Inertia X UI Logo" class="logo"/></span>
        <span class="brand-text">Inertia X UI</span>
      </a>
    </div>
    <nav class="sidebar-nav">

      {#each links as link}
        <a href={link.path} class="sidebar-link" aria-current={currentPage.url === link.path ? 'page' : undefined}>{link.label}</a>
      {/each}
    </nav>
    <div class="sidebar-footer">
      <a href="https://github.com/buhrmi/inertiax-ui" target="_blank" class="sidebar-gh">GitHub ↗</a>
    </div>
  </aside>
  <main class="main">
    <div class="theme-notice">
      <span>🎨 Theme: <a href="https://github.com/buhrmi/inertiax-ui/blob/main/dark.css" target="_blank">dark.css ↗</a></span>
      <span class="theme-notice-hint">Import your own CSS to override</span>
    </div>
    {@render children?.()}

    <footer class="docs-section">
      <h2>Documentation</h2>
      <p>Full documentation, installation instructions, and source code are available on GitHub.</p>
      <a href="https://github.com/buhrmi/inertiax-ui" target="_blank" class="docs-link">
        View on GitHub ↗
      </a>
      <p class="footnote">Inertia X UI is a work in progress by <a href="https://github.com/buhrmi" target="_blank">buhrmi</a>.</p>
    </footer>
  </main>
</div>

<style>
  .layout {
    display: flex;
    min-height: 100vh;
  }

  .logo {
    width: 1.25rem;
    height: 1.25rem;
  }

  .sidebar {
    width: 220px;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #0d1117;
    border-right: 1px solid #21262d;
    padding: 1.5rem 0;
  }

  .sidebar-brand {
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    margin-bottom: 1.5rem;
  }

  .brand-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  .brand-icon {
    font-size: 1.25rem;
  }

  .brand-text {
    font-size: 1rem;
    font-weight: 600;
    color: #f0f6fc;
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .sidebar-link {
    display: block;
    padding: 0.5rem 1.25rem;
    color: #8b949e;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.15s, background 0.15s;
    border-left: 3px solid transparent;
  }

  .sidebar-link:hover {
    color: #e6edf3;
    background: #161b22;
  }

  .sidebar-link[aria-current="page"] {
    color: #58a6ff;
    background: rgba(88, 166, 255, 0.08);
    border-left-color: #58a6ff;
  }

  .sidebar-footer {
    padding: 1rem 1.25rem 0;
    border-top: 1px solid #21262d;
    margin-top: 1rem;
  }

  .sidebar-gh {
    color: #8b949e;
    text-decoration: none;
    font-size: 0.8rem;
  }

  .sidebar-gh:hover {
    color: #58a6ff;
  }

  .main {
    flex: 1;
    min-width: 0;
    background: #0d1117;
    padding: 2.5rem 2rem;
  }

  .theme-notice {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem 1rem;
    margin: -2.5rem -2rem 2rem;
    background: rgba(88, 166, 255, 0.06);
    border-bottom: 1px solid rgba(88, 166, 255, 0.1);
    font-size: 0.8rem;
    color: #8b949e;
  }

  .theme-notice a {
    color: #58a6ff;
    font-weight: 600;
    text-decoration: none;
  }

  .theme-notice a:hover {
    text-decoration: underline;
  }

  .theme-notice-hint {
    color: #484f58;
  }

  .docs-section {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid #30363d;
  }

  .docs-section h2 {
    font-size: 1.1rem;
    color: #f0f6fc;
    margin-bottom: 0.5rem;
  }

  .docs-section p {
    color: #8b949e;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .docs-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.5rem 1.25rem;
    background: #21262d;
    border: 1px solid #30363d;
    border-radius: 8px;
    color: #e6edf3;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s;
  }

  .docs-link:hover {
    background: #30363d;
    border-color: #58a6ff;
  }

  .footnote {
    margin-top: 1.25rem;
    color: #484f58;
    font-size: 0.8rem;
  }

  .footnote a {
    color: #8b949e;
  }

  .footnote a:hover {
    color: #58a6ff;
  }

  @media (max-width: 480px) {
    .main {
      padding: 1.5rem 1rem;
    }

    .theme-notice {
      margin: -1.5rem -1rem 1.5rem;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 767px) {
    .layout {
      flex-direction: column;
    }

    .sidebar {
      position: sticky;
      top: 0;
      z-index: 10;
      height: auto;
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      padding: 0.75rem 1rem;
      border-right: none;
      border-bottom: 1px solid #21262d;
      gap: 0.5rem;
      background: #0d1117;
    }

    .sidebar-brand {
      padding: 0;
      margin: 0;
    }

    .brand-icon { font-size: 1rem; }
    .brand-text { font-size: 0.9rem; }

    .sidebar-nav {
      flex-direction: row;
      flex: 0;
      gap: 0;
    }

    .sidebar-link {
      border-left: none;
      border-bottom: 2px solid transparent;
      padding: 0.5rem 0.75rem;
      font-size: 0.85rem;
    }

    .sidebar-link::before { content: none; }

    .sidebar-link[aria-current="page"] {
      border-left-color: transparent;
      border-bottom-color: #58a6ff;
      background: none;
    }

    .sidebar-footer { display: none; }
  }
</style>
