---
title: Server-side rendering
ref: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
---

## Shared getServerSideProps

- [Reference](https://stackoverflow.com/questions/65669184/how-to-use-getserversideprops-for-every-pages-in-next-js/72325973#72325973)

Create a `lib` with the common `getServerSideProps`:

```js
// lib/serverProps.js
export default async function getServerSideProps(ctx) {
  mydata = await axios.get('...');
  return {
    props: { data: mydata },
  };
}
```

Import it in all pages:

```js
export { default as getServerSideProps } from '../lib/serverProps';
```
