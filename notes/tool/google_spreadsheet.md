---
title: Google spreadsheet
---

## Tips

### Specify a cell of another sheet

Type `=` followed by the sheet name, an exclamation point, and the cell being copied.
If the sheet name contain spaces, use quotes around it.

```crystal
=Sheet1!A1
='Sheet two'!B4
```

### Count number of filled cells

```crystal
=COUNTA(B5:B200)
```

### Conditional formatting based on another cell

In the dropdown for selecting the type of condition,
select `Custom formula` (at the bottom) and use:

| Formula | Objective |
| --- | --- |
| `C1=1` | Column is auto incremented if applying to multiple columns (ex: implies `D1=1` `E1=1`). |
| `$C1=1` | Column is fixed to the provided formula. |
