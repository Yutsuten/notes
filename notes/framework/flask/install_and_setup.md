---
title: Install and setup
---

## Install

```shell
pip install Flask
```

## Simple site setup

```python
## views.py
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    return 'Hello, World!'
```

```shell
export FLASK_APP=views.py
export FLASK_DEBUG=1
flask run
```
