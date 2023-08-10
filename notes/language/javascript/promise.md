---
title: Promise
ref: https://atomizedobjects.com/blog/javascript/how-to-wait-for-all-promises-to-resolve-in-javascript/
---

## Wait all promises

```js
const promises = [];
promises.push(fetch('example.com/1'));
promises.push(fetch('example.com/2'));
promises.push(fetch('example.com/3'));
Promise.all(promises).then((responses) => {
});
```
