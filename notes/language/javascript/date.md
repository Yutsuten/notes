---
title: Date
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
---

## Basic

Generating a date:

```js
const now = new Date();
const copy = new Date(now);
const fromString = new Date('2018-04-30'); // YYYY-MM-DDTHH:mm:ss.sssZ | YYYY-MM-DDTHH:mm:ss.sss+HH:mm
const tomorrow  = new Date(
  now.getFullYear(), now.getMonth(), now.getDate() + 1,
  now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds(),
);
const yesterday = new Date(
  now.getFullYear(), now.getMonth(), now.getDate() - 1,
  now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds(),
);
```

Updating a date:

```js
now.setFullYear(2024);
now.setMonth(2); // Starts from 0
now.setDate(14);
now.setHours(0);
now.setMinutes(3);
now.setSeconds(50);
now.setMilliseconds(727);
```

Check if a date is valid:

```js
if (date instanceof Date && !isNaN(date.getTime())) {
  console.log('Valid!');
} else {
  console.log('Invalid!');
}
```

## Formating to string

ISO standart:

```js
// UTC: YYYY-MM-DDTHH:mm:ss.sssZ
now.toISOString();

// Local: YYYY-MM-DDTHH:mm:ss.sss
(new Date(now.getTime() - (now.getTimezoneOffset() * 60000))).toISOString().slice(0, -1);
```

Localized:

```js
// YYYY/MM/DD HH:mm:ss
now.toLocaleString();
```

Custom:

```js
// YYYY-MM-DD (local timezone)
function formatDate(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return [year, month, day].join('-');
}
```

### Intl

```js
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
const intl = new Intl.DateTimeFormat(locale, options);
intl.format(date);
```

| Example | Sample output |
| --- | --- |
| `'default', { dateStyle: 'full', timeStyle: 'full' }` | 2020年12月20日日曜日 12時23分16秒 日本標準時 |
| `'default', { dateStyle: 'long', timeStyle: 'long' }` | 2020年12月20日 12:23:16 JST |
| `'ja-JP', { dateStyle: 'medium', timeStyle: 'medium' }` | 2020/12/20 12:23:16 |
| `'ja-JP', { dateStyle: 'short', timeStyle: 'short' }` | 2020/12/20 12:23 |
