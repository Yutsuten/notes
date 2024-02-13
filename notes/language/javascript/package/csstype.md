---
title: CSSType
ref: https://github.com/frenic/csstype
---

## Install

TypeScript and Flow definitions for CSS.

```shell
pnpm add csstype --save-dev
```

## Usage

```ts
import type { Property } from 'csstype';

interface CustomElement {
  textAlign?: Property.TextAlign;
}
```
