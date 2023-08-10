---
title: Datatable
ref: https://datatables.net/reference/api/
---

## Usage

Initialize the table:

```js
let table = $('#table').DataTable();
```

Update table's content:

```js
table.rows().every(function () {
   let data = this.data();
   data.counter += 1;
   this.invalidate();
});
```

Redraw the table (use false to keep pagination).

```js
table.draw(false);
```
