---
title: Dictionary
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
---

## Basic

:::info
Everything in javascript is an `Object`,
but to differentiate these from hash tables,
I'll call it dictionary here.
:::

Instantiate:

```js
const animal = 'seagull';
const mydict = {
   cat: 'Meow',
   'dog': 'Bark',
   [animal]: 'Mew',
};
```

Access values (either one is OK):

```js
const cat = mydict.cat;
const dog = mydict['dog'];
```

Delete a key/value pair:

```js
delete mydict.cat;
```

Get number of key/value pairs,
can also be used to check if dictionary is empty:

```js
const dictLength = Object.keys(mydict).length;
```

## Methods

| Method                                                                             | Description                                               |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `Object.prototype.hasOwnProperty.call(obj, key)` <br> `Object.hasOwn(object, key)` | Return `true` if object owns property, `false` otherwise. |
| `Object.assign(target, source)`                                                    | Copy all own properties from source to target.            |
| `Object.keys(obj)`                                                                 | Return an array of keys.                                  |
| `Object.values(obj)`                                                               | Return an array of values.                                |
| `Object.entries(obj)`                                                              | Return an array of key-value pairs.                       |

## Loop key/value pairs

```js
for (let key in mydict) {
  console.log(`${key}: ${mydict[key]}`);
}

Object.entries(mydict).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

Object.keys(mydict).forEach(function (key) {});
```

## Create a copy

```js
// Shallow
Object.assign({}, mydict);

// Deep
JSON.parse(JSON.stringify(mydict));

let $ = require('jquery');
$.extend(true, {}, oldDict);

let _ = require('lodash');
_.clonedeep(original);
```
