---
title: Static file
ref: https://nextjs.org/docs/basic-features/static-file-serving
---

## Static File Serving

Put static files inside the `public/` directory.
Useful for image files, `robots.txt`, `favicon.ico` and others.

For example,
adding the file `public/profile.png` would allow you to access it with:

```jsx
import Image from 'next/image'

export default function Avatar() {
  return <Image src="/profile.png" alt="avatar" width="64" height="64" />
}
```
