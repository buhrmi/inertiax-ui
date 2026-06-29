import { test, expect } from '@playwright/test'

test('onclose callback fires when modal closes via backdrop click', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('#app')

  await page.evaluate(() => { window.__oncloseCalled = false })

  await page.evaluate(() => {
    window.__test__.createModal({
      src: '/modal-content.json',
      onclose: () => { window.__oncloseCalled = true },
    })
  })

  await page.waitForSelector('.inx-modal_wrapper')

  // Close the modal by clicking the backdrop
  await page.evaluate(() => {
    document.querySelector('.inx-modal_bg')
      .dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
  })

  // Give the close handler + any transition time to complete
  await page.waitForTimeout(500)

  expect(await page.evaluate(() => window.__oncloseCalled)).toBe(true)
})
