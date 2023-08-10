---
title: Stylesheet
ref: https://nextjs.org/docs/basic-features/built-in-css-support
---

## Global

Create the global CSS somewhere and import it in `pages/_app.js`.

```jsx
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

// This default export is required
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## CSS Modules

Next.js supports CSS Modules using the `[name].module.css` file naming convention.

You may use it to define component-level CSS or a helper CSS that would be used anywhere.
Example of styling a button:

Create some CSS classes in `components/button.module.css`:

```css
.error {
  color: white;
  background-color: red;
}
```

Import the CSS in `components/button.js` and use:

```jsx
import styles from './button.module.css'

export function Button() {
  return (
    <button
      type="button"
      className={styles.error}
    >
      Destroy
    </button>
  )
}
```
