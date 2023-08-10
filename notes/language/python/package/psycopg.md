---
title: Psycopg
---

## Connect to postgres DB using python

### Install

```shell
pip install psycopg2-binary
```

### Connect to DB

```python
import psycopg2

conn = psycopg2.connect(user='postgres', host="localhost", database="mydb")
conn.close()  # After using the DB it is good practice to close the connection
```

### Select

```python
cur = conn.cursor()
sql = 'SELECT id, column_name FROM my_table;'
cur.execute(sql)
result = cur.fetchone()
result_list = cur.fetchall()
cur.close()
```

### Insert

```python
cur = conn.cursor()
sql = 'INSERT INTO my_table(column_name) VALUES(%s) RETURNING id;'
cur.execute(sql, (value_1,))
id = cur.fetchone()[0]
conn.commit()
cur.close()
```

### Delete

```python
cur = conn.cursor()
sql = 'DELETE FROM table_1 WHERE id = %s;'
cur.execute(delete_sql, (value_1,))
conn.commit()
cur.close()
```
