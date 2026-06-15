# Inertia X UI

A collection of Svelte components for [Inertia X](https://github.com/buhrmi/inertiax).

## Modal

The Modal component displays an [Inertia X Frame](https://github.com/buhrmi/inertiax#frame-component) within a modal. It can be created via the `modal` action:

### Opening a modal

```svelte
<script>
  import { modal } from 'inertiax-ui'
</script>

<a href="/profile/edit" use:modal>Edit profile</a>
```

### Closing a modal

The Modal component passes a `close` function down to its page component as a prop. You can call this function to close it. Behind the scenes, calling `close` will use the browsers Navigation API to traverse the history back to before the modal was opened, which in turn triggers callbacks that unmount the modal.

```svelte
<script>
  const { close } = $props()
</script>

<button onclick={close}>Close</button>
```

### Styling

Inertia X UI ships with a default dark style that displays the modal as a bottom sheet.

```js
import 'inertiax-ui/dark.css'
```

For full control, you can of course bring your own CSS styling. The key classes to target are:

| Class | Element |
|-------|---------|
| `.inx-modal_wrapper` | Full-screen overlay container |
| `.inx-modal_bg` | Clickable backdrop |
| `.inx-modal` | The modal panel itself |