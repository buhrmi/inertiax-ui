# Inertia X UI

A collection of Svelte components for [Inertia X](https://github.com/buhrmi/inertiax).

## Modal

The Modal component displays an [Inertia X Frame](https://github.com/buhrmi/inertiax#frame-component) within a modal. It can be created via the `modal` action:

```svelte
<script>
  import { modal } from 'inertiax-ui'
</script>

<a href="/profile/edit" use:modal>Edit profile</a>
```
