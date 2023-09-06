---
title: Linter CSS
---

## Setup

For the basic functionality, install:

```shell
pnpm add postcss-html stylelint stylelint-config-standard-vue
```

To also enforce the order, install:

```shell
pnpm add stylelint-config-recess-order
```

## Configuration

Add to `package.json`:

```json
{
  "stylelint": {
    "extends": [
      "stylelint-config-recess-order",
      "stylelint-config-standard",
      "stylelint-config-standard-vue"
    ]
  }
}
```
