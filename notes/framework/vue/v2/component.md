---
title: Component
---

## Basic

```vue-html
<ol>
  <todo-item></todo-item>
</ol>
```

```js
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})
```

## Bind data to it

```vue-html
<div id="app">
  <ol>
    <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
  </ol>
</div>
```

```js
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
```
