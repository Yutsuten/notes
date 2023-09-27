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

| Method | Description |
| --- | --- |
| `arr.indexOf(element)` | Returns the element's index, or `-1` if not present. |
| `arr.includes(element)` | Returns `true` if the element exists, `false` otherwise. |
| `arr.join(',')` | Concatenates all elements using the separator and returns a string. |
| `arr.push(element1, ...)` | Append elements to an array. |
| `arr.pop()` | Removes the last element and return it. |
| `arr.shift()` | Removes the first element and return it. |
| `arr.slice()` | Returns a shallow copy of a portion of an array. `[start; end]` (end not included) |
| `arr.splice(startIndex, deleteCount, item1, ...)` | Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. |
| `arr1.concat(arr2)` | Creates a new array with `arr1` and `arr2` elements merged. |

Example:

```js
arr.slice(2, 5)  // Same as arr[2:5] in python
```

### With callback

```js
arr.map(n => n * 2)
arr.reduce((accumulator, current) => accumulator + current, initialValue)
arr.forEach((currentValue, index, array) => doSomething())
arr.find(element => element > 4)  // first found element
arr.filter(element => element > 4)  // array that satisfies the condition
```

To interate an array and run it `async`, use:

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
