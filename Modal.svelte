<script module>
  import { mount, unmount } from 'svelte';
  import { Frame } from 'inertiax-svelte'
  import Modal from './Modal.svelte';
  import { cubicOut } from 'svelte/easing';
  import { go } from './history'

  export function modal(node, props) {
    node.addEventListener('click', (e) => {
      e.preventDefault()
      const href = node.getAttribute('href')
      createModal({ src: href, ...props })
    })
  }

  export function createModal(props) {
    const onclose = props.onclose || (() => {})
    const id = crypto.randomUUID()
    let modal = null
    let traverseBack = null
    async function close(traverse = true) {
      if (traverse && traverseBack) {
        await traverseBack()
      } else {
        unmount(modal, { outro: true })
        onclose()
      }
    }
    function arrive(tb) {
      traverseBack = tb
      modal = mount(Modal, { 
        target: document.body,
        props: {
          id,
          ...props,
          close
        }
      })
      return () => close(false)
    }
    go(arrive, { replace: props.replace || false })
    return close
  }

  function css(node, { delay = 0 }) {
    // duration on desktop is 300, on mobile 400
    const duration = window.innerWidth > 768 ? 300 : 400;
    return {
      delay,
      duration,
      easing: cubicOut,
      tick: (t) => {
        // node.style.setProperty("--progress", t);
      },
      css: (t) => `--progress: ${t}`
    };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  const { id, src, close, ...rest } = $props()
</script>

<div class="inx-modal_wrapper">
  <!-- svelte-ignore a11y_click_events_have_key_events,a11y_no_static_element_interactions -->
  <div class="inx-modal_bg" onclick={close} transition:fade={{duration: 200}}></div>
  <div class="inx-modal" aria-modal="true" scroll-region role="dialog" transition:css>
    <nav>
      <button onclick={close} aria-label="Close modal">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" />
        </svg>
      </button>
    </nav>
    <Frame {id} {src} {close} visitOptions={{ replace: false }} {...rest}>
      <div class="inx-spinner" ></div>
    </Frame>
  </div>
</div>

<style>
  button {
    all: unset;
    cursor: pointer;
  }
</style>