---
title: Number
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
---

## Basic usage

```javascript
mynum = 1000;        // Decimal notation
mynum = 1e3;         // Exponential notation (same as 1 * 10^3 = 1000)
mynum = 0xff;        // Hexadecimal notation
mynum = 0b11111111;  // Binary notation
```

## Convert from string

Both integer and float are `Number`.

```javascript
Number.parseInt('10');
Number.parseFloat('3.1416');
```

If the conversion fails, `NaN` is returned.

```javascript
isNaN(myVar);
```

## Rounding

To the nearest integer:

```javascript
Math.round(0.9);
// 1
```

With the specified number of decimal places (`string` is returned):

```javascript
3.78932.toFixed(2);
// '3.79'
```
