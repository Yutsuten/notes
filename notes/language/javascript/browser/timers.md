---
title: Timers
ref: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
---

## Run once

```javascript
const timeoutId = setTimeout(callback, timeInMs);
clearTimeout(timeoutId);
```

If in a node.js environment:

```typescript
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
await sleep(1000);
// or
await new Promise(resolve => setTimeout(resolve, 1000));
```

## Run repeatedly

```javascript
const intervalId = setInterval(callback, timeInMs);
clearInterval(intervalId);
```
