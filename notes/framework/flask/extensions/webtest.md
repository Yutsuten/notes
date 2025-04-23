---
title: WebTest
ref: https://flask-webtest.readthedocs.io/en/latest/
pypi: Flask-WebTest
---

## Usage

Initialization:

```py
from flask_webtest import TestApp
from main import app

# Inside tests
test_app = TestApp(app)
```

Making a [GET request](https://docs.pylonsproject.org/projects/webtest/en/latest/api.html#webtest.app.TestApp.get):

```py
response = test_app.get(
    url,
    params={'param1': 'value1', 'param2': 'value2'}, # => ?param1=value1&param2=value2
    headers={
        'Authorization': f'Bearer: {api_key}',
        'Content-Type': 'application/json',
    },
    status=200,
)
```

The [response](https://docs.pylonsproject.org/projects/webtest/en/latest/api.html#webtest-response-testresponse)
can be checked with:

```py
assert response.text == expected_body  # plain text
assert response.json == expected_dict  # JSON
```
