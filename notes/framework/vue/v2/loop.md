---
title: Loop
ref: https://vuejs.org/v2/guide/list.html
---

## Usage

```vue-html
<div id="app">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
```

### The template tag

If rendering the element containing the loop code is not desirable,
it is possible to use the `template` tag instead,
as it will not appear in the final rendered HTML.

```vue-html
<template v-for="hobby in hobbies">
  <a type="checkbox" v-bind:href="hobby.link" v-bind:value="hobby">{{ hobby.name }}</a>
</template>
```
