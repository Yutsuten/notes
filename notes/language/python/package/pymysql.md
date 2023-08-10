---
title: Pymysql
---

## Connect to MySQL DB using python

### Install

```bash
pip install pymysql
```

### Connect to DB

```python
connection = pymysql.connect(host='localhost', user='myuser', password='mypass', database='mydb')
connection.close()
```
