---
title: SQLAlchemy
ref: https://docs.sqlalchemy.org/en/20/orm/quickstart.html
---

## Defining tables

```python
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

## Query

```python
from sqlalchemy import func, select
```

### FROM clause

Generate a query:

```python
query = select(Model)
```

### SELECT clause

Choose the columns (`Column` objects are accessed from the `Table.c` accessor):

```python
query = select(Model.id, Model.column)
```

Apply some special functions to columns (MIN, MAX, COUNT):

```python
query = select(func.count(Model.id))
query = select(func.max(Model.id))
```

### WHERE clause

```python
query = query.where(Model.id == 3)
query = query.where(Model.column.in_(['first', 'second']))
query = query.where(Model.column.contains('foo'))
query = query.where(Model.column.startswith('boo'))
```

### DISTINCT clause

```python
query = query.distinct()
```

### ORDER BY clause

```python
query = query.order_by(Model.column)
query = query.order_by(Model.column.asc())
query = query.order_by(Model.column.desc())
```

### GROUP BY clause

:::tip
Don't forget to select the columns used by `group_by`.
:::

Single column example:

```python
query = select(Model.column, func.count(Model.id)).group_by(Model.column)
```

Multiple columns example:

```python
query = select(Model.column1, Model.column2, func.count(Model.id)).group_by(Model.column1, Model.column2)
```

### JOIN

```python
query = query.join(Model.column)  # column is foreign key
```

### Execution Options

Lazily process query result
(be sure to not close the session by doing everything inside the `with` block,
or by passing `session` as a parameter to the generator function):

```python
# Flask example
def generate_csv(session):
    for row in session.execute(query.execution_options(yield_per=1000)):
        yield ','.join(map(str, row)) + '\n'

return Response(
    generate_csv(session),
    mimetype='text/csv',
    headers={'Content-Disposition': 'attachment;filename=data.csv'},
)
```

### Execute

Get [results](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result)
from a query:

```python
# Single column, single row
session.execute(query).scalar_one()
session.execute(query).scalar_one_or_none()
session.scalar(query)

# Single column, multiple rows
session.execute(query).scalars().all()
session.scalars(query).all()

# Multiple columns, single row
session.execute(query).one()
session.execute(query).one_or_none()
session.execute(query).first()
session.execute(query).fetchone()

# Multiple columns, multiple rows
session.execute(query).all()
session.execute(query).fetchall()
```

It is possible to iterate the result object directly:

```python
for row in session.execute(query):
    print(row)
```

## Insert

Batch insert data (uses `dict` instead of Model's instances):

```python
session.execute(insert(Model), [dict, dict, dict, ...])
session.commit()
```

## More documentation

- [Using ORM Declarative Forms to Define Table Metadata](https://docs.sqlalchemy.org/en/20/tutorial/metadata.html#using-orm-declarative-forms-to-define-table-metadata)
- [Using SELECT Statements](https://docs.sqlalchemy.org/en/20/tutorial/data_select.html)
- [Using INSERT Statements](https://docs.sqlalchemy.org/en/20/tutorial/data_insert.html)
- [Using UPDATE and DELETE Statements](https://docs.sqlalchemy.org/en/20/tutorial/data_update.html)
