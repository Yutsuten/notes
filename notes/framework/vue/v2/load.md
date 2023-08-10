---
title: Load
---

## Hide element while Vue is loading

v-cloak will remain on the element until the associated Vue instance finishes compilation.

```vue-html
<div id="app">
  <div v-cloak>
    Hello {{ name }}
  </div>
</div>
```

```vue
<style>
[v-cloak] {
  display: none;
}
</style>
```
