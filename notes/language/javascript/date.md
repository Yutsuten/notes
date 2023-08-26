---
title: Date
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
---

## Basic

Generating a date:

```js
let now = new Date();
let anotherDay = new Date('2018-04-30');
let aMonth = new Date('2018/04');
```

Updating a date:

```js
now.setDate(3);
```

## Formating to string

```js
// ISO standart (UTC timezone)
now.toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ
now.toISOString().split('T')[0]; // YYYY-MM-DD

// ISO standart (local timezone)
(new Date(now.getTime() - (now.getTimezoneOffset() * 60000))).toISOString();
(new Date(now.getTime() - (now.getTimezoneOffset() * 60000))).toISOString().split('T')[0];

// YYYY-MM-DD (local timezone)
function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join('-');
}
```

You may also use `Intl`:

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
