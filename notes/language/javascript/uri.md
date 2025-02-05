---
title: URI
ref: https://developer.mozilla.org/en-US/docs/Web/API/URL_API
---

## Basic

To URL encode a string:

```js
encodeURIComponent('hello world');
// 'hello%20world'
```

To URL encode multiple query parameters:

```js
const searchParams = URLSearchParams({ search: 'hello world', page: 1 });
searchParams.toString();
// 'search=hello+world&page=1'
```

Useful to update the URL for a request:

```js
const url = new URL('https://example.com/');
url.searchParams.set('search', 'hello world');
url.searchParams.set('page', 1);
url.toString();
```
