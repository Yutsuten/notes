---
title: RESTX
pypi: flask-restx
ref: https://flask-restx.readthedocs.io/en/latest/
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

### Input args

```py
@api.doc(
    description='Documentation of this API',
    params={  # If not using @api.expect()
        'id': {
            'description': 'An ID',
            'in': 'query',
            'type': 'int',
        },
        'format': {
            'description': 'A file format',
            'in': 'query',
            'type': 'string',
            'enum': ['json', 'csv'],
        }
    }
)
@api.expect(my_model)  # Expected input parameters
```

### Output data

```py
@api.marshal_with(my_model)    # Expected return values, code, description
@api.response(200, 'Success')  # May be used several times
@api.header()                  # Response header
```

If the same endpoint returns multiple data formats:

- Use `marshal()` when returning JSON data
- Use `Response()` when returning anything else

```py
from flask_restx import marshal

def get(self):
    output_format = request.args.get('format', 'json')
    output_type = request.args.get('type', 'summary')
    if output_format == 'csv':     # CSV data
        return Response(csv_content, mimetype='text/csv')
    if output_type == 'detailed':  # Dict using detailed_model
        return marshal(detailed_json_content, detailed_model), 200
    # Dict using summary_model
    return marshal(summary_json_content, summary_model), 200
```

## Models

- [Models](https://flask-restx.readthedocs.io/en/latest/api.html#models)
- [Documenting the fields](https://flask-restx.readthedocs.io/en/latest/swagger.html#documenting-the-fields)
- [Automatically documented models](https://flask-restx.readthedocs.io/en/latest/swagger.html#automatically-documented-models)

```py
my_model = api.model('ResourceName', {
    'id': fields.Integer,
    'name': fields.String,
})
```
