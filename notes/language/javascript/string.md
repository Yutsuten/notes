---
title: String
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
---

## Usage

```js
let str1 = 'Some string'
let str2 = `Value of a is ${a}`  // Template string [ES6]
```

| Method | Description |
| --- | --- |
| `str.charAt(index)` | Returns a new string consisting of the single UTF-16 code unit at the given index. |
| `str.endsWith(pattern)` | Determines whether a string ends with the characters of this string, returning `true` or `false` as appropriate. |
| `str.indexOf(text)` | Searches this string and returns the index of the first occurrence of the specified substring. |
| `str.match(regex)` | Retrieves the result of matching this string against a regular expression. |
| `str.padEnd(targetLength, padString)` | Pads this string from end with the given string. |
| `str.padStart(targetLength, padString)` | Pads this string from start with the given string. |
| `str.replace(pattern, newPattern)` | Returns a new string with one, some, or all matches of a pattern replaced by a replacement. If pattern is a string, only the first occurrence will be replaced. |
| `str.search(reg)` | Returns the index of the first match in the string. |
| `str.slice(beginIndex, endIndex)` | Extracts a section of this string and returns it as a new string. |
| `str.split(separator)` | Splits by separator and returns an array of substrings. |
| `str.toLowerCase()` | Returns this string converted to lower case. |
| `str.toUpperCase()` | Returns this string converted to uppercase. |
| `str.trim()` | Removes whitespace from both ends of this string. |

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
