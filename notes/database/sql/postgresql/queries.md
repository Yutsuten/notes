---
title: Queries
---

## Database

| Command | Description |
| --- | --- |
| `\c DBNAME` `\connect DBNAME` | Connect to database. |
| `\l` `\list` | List databases. |
| `\q` `\quit` | Quit. |

## Table

| Command | Description |
| --- | --- |
| `\dt` | Describe (list) tables. |
| `\d TABLE` | Describe table. |

## Display mode

Use `\x` to toggle the way to display query results (table or expanded).

It is also possible to use `\gx` to apply expanded formatting mode for the current query only.

```txt
SELECT * FROM my_table \gx
```

## Functions

```sql
SELECT COALESCE(title, 'NULL') AS title FROM posts;
SELECT LEFT(nick,10) FROM users;
```
