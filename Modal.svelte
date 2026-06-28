<script module>
  import { mount, unmount } from 'svelte';
  import { Frame } from 'inertiax-svelte'
  import Modal from './Modal.svelte';
  import { cubicOut } from 'svelte/easing';
  import { push } from './history'

  export function modal(node) {
    node.addEventListener('click', (e) => {
      e.preventDefault()
      const href = node.getAttribute('href')
      createModal({ src: href })
    })
  }

  export function createModal(props) {
    push(function(traverseBack) {
      console.log("mounting with state:", history.state)
      const modal = mount(Modal, { 
        target: document.body,
        props: {
          ...props,
          close: function(traverse = true) {
            traverse ? traverseBack() : unmount(modal, { outro: true })
          }
        }
      })
      return function() {
        unmount(modal, { outro: true })
      }
    })
  }


 function css(node, { delay = 0 }) {
    // duration on desktop is 300, on mobile 400
    const duration = window.innerWidth > 768 ? 300 : 400;
    return {
      delay,
      duration,
      easing: cubicOut,
      tick: (t) => {
        node.style.setProperty("--progress", t);
      },
      // css: (t) => `--progress: ${t}`
    };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  const { src, close } = $props()
</script>

<div class="inx-modal_wrapper">
  <!-- svelte-ignore a11y_click_events_have_key_events,a11y_no_static_element_interactions -->
  <div class="inx-modal_bg" onclick={close} transition:fade={{duration: 200}}></div>
  <div class="inx-modal" aria-modal="true" scroll-region role="dialog" transition:css>
    <Frame {src} {close} visitOptions={{ replace: false }} skipHistoryRestore>
      <div class="inx-spinner" ></div>
    </Frame>
    <nav>
      <button onclick={close} aria-label="Close modal">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" />
        </svg>
      </button>
    </nav>
  </div>
</div>

<style>
  button {
    all: unset;
    cursor: pointer;
  }
</style>