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

test('createModal returns a close function that can close with or without history', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('#app')

  // Test close(false) — unmount without history
  await page.evaluate(() => { window.__oncloseCalled = false })

  await page.evaluate(() => {
    window.__closeModal = window.__test__.createModal({
      src: '/modal-content.json',
      onclose: () => { window.__oncloseCalled = true },
    })
  })

  await page.waitForSelector('.inx-modal_wrapper')

  // Call close(false) — unmount without traversing history
  await page.evaluate(() => {
    window.__closeModal(false)
  })

  await page.waitForSelector('.inx-modal_wrapper', { state: 'detached', timeout: 5000 })
  expect(await page.evaluate(() => window.__oncloseCalled)).toBe(true)
})

test('navigating inside modal frame does not change browser pathname', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('#app')

  await page.click('a[href="/modal.json"]')
  await page.waitForSelector('a[href="/modal-content.json"]')

  const before = await page.evaluate(() => window.location.pathname)

  await page.click('a[href="/modal-content.json"]')
  await page.waitForSelector('.inx-modal_wrapper')

  await page.click('.inx-modal a[href="/modal-content-2.json"]')
  await page.waitForSelector('.inx-modal input[placeholder="Type and test back/forward..."]')

  const after = await page.evaluate(() => window.location.pathname)
  expect(after).toBe(before)
})
