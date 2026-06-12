<script module>
  import { mount, unmount } from 'svelte';
  import { Frame } from 'inertiax-svelte'
  import Modal from './Modal.svelte';
  import { cubicOut } from 'svelte/easing';

  export function modal(node) {
    node.addEventListener('click', (e) => {
      e.preventDefault()
      const href = node.getAttribute('href')
      const modal = mount(Modal, { 
        target: document.body,
        props: {
          src: href,
          close: () => {
            unmount(modal, {outro: true})
          }
        }
      })
    })
  }


 function variable(node, { delay = 0 }) {
    // duration on desktop is 300, on mobile 400
    const duration = window.innerWidth > 768 ? 300 : 400;
    return {
      delay,
      duration,
      easing: cubicOut,
      // tick: (t) => {
      //   node.style.setProperty("--progress", t);
      // },
      css: (t) => `--progress: ${t}`
    };
  }
</script>

<script>
  import { fade,fly } from 'svelte/transition';
  const { src, close } = $props()
</script>

<div class="modal_wrapper">
  <!-- svelte-ignore a11y_click_events_have_key_events,a11y_no_static_element_interactions -->
  <div class="modal_bg" onclick={close} transition:fade></div>
  <div class="modal layout" aria-modal="true" role="dialog" in:variable out:fly={{y: 20, duration: 200}} >
    <Frame {src} />
    <nav>
      <button onclick={close} aria-label="Close modal">
        <div class="i-material-symbols-light:close-rounded">Close</div>
      </button>
    </nav>
  </div>
</div>

<style>
.modal_wrapper {
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal_bg {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
}
nav {
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  button {
    font-size: 1.5rem;
    
  }
}
.modal {
  position: fixed;
  bottom: 0;
  transform: translateY(calc((1 - var(--progress)) * 100%));
  background-color: #00000022;
  border: 1px solid #333;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  backdrop-filter: blur(8px);
  min-height: 70%;
}

@media (min-width: 640px) {
  .modal {
    max-width: 400px;
    position: static;
    transform: scale(var(--progress));
    border-radius: 2rem;
  }
}
</style>