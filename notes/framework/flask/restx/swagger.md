---
title: Swagger
pypi: flask-restx
ref: https://flask-restx.readthedocs.io/en/latest/swagger.html
---

## Decorators

Define route:

```py
@api.route()
```

Input:

```py
@api.doc()       # Additional information
@api.response()  # Same as @api.doc(responses='...')
@api.expect()    # Expected input parameters
```

Output:

```py
@api.marshal_with()  # Expected return values, code, description
@api.header()        # Response header
```

## Models

```py
api.model()
```
