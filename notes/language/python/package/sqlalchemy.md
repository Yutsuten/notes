---
title: SQLAlchemy
ref: https://docs.sqlalchemy.org/en/13/orm/query.html
---

## Query API

```python
from sqlalchemy import func
```

### FROM clause

Generate a query:

```python
query = session.query(Table)
```

### SELECT clause

Choose the columns:

```python
query = query.with_entities(
  Table.id,
  Table.column,
)
```

Apply some special functions to columns (MIN, MAX, COUNT):

```python
query = query.with_entities(
  func.count(Table.column)
)
query = query.with_entities(
  func.max(Table.column)
)
```

### WHERE clause

```python
query = query.filter_by(id=3)
```

### GROUP BY clause

```python
query = query.group_by(Table.column)
```

### Execute

Get all results from current query:

```python
query.all()
```
