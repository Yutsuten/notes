---
title: Array
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
---

## Basic

```js
let arr = [2, 3, 5];
arr.length;
arr = Array(size).fill(value);
Array.isArray(myvar)
let empty = Array.isArray(myvar) && myvar.length
```

Generating an array from an array-like object:

```js
arr = Array.from(arrayLikeObject);
```

## Methods

| Method | Params | Return type | Description |
| --- | --- | --- | --- |
| `concat` | `array` | `array` | Creates a new array with `arr1` and `arr2` elements merged. |
| `includes` | `element` | `boolean` | Returns `true` if the element exists, `false` otherwise. |
| `indexOf` | `element` | `number` | Returns the element's index, or `-1` if not present. |
| `join` | `separator` | `string` | Concatenates all elements using the separator and returns a string. |
| `pop` | | `element` | Removes the last element and return it. |
| `push` | `elements` | `number` | Append elements to an array. |
| `shift` | | `element` | Removes the first element and return it. |
| `slice` | `beginIndex` `endIndex` | `array` | Returns a shallow copy of a portion of an array. `[start; end]` (end not included) |
| `sort` | `compareFn` | `array` | Sort an array in place. |
| `splice` | `startIndex` `deleteCount` `items` | `array` | Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. |
| `toSorted` | `compareFn` | `array` | A copy of the array sorted. |

Example:

```js
arr.slice(2, 5)  // Same as arr[2:5] in python
```

Remove by value:

```js
const index = arr.indexOf(value);
if (index !== -1) {
  arr.splice(index, 1);
}
```

### With callback

```js
arr.map(n => n * 2)
arr.reduce((accumulator, current) => accumulator + current, initialValue)
arr.forEach((currentValue, index, array) => doSomething())
arr.find(element => element > 4)  // first found element
arr.filter(element => element > 4)  // array that satisfies the condition
```

To iterate an array and run it `async`, use:

```js
// Sequence
for (const file of files) {
  const contents = await fs.readFile(file, 'utf8');
  console.log(contents);
}

// Parallel
await Promise.all(files.map(async (file) => {
  const contents = await fs.readFile(file, 'utf8')
  console.log(contents)
}));
```
