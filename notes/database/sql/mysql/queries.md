---
title: Queries
---

## Database

```sql
CREATE DATABASE dbname;
DROP DATABASE dbname;
USE dbname;
SHOW DATABASES;
SHOW DATABASES LIKE '%name%';
```

## Table

```sql
CREATE TABLE users (id INTEGER PRIMARY KEY, nick TEXT);
CREATE TABLE inventory (id INTEGER, name TEXT, FOREIGN KEY (id) REFERENCES users(id));
ALTER TABLE users ADD COLUMN achievements INTEGER;
ALTER TABLE users MODIFY nick TEXT NOT NULL;
DESCRIBE users;
SHOW TABLES;
```

## Display mode

Use `\G` to display results in expanded formatting mode.

```txt
SELECT * FROM my_table \G
```

## Functions

```sql
SELECT ISNULL(title), title FROM posts;
SELECT SUBSTRING(nick,1,10) FROM users;
```
