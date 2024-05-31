---
title: String
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
---

## Usage

```js
let str1 = 'Some string'
let str2 = `Value of a is ${a}`  // Template string [ES6]
```

| Method | Params | Return type | Description |
| --- | --- | --- | --- |
| `charAt` | `index` | `string` | Get character from index. |
| `endsWith` | `pattern` | `boolean` | Checks whether a string ends with the characters of this string. |
| `indexOf` | `searchString` | `number` | Get the index of the first occurrence of the specified substring. |
| `match` | `regex` | `array` | Find matching results (with `g` flag) or captured groups (without `g` flag). |
| `padEnd` | `targetLen` `padString` | `string` | Pads this string from end with the given string. |
| `padStart` | `targetLen` `padString` | `string` | Pads this string from start with the given string. |
| `replace` | `pattern` `replacement` | `string` | Replace first match (if `pattern` is string) or all matches (if `pattern` is regex). |
| `search` | `reg` | `number` | Same as `indexOf`, but uses regex as parameter. |
| `slice` | `beginIndex` `endIndex` | `string` | Same as, for example, `text[5:10]` in python. |
| `split` | `sep` | `array` | Splits by separator. |
| `toLowerCase` | | `string` | Convert to lower case. |
| `toUpperCase` | | `string` | Convert to upper case. |
| `trim` | | `string` | Remove whitespace from both ends. |

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
