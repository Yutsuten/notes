---
title: Variable
---

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
