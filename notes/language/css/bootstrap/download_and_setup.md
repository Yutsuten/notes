---
title: Download and setup
---

## Download

- [jQuery](https://jquery.com/download/) (Requirement)
- [Popper.js](https://github.com/FezVrasta/popper.js/releases) (Requirement)
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/download/)

## Directory setup

```txt
static/libs/
  bootstrap.min.css
  bootstrap.min.css.map
  bootstrap.min.js
  bootstrap.min.js.map
  jquery-3.3.1.min.js
  popper.min.js      (UMD)
  popper.min.js.map  (UMD)
```

## Basic html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" type="text/css" href="/static/libs/bootstrap.min.css">

    <title>Hello world!</title>
  </head>
  <body>
    <h1>Hello world!</h1>

    <script type="text/javascript" src="/static/libs/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="/static/libs/popper.min.js"></script>
    <script type="text/javascript" src="/static/libs/bootstrap.min.js"></script>
  </body>
</html>
```
