---
title: Built-in
ref: https://nodejs.org/api/process.html
---

## Process

| Variable           | Description                               |
| ------------------ | ----------------------------------------- |
| `process.env`      | A object containing the user environment. |
| `process.exitCode` | Exit code used when the script ends.      |

| Method         | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| `process.exit` | Immediately terminates the process with the specified exit code. |

## Async

Creating an async function (returns `Promise`) and waiting for the result:

```javascript
async function getUser() {}
const user = await getUser();
```

To continue the program meanwhile, use a callback:

```javascript
getUser().then((user) => {});
```

## Exit Code

If exiting the program due to an error,
setting `process.exitCode = 1` is preferred over `process.exit(1)`
because it will wait for asynchronous code to finish,
like writes to `stdout`.
But you'll have to skip the remaining code if there is any:

```javascript
if (somethingBadHappened()) {
  printStuff();
  process.exitCode = 1;
}

if (process.exitCode !== undefined) {
  // ...
}
```

Usually it is much easier to just raise an error that
will not be catched for the same result:

```javascript
if (somethingBadHappened()) {
  printStuff();
  throw new Error('Something bad happened');
}
```
