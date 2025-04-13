---
title: Swagger
pypi: flask-restx
ref: https://flask-restx.readthedocs.io/en/latest/swagger.html
---

## Decorators

### Route definition

Endpoint with no arguments:

```py
@api.route('/tasks')
```

Endpoint that requires an argument
([available converters](https://github.com/pallets/werkzeug/blob/main/src/werkzeug/routing/converters.py#L253-L261)):

```py
@api.route('/tasks/<string:name>')
```

### Input

```py
@api.doc()       # Additional information
@api.response()  # Same as @api.doc(responses='...')
@api.expect()    # Expected input parameters
```

### Output

```py
@api.marshal_with()  # Expected return values, code, description
@api.header()        # Response header
```

## Models

```py
api.model()
```
