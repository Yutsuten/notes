---
title: Python
ref: https://robot-framework.readthedocs.io/en/latest/autodoc/robot.api.html
---

## Create keywords

Starting from Robot Framework 4,
a keyword is automatically created from python functions.

Use the `keyword` decorator to set custom name, tags and argument types.

```python
from robot.api import deco

@deco.keyword('Hello World')
def hello_world():
    return 'Hello World'
```

Use the `not_keyword` decorator to disable a function to become a keyword.

```python
from robot.api import deco

@deco.not_keyword
def hello_world():
    return 'Hello World'
```

## Run robot keyword

```python
from robot.libraries.BuiltIn import builtIn
BuiltIn().fatal_error('Some message')
```

## Selenium driver

Get the selenium driver and access all selenium methods.

```python
from robot.libraries.BuiltIn import BuiltIn
SL = BuiltIn().get_library_instance('SeleniumLibrary')
SL.driver
```
