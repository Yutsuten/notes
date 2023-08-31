---
title: Components
ref: https://vuejs.org/tutorial/#step-11
---

## Single-File Component (SFC)

We can nest components.

Example of `ChildComp.vue` in the same directory:

```vue
<template>
  <h2>A Child Component!</h2>
</template>
```

Importing it from the parent component:

```vue
<script>
import ChildComp from './ChildComp.vue'

export default {
  components: {
    ChildComp
  }
}
</script>
```

Render the child component in the parent component:

```vue
<template>
  <ChildComp />
</template>
```

### Props

We can receive `props` from the parent component.

Declare the `props` the child component acceps:

```vue
<script>
export default {
  props: {
    msg: String
  }
}
</script>
```

Pass the `prop` from the parent component using the `v-bind` syntax:

```vue
<template>
  <ChildComp :msg="greeting" />
</template>
```

### Emits

We can emit events to the parent component.

Create events with the `emits` array and raise the event with `this.$emit` from the child component:

```vue
<script>
export default {
  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child')
  }
}
</script>
```

Get the event with `v-on` from the parent component:

```vue
<template>
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>
```

### Slots

Used to pass template fragments to a child component.

Create the `slot` element in the child component with an optional fallback content:

```vue
<template>
  <slot>Fallback content</slot>
</template>
```

Pass the slot content from the parent component:

```vue
<template>
  <ChildComp>This is some slot content!</ChildComp>
</template>
```
