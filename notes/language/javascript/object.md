---
title: Object
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
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

| Method | Description |
| --- | --- |
| `Object.prototype.hasOwnProperty.call(obj, key)` <br> `Object.hasOwn(object, key)` | Return `true` if object owns property, `false` otherwise. |
| `Object.assign(target, source)` | Copy all own properties from source to target. |
| `Object.keys(obj)` | Return an array of keys. |
| `Object.values(obj)` | Return an array of values. |
| `Object.entries(obj)` | Return an array of key-value pairs. |

### Looping object keys

```js
Object.entries(object1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
})

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
