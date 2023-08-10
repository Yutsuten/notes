---
title: Timers
ref: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
---

## Run once

```js
let timeoutId = setTimeout(callback, timeInMs);
clearTimeout(timeoutId);
```

## Run repeatedly

```js
let intervalId = setInterval(callback, timeInMs);
clearInterval(intervalId);
```
