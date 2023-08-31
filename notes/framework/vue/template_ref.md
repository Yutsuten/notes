---
title: Template ref
ref: https://vuejs.org/tutorial/#step-9
---

## Single-File Component (SFC)

Using `ref` we can create a reference to an element,
and manually manipulate it.
Those references can only be used after the component is **mounted**.

Example of p `ref` to be manually manipulated:

```vue
<script>
export default {
  mounted() {
    this.$refs.p.textContent = "Nice to meet you"
  }
}
</script>
```

Create the `ref` with the name `p`:

```vue
<template>
  <p ref="p">hello</p>
</template>
```
