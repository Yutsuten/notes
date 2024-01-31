---
title: Window
---

## Open link in a new tab

On a `onclick` event handler:

```js
const newTab = window.open('http://example.com', '_blank');
if (newTab) {
  newTab.focus();
}
```
