---
title: Basic
ref: https://vuejs.org/v2/guide/index.html
---

## Variable rendering

Any javascript is valid inside vue directives

```vue-html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

## Attribute binding

```vue-html
<div id="app">
  <span v-bind:title="message">
    Hover me.
  </span>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
```

## Event

```vue-html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
  <button v-on:click="calculate(param1, param2)">Calculate</button>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
    calculate: function (param1, param2) {
      this.message = param1 + param2
    }
  }
})
```

## Input-variable binding

```vue-html
<div id="app">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
