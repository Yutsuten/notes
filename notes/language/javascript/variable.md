---
title: Variable
ref: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

## Types

Check the type of a variable, for primitive types
(if used against class instances, it gives `object`):

```js
typeof myVar;  // 'string', 'number', 'boolean', 'object', 'undefined'
```

Check the type of a variable, for class instances:

```js
myvar instanceof Date;  // true|false
```

Casting:

```js
const flag = Boolean(0);  // !!0 - true for empty lists and objects!
```

Use the [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
to fallback a `null` or `undefined` variable:

```js
const errMsg = error.message ?? 'Unknown error';
```

## Declaration

```js
var globalVar = 'Globally or function scoped';
let localVar = 'Block scoped';
const localConst = 'Block scoped';
```

Global variables can be accessed through the `window` variable.

```js
window.hasOwnProperty('globalVar');
window.globalVar;
```
