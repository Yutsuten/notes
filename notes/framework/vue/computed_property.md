---
title: Computed Property
ref: https://vuejs.org/tutorial/#step-8
---

## Single-File Component (SFC)

Using `computed` we can combine variables.

Example of variables `x` and `y` to be summed:

```vue
<script>
export default {
  data() {
    return {
      x: 10,
      y: 15,
    }
  },
  computed: {
    sum() {
      return parseInt(this.x) + parseInt(this.y)
    }
  }
}
</script>
```

Render the computed `sum`:

```vue
<template>
  <input v-model="x">
  <input v-model="y">
  <h1>Sum is {{ sum }}</h1>
</template>
```
