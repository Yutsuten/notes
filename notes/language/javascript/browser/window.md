---
title: Window
---

## Open link in a new tab

On a `onclick` event handler:

```javascript
const newTab = window.open('http://example.com', '_blank');
if (newTab) {
  newTab.focus();
}
```
