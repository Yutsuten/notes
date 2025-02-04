---
title: Fetch
ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
---

## Request

A [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
is built of an `input` (URL) and `options`.

Make a GET request:

```js
fetch('https://example.com/').then(callback);
```

Make a `application/json` POST request:

```js
const url = 'https://example.com/';
const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ username: 'example' }),
};
fetch(url, options).then(callback);
```

## Response

A [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
object is returned.

```js
fetch('https://example.com/').then((res) => {
  console.log(res.status);
  res.text().then((text) => console.log(text));
});
```
