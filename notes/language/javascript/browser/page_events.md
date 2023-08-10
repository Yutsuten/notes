---
title: Page events
ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
---

## Page load

The `load` event is fired when the whole page has loaded,
including all dependent resources such as stylesheets and images.

```js
function onWindowLoad () {
  console.log('Page images, styles, frames are fully loaded.');
}
window.onload = onWindowLoad;
window.addEventListener('load', onWindowLoad);
```

The `DOMContentLoaded` event fires when the initial HTML document has been completely loaded and parsed,
without waiting for stylesheets, images, and subframes to finish loading.

```js
window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed.');
});
```
