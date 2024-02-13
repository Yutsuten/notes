---
title: Axios
ref: https://github.com/axios/axios
---

## Request adjusts

Avoid adding `[]` to parameters that can be used several times:

```js
axios.get(
  '/endpoint',
  {
    params: {
      values: ['one', 'two'],
    },
    paramsSerializer: {
      indexes: null,
    },
  },
);
```
