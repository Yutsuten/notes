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

```javascript
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

```javascript
axios.post(
  '/endpoint',
  data,
  {
    headers: { 'Authorization': 'Bearer token-secret' },
    params: { id: 1 }, // URL parameters
  },
);
```

## Download file

Downloading as a blob (and keeping it on memory) is the easiest method
that doesn't require external dependencies.

:::tip
Learning the [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API)
may be useful if it is necessary to deal with big files
(and we want to avoid external dependencies).
:::

```javascript
const response = await axios.get(
  '/endpoint',
  {
    headers: { 'Authorization': 'Bearer token-secret' },
    responseType: 'blob',
  },
);

// Get filename
let filename = 'fallback.txt';
const contentDisposition = response.headers['content-disposition'];
if (contentDisposition) {
  const match = contentDisposition.match(/filename=(^;)+/);
  if (match && match[1]) {
    filename = match[1];
  }
}

// Trigger browser's download
const objectURL = URL.createObjectURL(response.data);
const link = document.createElement('a');
link.href = objectURL;
link.setAttribute('download', filename);
link.click();
URL.revokeObjectURL(objectURL);
```
