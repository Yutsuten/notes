---
title: Watcher
ref: https://vuejs.org/tutorial/#step-10
---

## Single-File Component (SFC)

Using `watch` we can watch for changes in a variable.

Example of watching `todoId` variable:

```vue
<script>
export default {
  data() {
    return {
      todoId: 1,
      todoData: null
    }
  },
  methods: {
    async fetchData() {
      this.todoData = null
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      )
      this.todoData = await res.json()
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    todoId(newId) {
      this.fetchData()
    }
  }
}
</script>
```

Whenever clicking the button increment the `todoId` and show contents of `todoData`:

```vue
<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
```
