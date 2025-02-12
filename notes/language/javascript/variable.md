---
title: Variable
ref: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

## Types

Check the type of a variable:

```js
typeof myVar;  // 'string', 'number', 'boolean', 'object', 'undefined'
```

Casting:

```js
const flag = Boolean(0);  // !!0 - true for empty lists and objects!
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
