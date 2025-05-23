---
title: Timers
ref: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
---

## Run once

```js
const timeoutId = setTimeout(callback, timeInMs);
clearTimeout(timeoutId);
```

If in a node.js environment:

```ts
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
await sleep(1000);
// or
await new Promise(resolve => setTimeout(resolve, 1000));
```

## Run repeatedly

```js
const intervalId = setInterval(callback, timeInMs);
clearInterval(intervalId);
```
