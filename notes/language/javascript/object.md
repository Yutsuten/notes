---
title: Object
ref: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

## Basic

```js
const animal = 'seagull'
const obj = {
   'cat' : 'Meow',
   'dog' : 'Bark'
   [animal]: 'Mew',
}
obj.cat === obj['cat']
delete obj.cat  // delete key
for (let key in obj) {}
```

## Calls from Object class

```js
Object.prototype.hasOwnProperty.call(obj, key)
Object.assign(target, source)  // merge target <- source
Object.keys(obj)
Object.values(obj)
```

## Techniques

### Looping object keys

```js
for (let key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {}
}

Object.keys(obj).forEach(function (key) {})
```

### Shallow and deep object copy

```js
// Shallow
Object.assign({}, obj)

// Deep
JSON.parse(JSON.stringify(obj))

let $ = require('jquery')
$.extend(true, {}, oldObject)

let _ = require('lodash')
_.clonedeep(original)
```
