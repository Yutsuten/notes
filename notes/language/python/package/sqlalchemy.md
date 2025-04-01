---
title: SQLAlchemy
ref: https://docs.sqlalchemy.org/en/20/orm/quickstart.html
---

## Defining tables

[Column documentation](https://docs.sqlalchemy.org/en/20/core/metadata.html#sqlalchemy.schema.Column)

```py
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, Integer, String

class Base(DeclarativeBase):
    pass

class Model(Base):
    __tablename__ = 'model'

    id = Column('id', Integer, primary_key=True)
    column = Column('column', String(50), index=True)  # To index this column
```

To apply or revert table changes, use [alembic](https://alembic.sqlalchemy.org/en/latest/front.html).

```shell
alembic upgrade head
alembic downgrade -1
alembic revision --autogenerate -m 'description of changes'
```

## Querying

```py
from sqlalchemy import select
from sqlalchemy.sql.expression import func
```

### FROM clause

Generate a query:

```py
query = select(Model)
```

### SELECT clause

Choose the columns (`Column` objects are accessed from the `Table.c` accessor):

```py
query = select(Model.id, Model.column)
```

Apply some special functions to columns (MIN, MAX, COUNT):

```py
query = select(func.count(Model.id))
query = select(func.max(Model.id))
```

### WHERE clause

```py
query = query.where(Model.id == 3)
query = query.where(Model.column.in_(['first', 'second']))
query = query.where(Model.column.contains('foo'))
query = query.where(Model.column.startswith('boo'))
```

### GROUP BY clause

```py
query = query.group_by(Model.column)
```

### JOIN

```py
query = query.join(Model.column)  # column is foreign key
```

### Execute

Get results from query:

```py
session.execute(query).scalars().all()
session.execute(query).scalar_one()
session.scalars(query).all()
session.scalar(query)
```
