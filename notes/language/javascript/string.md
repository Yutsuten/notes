---
title: String
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
---

## Usage

```js
const str1 = 'Some string';
const str2 = `Value of a is ${a}`;  // Template string [ES6]
const size = str1.length;
```

| Method        | Returns   | Description                                                                                             |
| ------------- | --------  | ------------------------------------------------------------------------------------------------------- |
| `charAt`      | `string`  | Get character from `index`.                                                                             |
| `startsWith`  | `boolean` | Checks whether a string starts with the characters of `pattern`.                                        |
| `endsWith`    | `boolean` | Checks whether a string ends with the characters of `pattern`.                                          |
| `includes`    | `boolean` | Determine whether a given string may be found within this `searchString`.                               |
| `indexOf`     | `number`  | Get the index of the first occurrence of the specified `searchString`.                                  |
| `match`       | `array`   | Find matching results (with `g` flag) or captured groups (without `g` flag) with the given `regex`.     |
| `padEnd`      | `string`  | Pads `length` from end with the given `string`.                                                         |
| `padStart`    | `string`  | Pads `length` from start with the given `string`.                                                       |
| `replace`     | `string`  | Replace first match (if `pattern` is string) or all matches (if `pattern` is regex) with `replacement`. |
| `search`      | `number`  | Same as `indexOf`, but uses `regex` as parameter.                                                       |
| `slice`       | `string`  | Same as, for example, `text[5:10]` in python.                                                           |
| `split`       | `array`   | Splits by separator.                                                                                    |
| `toLowerCase` | `string`  | Convert to lower case.                                                                                  |
| `toUpperCase` | `string`  | Convert to upper case.                                                                                  |
| `trim`        | `string`  | Remove whitespace from both ends.                                                                       |

## Examples

Split by lines:

```js
const lines = text.split(/\r?\n/);
```

Replace all:

```js
text.replace(/-/g, '');  // Must have the g option
text.split('-').join('');
```

Capitalize:

```js
text.charAt(0).toUpperCase() + text.slice(1);
```

Add zeros to the left of a number:

```js
String(1).padStart(2, '0');  // "01"
```
