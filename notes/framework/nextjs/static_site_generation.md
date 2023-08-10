---
title: Static site generation
ref: https://nextjs.org/docs/basic-features/pages
---

## Overview

Files ending with `.js` `.jsx` `.ts` `.tsx` that export a React Component in the `pages/` directory
become a new page, and its route is based on the file name.

## Static Routes

A single page is created based on the file name.
Example:

Create a route `/about` by creating a file in `pages/about.js`:

```jsx
export default function About() {
  return <div>About</div>
}
```

## Dynamic Routes

Multiple pages are created based on the file name.
Example:

Create a route `/posts/[id]` where `[id]` can be several values.
In the file in `pages/posts/[id].js`:

1. Return all valid routes in the `getStaticPaths` function:

    ```js
    export async function getStaticPaths() {
      const paths = [
        {params: {id: 1}},
        {params: {id: 2}},
        {params: {id: 3}},
      ];
      return {
        paths,
        fallback: false,
      };
    }
    ```

2. Return the content for each route in the `getStaticProps` function:

    ```js
    export async function getStaticProps({ params }) {
      const pageData = await getPageData(params.id);  // Get data externally (API, filesystem, etc)
      // pageData = {title: 'Title A', text: 'Hello World'}
      return {
        props: {
          pageData,
        },
      };
    }
    ```

3. Use the data for each route to render content:

    ```jsx
    export default function Post({ pageData }) {
      return (
        <article>
          <h1>{pageData.title}</h1>
          <div>{pageData.text}</div>
        </article>
      );
    }
    ```
