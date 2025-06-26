---
title: Variables
---

## Usage

Setting variables globally.

```css
:root {
  --my-var: url('example.com/image.png');
}
```

Using it.

```css
.selector {
  background-image: var(--my-var);
}
```
