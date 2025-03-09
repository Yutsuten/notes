---
title: Dictionary
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
---

## Basic

:::info
Everything in javascript is an `Object`,
but to differentiate these from hash table,
I'll call it dictionary here.
:::

```js
const animal = 'seagull'
const dict = {
   cat: 'Meow',
   'dog': 'Bark',
   [animal]: 'Mew',
}
dict.cat === dict['cat']
delete dict.cat  // delete key
for (let key in dict) {}
```

## Methods

| Method | Description |
| --- | --- |
| `Object.prototype.hasOwnProperty.call(obj, key)` <br> `Object.hasOwn(object, key)` | Return `true` if object owns property, `false` otherwise. |
| `Object.assign(target, source)` | Copy all own properties from source to target. |
| `Object.keys(obj)` | Return an array of keys. |
| `Object.values(obj)` | Return an array of values. |
| `Object.entries(obj)` | Return an array of key-value pairs. |

### Looping object keys

```js
Object.entries(dict).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
})

Object.keys(dict).forEach(function (key) {})
```

### Shallow and deep object copy

```js
// Shallow
Object.assign({}, dict)

// Deep
JSON.parse(JSON.stringify(dict))

let $ = require('jquery')
$.extend(true, {}, oldDict)

let _ = require('lodash')
_.clonedeep(original)
```
