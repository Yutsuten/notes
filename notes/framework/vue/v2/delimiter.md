---
title: Delimiter
ref: https://vuejs.org/v2/api/#v-pre
---

## Change delimiters

```js
// Vue < 2.0
Vue.options.delimiters = ['[[', ']]'];

// Vue >= 2.0
new Vue({
  delimiters: ['[[', ']]'],
  // ...
});
```

## Escape a delimiter

Skip compilation for this element and all its children.

```vue-html
<span v-pre>{{ this will not be compiled }}</span>
```
