---
title: Exception
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
---

## Error

To raise a generic error (exception):

```javascript
throw new Error('Something is wrong!');
```

## Try...catch...finally

See
[throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw),
[try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
documentation.

```javascript
try {
  throw new Error('Something is wrong!');
} catch (error) {
  console.log(error.message);
  if (error instanceof TypeError) {
    // Handle TypeError
  } else if (error instanceof RangeError) {
    // Handle RangeError
  } else if (error instanceof EvalError) {
    // Handle EvalError
  } else {
    throw error;
  }
} finally {
  // Will always run
}
