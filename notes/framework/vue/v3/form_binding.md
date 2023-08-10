---
title: Form binding
ref: https://vuejs.org/tutorial/#step-5
---

## Single-File Component (SFC)

Using `v-model` we can bind the value of an input to a variable.

Example of variable `text` to be binded:

```vue
<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
```

Bind the `text` variable with the value of `input`:

```vue
<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
```
