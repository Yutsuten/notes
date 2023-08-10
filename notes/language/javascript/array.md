---
title: Array
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
---

## Basic

```js
let arr = [2, 3, 5];
arr.length;
arr = Array(size).fill(value);
```

## Methods

```js
arr.push(element1, ..., elementN)
arr.pop()    // last element
arr.shift()  // first element
arr.splice(startIndex, deleteCount)
arr.indexOf(element)
arr.join(',')
arr.includes(element)
arr1.concat(arr2)  // does not modify arr1 and arr2

arr.map(n => n * 2)
arr.reduce((accumulator, current) => accumulator + current, initialValue)
arr.forEach((currentValue, index, array) => doSomething())
arr.find(element => element > 4)  // first found element
arr.filter(element => element > 4)  // array that satisfies the condition

Array.isArray(myvar)
```

## Example

Check if the array has elements:

```js
if (Array.isArray(myvar) && myvar.length) {}
```
