---
title: Queries
---

## Database

```sql
CREATE DATABASE dbname;
DROP DATABASE dbname;
```

## Table

```sql
CREATE TABLE users (id INTEGER PRIMARY KEY, nick TEXT);
CREATE TABLE inventory (id INTEGER, name TEXT, FOREIGN KEY (id) REFERENCES users(id));
ALTER TABLE users ADD COLUMN achievements INTEGER;
ALTER TABLE users MODIFY nick TEXT NOT NULL;
```

Foreign key

```sql
ALTER TABLE users ADD FOREIGN KEY (item) REFERENCES items(id);
```

## Select

```sql
SELECT * FROM users;
SELECT * FROM users WHERE achievements > 5;
SELECT * FROM users WHERE deleted IS NULL;
SELECT * FROM users WHERE id IN (1, 5, 8);
SELECT * FROM users WHERE id NOT IN (1, 5, 8);
SELECT * FROM users WHERE nick LIKE 'xX%Xx';
SELECT * FROM users WHERE nick BETWEEN 'A' AND 'J';
SELECT * FROM users WHERE achievements BETWEEN 10 AND 20;
SELECT * FROM users WHERE server = 'Poring' AND achievements > 5;
SELECT * FROM users WHERE achievements < 5 OR achievements > 10;
SELECT nick AS 'Nickname' FROM users;
```

### Limit

```sql
SELECT * FROM users LIMIT 10;
```

### Distinct

```sql
SELECT DISTINCT server FROM users;
```

### Functions

Some databases may have functions not listed bellow.

```sql
SELECT COUNT(*) FROM users;
SELECT server, COUNT(*) FROM users GROUP BY server;
SELECT SUM(achievements) FROM users;
SELECT MAX(achievements) FROM users;
SELECT MIN(achievements) FROM users;
SELECT AVG(achievements) FROM users;
SELECT ROUND(AVG(achievements), 2) FROM users;
SELECT LENGTH(nick) FROM users;
```

### Group by

Search for duplicated emails:

```sql
SELECT email FROM users GROUP BY email HAVING COUNT(email) > 1;
```

Count number of entries for each combination of two columns:

```sql
SELECT column1, column2, COUNT(*) FROM my_table GROUP BY column1, column2;
```

Add `WHERE` before `GROUP BY` to filter by a condition (order is important):

```sql
SELECT column1, column2, COUNT(*) FROM my_table WHERE column3 = 'foo' GROUP BY column1, column2;
```

### Order By

```sql
SELECT * FROM users ORDER BY achievements DESC;
SELECT * FROM users ORDER BY achievements ASC;
```

### Join

Use `JOIN` to merge the data that exists on both tables.

Use `LEFT JOIN` to merge the data between tables, but set `NULL` if there is no matching value.

```sql
SELECT * FROM users JOIN inventory ON users.id = inventory.id;
SELECT * FROM users LEFT JOIN inventory ON users.id = inventory.id;
```

### Subquery

```sql
SELECT id, name, email FROM users WHERE email IN (SELECT email FROM users GROUP BY email HAVING COUNT(email) > 1)
```

## Insert

```sql
INSERT INTO users (id, nick) VALUES (1, 'Yutsuten');
```

Inserting items with similar data:

```sql
INSERT INTO users (nick, email, status) SELECT nick, email, 2 FROM users WHERE status = 1;
```

## Update

```sql
UPDATE users SET nick = 'Tom' WHERE id = 5;
```

## Remove

```sql
DELETE FROM users WHERE id = 5;
```

Remove all entries from table:

```sql
TRUNCATE TABLE users CASCADE;
```
