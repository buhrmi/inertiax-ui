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

window.navigation.addEventListener('navigate', (event) => {
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
  else if (event.navigationType === 'push') {
    arrivers[navigation.currentEntry.key] = null
    receders[navigation.currentEntry.key] = null
  }
})

  
