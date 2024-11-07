---
title: Testing
ref: https://flask.palletsprojects.com/en/stable/testing/
---

## Create request context

With [test_request_context](https://flask.palletsprojects.com/en/stable/api/#flask.Flask.test_request_context)
we can change the contents of `flask.request` used in the application.

```python
from flask import request
```

For GET requests (access data with `request.args`):

```python
with app.test_request_context('/', query_string={'name': 'Taro'}):
    assert request.path == '/'
    assert request.method == 'GET'
    assert request.args['name'] == 'Taro'
```

For POST requests (access data with `request.form`):

```python
with app.test_request_context('/', method='POST', data={'name': 'Taro'}):
    assert request.path == '/'
    assert request.method == 'POST'
    assert request.form['name'] == 'Taro'
```

For POST requests using `application/json` header (access data with `request.json`):

```python
with app.test_request_context('/', method='POST', json={'name': 'Taro'}):
    assert request.path == '/'
    assert request.method == 'POST'
    assert request.json['name'] == 'Taro'
```
