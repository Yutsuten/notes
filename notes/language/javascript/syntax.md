---
title: Syntax
ref: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

## Basic

### Built-in functions

```js
typeof myVar;  // 'string', 'number', 'boolean', 'object', 'undefined'
isNaN(myVar);
```

#### Type conversion

```js
const num = parseInt('10');
const dec = parseFloat('3.1416');
const bool = Boolean(0);  // !!0 - true for empty lists and objects!
```

#### Timers

Run once after a while:

```js
let timeoutId = setTimeout(callback, timeInMs);
clearTimeout(timeoutId);
```

Run repeatedly:

```js
let intervalId = setInterval(callback, timeInMs);
clearInterval(intervalId);
```

## Flow control

### Condition

```js
if (10 < 20) {
  doSomething();
} else if (10 > 20) {
  doSomething();
} else {
  doSomething();
}
```

### Switch

```js
switch (myExpr) {
  case '1':
    doSomething();
    break;
  case '2':
    doSomething();
    break;
  default:
    doSomething();
    break;
}
```
