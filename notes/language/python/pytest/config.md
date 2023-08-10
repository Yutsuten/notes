---
title: Config
---

## How to

Create a file named `pytest.ini` with the following contents:

```ini
[pytest]
addopts = --cov=mymodule.script --cov-report=term-missing
testpaths = tests
```
