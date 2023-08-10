---
title: Condition
ref: https://jp.vuejs.org/v2/guide/conditional.html
---

## Conditional rendering

```vue-html
<div id="app">
  <span v-if="flag">Visible text</span>
  <span v-else>Something else</span>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    flag: true
  }
})
```
