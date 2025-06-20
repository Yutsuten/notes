---
title: Parametrize
ref: https://docs.pytest.org/en/stable/how-to/parametrize.html
---

## Usage

[API reference](https://docs.pytest.org/en/stable/reference/reference.html#pytest.Metafunc.parametrize)

```python
@pytest.mark.parametrize(
    ('param1', 'param2', 'param3'),
    [
        ('foo1', 'foo2', 'foo3'),
        ('bar1', 'bar2', 'bar3'),
    ],
)
def test_something(param1, param2, param3):
```
