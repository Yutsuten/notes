---
title: Fetch
ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
---

## Request

A [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
is built of an `input` (URL) and `options`.

Make a GET request:

```js
// Using callback
fetch('https://example.com/').then((res) => {});

// Using await
const res = await fetch('https://example.com/');
```

Make a `application/json` POST request:

```js
const url = 'https://example.com/';
const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ username: 'example' }),
};

// Using callback
fetch(url, options).then((res) => {});

// Using await
const res = await fetch(url, options);
```

Make a `multipart/form-data` POST request with a file and a string,
sent as [a form](https://developer.mozilla.org/en-US/docs/Web/API/FormData):

```js
const url = 'https://example.com/';
const formData = new FormData();
formData.append('file', new Blob(['File Contents\n']), 'notes.txt');
formData.append('name', 'notes.txt')
const options = {
  headers: { 'Authorization': 'Use if needed' },
  method: 'POST',
  body: formData,
}
const res = await fetch(url, options);
```

## Response

A [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
object is returned.

```js
console.log(res.status);
console.log(await res.text());
if (!res.ok) {
  throw new Error('HTTP request failed');
}
```
