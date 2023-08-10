---
title: Ajax
ref: https://api.jquery.com/jquery.ajax/
---

## Shorthands

```js
$.get(url, function (data) {
}).fail(function (jqXHR) {
});

$.post(url, data, function (data) {
}).fail(function (jqXHR) {
});
```

## Low-level Interface

```js
$.ajax({
    method: 'GET',
    url: url
}).done(function (data) {
}).fail(function (jqXHR) {
});
```
