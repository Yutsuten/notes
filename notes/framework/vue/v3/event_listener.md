---
title: Event listener
ref: https://vuejs.org/tutorial/#step-4
---

## Single-File Component (SFC)

Using `v-on:evtname` or its shorthand `@evtname` we can listen to DOM events.

Example of function `increment` to be called on event:

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

Call the `increment` function on the click event:

```vue
<template>
  <button @click="increment">count is: {{ count }}</button>
</template>
```
