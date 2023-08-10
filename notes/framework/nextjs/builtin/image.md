---
title: Image
ref: https://nextjs.org/docs/api-reference/next/image
---

## Usage

```js
import Image from 'next/image'
```

| Prop | Description |
| --- | --- |
| `src` | **[Required]** A statically imported image file or a path string. |
| `width` | **[Required]** Rendered width in pixels. Not required if using `fill` or statically imported images. |
| `height` | **[Required]** Rendered height in pixels. Not required if using `fill` or statically imported images. |
| `alt` | **[Required]** Image description. |
| `fill` | Causes the image to fill the parent element instead of setting `width` and `height`. |
| `priority` | Enable image preload. |

## Examples

```html
<Image
  src="/images/profile.jpg"
  className={utilStyles.borderCircle}
  height={144}
  width={144}
  alt=""
  priority
/>
```
