---
title: Conditional rendering
ref: https://vuejs.org/tutorial/#step-6
---

## Single-File Component (SFC)

Using `v-if`, `v-else-if` and `v-else` we can create branches of the rendering condition.

```vue
<script setup lang="ts">
import { ref } from 'vue';
const score = ref(10);
</script>
```

```vue
<script>
export default {
  data() {
    return {
      score: 10;
    }
  },
}
</script>
```

Create the elements that will rendered depending on `awesome` value:

```vue
<template>
  <h1 v-if="score < 5">Reproved!</h1>
  <h1 v-else-if="score < 8">Not bad</h1>
  <h1 v-else>Excelent!</h1>
</template>
```
