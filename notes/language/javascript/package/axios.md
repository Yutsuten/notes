---
title: Axios
ref: https://axios-http.com/docs/req_config
---

## Request

GET request (DELETE, HEAD, OPTIONS is similar):

:::tip
Use `paramsSerializer.indexes = null` to avoid adding `[]` in array parameters.

i.e.: `values=one&values=two` instead of `values[]=one&values[]=two`.
:::

```js
axios.get(
  '/endpoint',
  {
    headers: { 'Authorization': 'Bearer token-secret' },
    params: {
      values: ['one', 'two'],
    },
    paramsSerializer: {
      indexes: null,
    },
  },
);
```

POST request (PUT, PATCH is similar):

```js
axios.post(
  '/endpoint',
  data,
  {
    headers: { 'Authorization': 'Bearer token-secret' },
    params: { id: 1 }, // URL parameters
  },
);
```
