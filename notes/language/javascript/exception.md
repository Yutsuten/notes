---
title: Exception
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
---

## Try .. catch

```js
try {
  // Some code
} catch (error) {
  console.log(error.message)
  if (error instanceof TypeError) {
    // Handle TypeError
  } else if (error instanceof RangeError) {
    // Handle RangeError
  } else if (error instanceof EvalError) {
    // Handle EvalError
  } else {
    throw error
  }
} finally {
  // Will always run
}
```
