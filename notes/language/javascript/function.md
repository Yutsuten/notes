---
title: Function
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
---

## Basic

Declaraction:

```javascript
function sum(a, b) {
  return a + b;
}
```

Calling the function:

```javascript
const result = sum(8, 16);
```

## Async

[Async function documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

### Declaration

Async functions are functions that return a `Promise`:

```javascript
function getUser() {
  return new Promise((resolve, reject) => {
    resolve({ id: 1 });
  });
}
```

The `async` keyword can also be used if using [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules):

```javascript
async function getUser() {
  return { id: 1 };
}
```

### Calling async functions

Calling it and getting the result:

```javascript
// Using callback
getUser().then((user) => {});

// Using await
const user = await getUser();
```

### Wait all

First put all promises in an array:

```typescript
const promises: Promise<any>[] = [];
promises.push(fetch('example.com/1'));
promises.push(fetch('example.com/2'));
promises.push(fetch('example.com/3'));
```

Use this if the result of all promises are needed.

```typescript
Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      response = result.value;
    } else {
      error = result.reason;
    }
  });
});
```

Or this to stop as soon an any promise fails.

```typescript
Promise.all(promises).then((responses) => {
  // All promises resolved
}).catch((error) => {
  // First failed promise
});
```
