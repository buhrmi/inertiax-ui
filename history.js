/**
 * History stack manager for Inertia X UI.
 *
 * ## How it works
 *
 * `push(arrive)` creates a new history entry via `history.pushState` and calls
 * `arrive(traverseBack)` immediately. `arrive` should mount a UI component
 * (e.g. a modal) and return a cleanup function that unmounts it.
 *
 * Both the original `arrive` and its returned cleanup are stored keyed by the
 * history entry's key (`arrivers` / `cleanups`).
 *
 * When the user navigates via the browser (back/forward buttons) or
 * `navigation.traverseTo`, the `navigate` event listener catches it:
 *
 * - **Forward navigation** (`destIndex > currIndex`):
 *   Walks from `currIndex+1` up to `destIndex`, calling `arrivers[key]` for
 *   every entry along the way. Each receives a `traverseBack` chained to the
 *   immediately preceding entry, and the return value replaces `cleanups[key]`.
 *
 * - **Backward navigation** (`destIndex < currIndex`):
 *   Walks from `currIndex` down to `destIndex+1`, calling `cleanups[key]` for
 *   every entry being left behind (excluding the destination).
 *
 * This ensures all intermediate arrive/cleanup callbacks fire when jumping
 * across multiple entries in a single `traverseTo`, so every component along
 * the path is properly mounted or unmounted.
 */

const arrivers = {}
const cleanups = {}

export function push(arrive) {
  const currentState = history.state
  const previousKey = navigation.currentEntry.key
  history.pushState(currentState, '', '')
  const currentKey = navigation.currentEntry.key
  arrivers[currentKey] = arrive
  cleanups[currentKey] = arrive(() => navigation.traverseTo(previousKey))
}  

function garbageCollectOrphanedCallbacks() {
  const validKeys = new Set(navigation.entries().map(e => e.key))
  for (const key of Object.keys(arrivers)) {
    if (!validKeys.has(key)) {
      delete arrivers[key]
      delete cleanups[key]
    }
  }
}

window.navigation.addEventListener('currententrychange', garbageCollectOrphanedCallbacks)

window.navigation.addEventListener('navigate', (event) => {
  if (event.navigationType === 'traverse') {  
    const destIndex = event.destination.index;
    const currIndex = navigation.currentEntry.index;
    const entries = navigation.entries()

    if (destIndex > currIndex) {
      // navigated forward — arrive all intermediate entries + destination
      for (let i = currIndex + 1; i <= destIndex; i++) {
        const key = entries[i].key
        const prevKey = entries[i - 1].key
        cleanups[key] = arrivers[key]?.(() => navigation.traverseTo(prevKey))
      }
    } else if (destIndex < currIndex) {
      // navigated back — cleanup all entries from current down to dest+1
      for (let i = currIndex; i > destIndex; i--) {
        cleanups[entries[i].key]?.()
      }
    }
  }
})

  
