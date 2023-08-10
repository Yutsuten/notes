---
title: Date
ref: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

```js
// Instantiate
let now = new Date();
let anotherDay = new Date('2018-04-30');
let aMonth = new Date('2018/04');

// ISO standart (UTC timezone)
now.toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ
now.toISOString().split('T')[0]; // YYYY-MM-DD

// ISO standart (local timezone)
(new Date(now.getTime() - (now.getTimezoneOffset() * 60000))).toISOString();
(new Date(now.getTime() - (now.getTimezoneOffset() * 60000))).toISOString().split('T')[0];

// YYYY-MM-DD (local timezone)
function formatDate(date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

// Set day
now.setDate(3);
```
