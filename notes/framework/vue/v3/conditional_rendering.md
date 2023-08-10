---
title: Conditional rendering
ref: https://vuejs.org/tutorial/#step-6
---

## Single-File Component (SFC)

Using `v-if` `v-else-if` and `v-else` we can create branches of the rendering condition.

Example of variable `awesome` to be used to conditionally render an element,
and a function `toggle` that toggles the variable:

```vue
<script>
export default {
  data() {
    return {
      awesome: true
    }
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome
    }
  }
}
</script>
```

Create the elements that will rendered depending on `awesome` value:

```vue
<template>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
```
