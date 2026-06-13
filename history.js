/**
 * History stack manager for Inertia X UI.
 *
 * Provides a `push` API that registers `arrive` callbacks
 * tied to a browser history entry. When the user navigates forward or
 * backward via the browser, the appropriate callback is invoked, enabling
 * SPA-style page transitions that respect native history traversal.
 */

const arrivers = []
const receders = []

export function push(arrive) {
  const currentState = history.state
  history.pushState(currentState, '', '')
  arrivers[navigation.currentEntry.index] = arrive
  receders[navigation.currentEntry.index] = arrive()
}  

window.navigation.addEventListener('navigate', (event) => {
  if (event.navigationType === 'traverse') {  
    const destIndex = event.destination.index;
    const currIndex = navigation.currentEntry.index;

    if (destIndex > currIndex) {
      // navigated forward. arrive the destination index
      receders[destIndex] = arrivers[destIndex]?.()
    } else if (destIndex < currIndex) {
      // navigated back. recede the current index
      receders[currIndex]?.()
    }
  }
})

  
