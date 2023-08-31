---
title: Attribute binding
ref: https://vuejs.org/tutorial/#step-3
---

## Single-File Component (SFC)

Using `v-bind:attr` or its shorthand `:attr` we can bind an attribute to a dynamic value.

Example of variable `titleClass` to be binded:

```vue
<script>
export default {
  data() {
    return {
      titleClass: 'title'
    }
  }
}
</script>
```

Use the value of the variable `titleClass` into the attribute `class`:

```vue
<template>
  <h1 :class="titleClass">Make me red</h1>
</template>
```

Elements with `title` class will be red with this CSS:

```vue
<style>
.title {
  color: red;
}
</style>
```
