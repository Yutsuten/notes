---
title: Ajax
ref: https://api.jquery.com/jquery.ajax/
---

## Shorthands

```javascript
$.get(url, function (data) {
}).fail(function (jqXHR) {
});

$.post(url, data, function (data) {
}).fail(function (jqXHR) {
});
```

## Low-level Interface

```javascript
$.ajax({
    method: 'GET',
    url: url
}).done(function (data) {
}).fail(function (jqXHR) {
});
```
