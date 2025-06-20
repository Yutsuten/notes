---
title: Declarative rendering
ref: https://vuejs.org/tutorial/#step-2
---

## Single-File Component (SFC)

Variables are defined in `data()`.

```vue
<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  }
}
</script>
```

:::v-pre
Variables are used in template within `{{` `}}`.
:::

```vue
<template>
  <h1>{{ message }}</h1>
</template>
```
