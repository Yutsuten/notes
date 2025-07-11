---
title: Fixtures
ref: https://docs.pytest.org/en/latest/how-to/fixtures.html
---

## Usage

The tests configuration file is named `conftest.py`.
It is placed inside the tests folder.

### Test fixtures

Can be used as parameters in each test.

```python
import pytest

@pytest.fixture
def some_list():
    return [1, 2, 3]

# Example of how to use
def test_something(some_list):
    assert somelist == [1, 2, 3]
```

### Session fixtures

To run some code only once before all tests
(for DB setup, for example),
use `scope='session', autouse=True`.

```python
@pytest.fixture(scope='session', autouse=True)
def setup_session():
    setup_database()
    yield
    teardown_database()
```

`autouse` applies the fixture automatically.
