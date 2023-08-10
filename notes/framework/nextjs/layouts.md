---
title: Layouts
ref: https://nextjs.org/docs/basic-features/layouts
---

## Shared layout

If our website shares the same components for several/all pages,
we may create a layout for it.

Example of a website where all pages share the same navigation bar and footer.
Create `components/layout.js` with:

```jsx
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

To apply it to all pages, add to `pages/_app.js`:

```jsx
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

## Per-page layout

Create `pages/index.js` with:

```jsx
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'

export default function Page() {
  return (
    /** Your content */
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
```

Use the layout defined at the page level, if available.
Add to `pages/_app.js`:

```jsx
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
```
