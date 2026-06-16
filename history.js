/**
 * History stack manager for Inertia X UI.
 *
 * Provides a `push` API that registers `arrive` callbacks
 * tied to a browser history entry. When the user navigates forward or
 * backward via the browser, the appropriate callback is invoked, enabling
 * SPA-style page transitions that respect native history traversal.
 */

const arrivers = {}
const receders = {}


export function push(arrive) {
  const currentState = history.state
  const previousKey = navigation.currentEntry.key
  history.pushState(currentState, '', '')
  const currentKey = navigation.currentEntry.key
  arrivers[currentKey] = arrive
  receders[currentKey] = arrive(() => navigation.traverseTo(previousKey))
}  

function garbageCollectOrphanedCallbacks() {
  const validKeys = new Set(navigation.entries().map(e => e.key))
  for (const key of Object.keys(arrivers)) {
    if (!validKeys.has(key)) {
      delete arrivers[key]
      delete receders[key]
    }
  }
}

window.navigation.addEventListener('navigate', (event) => {
  if (event.navigationType === 'push') {
    garbageCollectOrphanedCallbacks()
  }

  if (event.navigationType === 'traverse') {  
    const destKey = event.destination.key;
    const destIndex = event.destination.index;
    const currKey = navigation.currentEntry.key;
    const currIndex = navigation.currentEntry.index;
    
    if (destIndex > currIndex) {
      // navigated forward. arrive the destination key
      receders[destKey] = arrivers[destKey]?.(() => navigation.traverseTo(currKey))
    } else if (destIndex < currIndex) {
      // navigated back. recede the current key
      receders[currKey]?.()
    }
  }
})

  
