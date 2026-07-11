# Changelog

## 0.0.24

### Added

- **`animateHeight` prop** — The modal now smoothly animates its height when content changes (e.g., navigating between pages inside the modal). Enabled by default. Set `animateHeight: false` to disable.

  ```js
  createModal({ src: '/page', animateHeight: false })
  ```

- The animation uses a **ResizeObserver + FLIP** technique: the old height is captured before paint, then the modal transitions to the new height via CSS. Scrollbars are hidden during the transition to prevent flicker. Duration matches the existing entrance animation (0.4s mobile, 0.3s desktop via `--inx-modal-duration`).

## 0.0.23

- Initial documented release.
