---
title: Fixtures
ref: https://docs.pytest.org/en/latest/how-to/fixtures.html
---

## Usage

### Creating custom fixtures

```python
import pytest

@pytest.fixture
def some_list():
  return [1, 2, 3]
```
