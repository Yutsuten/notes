---
title: String
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
---

## Basic

```js
let str1 = 'Some string'
let str2 = `Value of a is ${a}`  // Template string [ES6]

// Regex
let reg1 = /[abc]/
let reg2 = new RegExp('[abc]')
```

## Methods

```js
str.substring(beginIndex, endIndex)
str.slice(beginIndex, endIndex)
str.substr(beginIndex, numChars)
str.trim()
str.split(separator)
str.replace(pattern, newPattern)  // first occurence
str.charAt(index)
str.toUpperCase()
str.toLowerCase()
str.endsWith(pattern)

// Find index
str.indexOf(text)
str.search(reg)

// Existence of pattern
reg.test(text)
```

## Techniques

### Split by lines

```js
let lines = text.split(/\r?\n/)
```

### Replace all

```js
let reg = /-/g  // Must have the g option
text.replace(reg, '')

text.split('-').join('')
```

### Capitalize

```js
text.charAt(0).toUpperCase() + text.slice(1)
```
