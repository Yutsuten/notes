---
title: Testing
ref: https://flask.palletsprojects.com/en/1.1.x/testing/
---

## Create request context

```python
from flask import request
```

For GET requests (access data with `request.args`):

```python
with app.test_request_context('/?name=Taro'):
  assert request.path == '/'
  assert request.args['name'] == 'Taro'

with app.test_request_context('/', data={'name': 'Taro'}):
  assert request.args['name'] == 'Taro'
```

For POST requests (access data with `request.form`):

```python
with app.test_request_context('/', method='POST', data={'name': 'Taro'}):
  assert request.form['name'] == 'Taro'
```
