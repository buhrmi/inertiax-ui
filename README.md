# Inertia X UI

A collection of Svelte components for [Inertia X](https://github.com/buhrmi/inertiax).

> This code is pre-production quality and there are a lot of missing features.

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

The Modal component passes a `close` function down to its page component as a prop. You can call this function to close it.

```svelte
<script>
  const { close } = $props()
</script>

<button onclick={close}>Close</button>