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
@api.marshal_with(model)  # Expected return values, code, description
@api.header()             # Response header
```

If the same endpoint returns multiple data formats:

- Manually use `marshal()` while returning for multiple models
- Don't use `marshal()` at all if the returning value isn't JSON

```py
from flask_restx import marshal

def get(self):
    output_format = request.args.get('format', 'json')
    output_type = request.args.get('type', 'summary')
    if output_format == 'csv':
        # Generate csv_content
        return Response(csv_content, mimetype='text/csv')
    if output_type == 'detailed':
        # Generate detailed_json_content, use detailed_model
        return marshal(detailed_json_content, detailed_model), 200
    # Generate summary_json_content, use summary_model
    return marshal(summary_json_content, summary_model), 200
```

## Models

```py
api.model()
```
