---
title: Queries
---

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

```sql
SELECT email FROM users GROUP BY email HAVING COUNT(email) > 1;
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
