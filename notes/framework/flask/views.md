---
title: Views
ref: https://flask.palletsprojects.com/en/2.3.x/api/#incoming-request-data
---

## Request

### Usage

The import bellow is required:

```python
from flask import request
```

#### Arguments access

URL arguments (usually on GET requests):

```python
request.args.get('arg_name')
request.args.getlist('status')
```

Form parameters (usually on POST requests):

```python
request.form.get('param_name')
```

JSON data (usually on POST, PUT or Ajax requests):

```python
request.get_json()
request.json.get('arg_name')
```

## Response

Common imports:

```python
from flask import jsonify, Response
```

### Status code

```python
return Response('', status=204)
return jsonify({}), 204
```

### Headers

Setting `mimetype` also changes the value of the header `Content-Type`.

```python
@app.route('/', methods=['GET'])
def index():
    return Response('<?xml version="1.0" encoding="UTF-8"?>\n<html></html>', mimetype='text/xml')
```

### Return file

```python
from flask import send_from_directory

@app.route('/', methods=['GET'])
def index():
    return send_from_directory(directory=app.root_path, filename='sound.mp3')
```
