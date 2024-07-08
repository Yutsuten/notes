---
title: Queries
---

## Database

```sql
USE dbname;
SHOW DATABASES;
SHOW DATABASE();
SHOW DATABASES LIKE '%name%';
```

## Table

```sql
DESCRIBE users;
SHOW TABLES;
```

## Display mode

Use `\G` to display results in expanded formatting mode.

```sql
SELECT * FROM my_table \G
```

## Functions

```sql
SELECT ISNULL(title), title FROM posts;
SELECT SUBSTRING(nick,1,10) FROM users;
```
