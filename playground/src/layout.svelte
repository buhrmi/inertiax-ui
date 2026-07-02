<script>
  import { usePage } from 'inertiax-svelte'

  let { children } = $props()

  let currentPage = usePage()
  const links = [
    { path: '/modal.json', label: 'Modal' },
  ]
</script>

<div class="layout">
  <aside class="rail">
    <a href="/welcome.json" class="brand-link">
      <span class="brand-icon"><img src="/logo.png" alt="Inertia X UI Logo" class="logo" /></span>
      <span>
        <strong>Inertia X UI</strong>
        <small>Playground</small>
      </span>
    </a>

    <nav class="sidebar-nav">
      {#each links as link}
        <a href={link.path} class="sidebar-link" aria-current={currentPage.url === link.path ? 'page' : undefined}>{link.label}</a>
      {/each}
    </nav>

    <p class="rail-copy">UI components for history-aware, multi-frame Inertia experiences.</p>
    <a href="https://github.com/buhrmi/inertiax-ui" target="_blank" class="sidebar-gh">Open GitHub ↗</a>
  </aside>

  <main class="content-wrap">
    <div class="theme-chip">
      <span>Theme pack included:</span>
      <a href="https://github.com/buhrmi/inertiax-ui/blob/main/dark.css" target="_blank">dark.css ↗</a>
    </div>

    <section class="content-card">
      {@render children?.()}
    </section>

    <footer class="docs-section">
      <h2>Documentation</h2>
      <p>Complete docs, package details, and source code live in the repository.</p>
      <a href="https://github.com/buhrmi/inertiax-ui" target="_blank" class="docs-link">
        View on GitHub ↗
      </a>
      <p class="footnote">Inertia X UI is built by <a href="https://github.com/buhrmi" target="_blank">buhrmi</a>.</p>
    </footer>
  </main>
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: minmax(210px, 260px) 1fr;
    max-width: 1280px;
    margin: 0 auto;
    min-height: 100vh;
    gap: 1.4rem;
    padding: 1.2rem;
  }

  .logo {
    width: 1.05rem;
    height: 1.05rem;
  }

  .rail {
    border: 1px solid var(--line);
    background: rgba(20, 27, 34, 0.82);
    box-shadow: var(--shadow);
    border-radius: 24px;
    padding: 1.25rem;
    position: sticky;
    position: sticky;
    top: 1.2rem;
    height: calc(100vh - 2.4rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .brand-link {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: var(--ink);
  }

  .brand-link strong {
    display: block;
    font-size: 0.98rem;
    letter-spacing: 0.02em;
  }

  .brand-link small {
    color: #8d9aa7;
    font-size: 0.76rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sidebar-nav {
    margin-top: 0.4rem;
    display: grid;
    gap: 0.5rem;
  }

  .sidebar-link {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #344452;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    color: #dbe3ec;
    text-decoration: none;
    font-size: 0.86rem;
    font-weight: 600;
    transition: transform 0.18s ease, background-color 0.18s ease;
    background: #1b242d;
  }

  .sidebar-link:hover {
    transform: translateX(3px);
    background: #22303b;
  }

  .sidebar-link[aria-current="page"] {
    color: #fff;
    border-color: #7568ff;
    background: linear-gradient(135deg, #7568ff 0%, #5f54db 100%);
  }

  .rail-copy {
    margin-top: auto;
    margin-bottom: 0;
    font-size: 0.82rem;
    color: #94a2b0;
  }

  .sidebar-gh {
    font-size: 0.83rem;
    font-weight: 600;
    color: #aab8ff;
    text-decoration: none;
  }

  .sidebar-gh:hover {
    color: #c6d0ff;
  }

  .content-wrap {
    min-width: 0;
    display: flex;
    flex-direction: column;
    padding: 0.6rem 0.6rem 2rem;
    animation: rise-in 0.45s ease both;
  }

  .theme-chip {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.1rem 0 0.9rem;
    border-radius: 999px;
    border: 1px solid #2f3f4d;
    background: rgba(20, 27, 34, 0.9);
    padding: 0.38rem 0.8rem;
    color: #9aa8b5;
    font-size: 0.75rem;
  }

  .theme-chip a {
    color: #aab8ff;
    font-weight: 600;
    text-decoration: none;
  }

  .theme-chip a:hover {
    text-decoration: underline;
  }

  .content-card {
    border-radius: 24px;
    border: 1px solid var(--line);
    background: rgba(20, 27, 34, 0.72);
    box-shadow: var(--shadow);
    padding: clamp(1.5rem, 2.7vw, 2.6rem);
  }

  .docs-section {
    margin-top: 1.6rem;
    border-radius: 20px;
    border: 1px solid var(--line);
    background: rgba(20, 27, 34, 0.64);
    padding: 1.4rem 1.5rem;
  }

  .docs-section h2 {
    font-size: 1.25rem;
    margin-bottom: 0.3rem;
  }

  .docs-section p {
    color: #9ca9b5;
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
  }

  .docs-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.5rem 0.95rem;
    background: var(--teal-soft);
    border: 1px solid #4f5e98;
    border-radius: 999px;
    color: #cad4ff;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }

  .docs-link:hover {
    background: #2a3266;
    transform: translateY(-1px);
  }

  .footnote {
    margin-top: 0.9rem;
    color: #8895a2;
    font-size: 0.8rem;
  }

  .footnote a {
    color: #aab8ff;
  }

  .footnote a:hover {
    color: #c6d0ff;
  }

  @media (max-width: 900px) {
    .layout {
      gap: 1rem;
      padding: 0.9rem;
      grid-template-columns: 1fr;
    }

    .rail {
      position: static;
      height: auto;
      border-radius: 18px;
    }

    .rail-copy {
      display: none;
    }

    .sidebar-nav {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .layout {
      padding: 0.65rem;
    }

    .rail {
      gap: 0.8rem;
      padding: 0.95rem;
    }

    .brand-link strong {
      font-size: 0.9rem;
    }

    .sidebar-nav {
      flex-direction: column;
      grid-template-columns: 1fr;
    }

    .content-card,
    .docs-section {
      border-radius: 16px;
    }
  }
</style>
