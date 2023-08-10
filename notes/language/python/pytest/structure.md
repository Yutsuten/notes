---
title: Structure
---

## Basic

The file name and function name must begin with `test`.

```python
import pytest

class TestApp:
  def setup_method(self):
    pass

  def test_hello(self):
    assert 'Hello' != 'World'

  @pytest.mark.skip(reason='Not implemented')
  def test_incomplete(self):
    pass

  def teardown_method(self):
    pass
```
