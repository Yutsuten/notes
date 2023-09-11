---
title: Promise
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
---

## Wait all promises

First put all promises in an array:

```ts
const promises: Promise<any>[] = [];
promises.push(fetch('example.com/1'));
promises.push(fetch('example.com/2'));
promises.push(fetch('example.com/3'));
```

Use this if the result of all promises are needed.

```ts
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

```ts
Promise.all(promises).then((responses) => {
  // All promises resolved
}).catch((error) => {
  // First failed promise
});
```
