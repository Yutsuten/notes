---
title: Set
ref: https://docs.ruby-lang.org/en/3.4/Set.html
---

## Basic

Initializing a `Set`:

```rb
myset = Set.new
myset.add(value)
```

Create a `Set` from an `Array`:

```rb
myset = myarray.to_set
```

## Operators

| Operator | Description          |
| -------- | -------------------- |
| `+`      | Union                |
| `-`      | Difference           |
| `&`      | Intersection         |
| `^`      | Symmetric difference |

## Methods

| Method   | Description                      |
| -------- | -------------------------------- |
| `to_a`   | `Set` → `Array`                  |
| `size`   | Number of elements.              |
| `empty?` | `true` if there are no elements. |
