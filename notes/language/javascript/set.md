---
title: Set
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
---

## Usage

Creating `Set` instance:

```js
const myset = new Set();
const myset = new Set([1, 2, 2]);
```

Updating a `Set`:

```js
myset.add('cat');
myset.delete('dog');
myset.clear();
```

Convert `Set` instance to `Array`:

```js
const myarr = Array.from(myset);
const myarr = myset.values().toArray();
```

Get the number of elements in the set:

```js
myset.size
```

## Methods

| Method                     | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| `has`                      | Boolean indicating whether an element with the specified value exists in this set or not. |
| `values`                   | Iterator that contains the values for each element in this set.                           |
| `A.difference(B)`          | All elements in A but not in B.                                                           |
| `A.intersection(B)`        | All elements common to A and B.                                                           |
| `A.symmetricDifference(B)` | Inverse of `intersection`.                                                                |
| `A.union(B)`               | All elements of A and B.                                                                  |

Check if the set contains a value:

```js
myset.has(element);
```

Update values of all elements:

```js
myset.values().map((element) => element.toString());
```
