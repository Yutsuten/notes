---
title: Mock
ref: https://docs.python.org/3/library/unittest.mock.html
---

## Usage

Import from `unittest.mock`,
or from `mock` if installed separately.

### Set value

```python
@mock.patch('calc.Calculator.sum')
def test_sum_return_value(self, sum):
    sum.return_value = 9
```

### Side effect

```python
def sum(a, b):
    if a > b:
        return 5
    return 10

@mock.patch('mymodule.sum')
def test_sum_side_effect(self, mock_sum):
    mock_sum.side_effect = sum

@mock.patch('mymodule.sum', side_effect=Exception())
def test_sum_side_effect(self, mock_sum):
    mymodule.sum()  # Will raise Exception()
```

### Assert call

```python
@mock.patch('calc.Calculator.sum')
def test_call_count(self, sum):
    sum.assert_called_with(1)  # Asserts the last call's parameters
    sum.assert_any_call(1)     # Asserts any call's parameters
    assert sum.call_count == 3
    sum.call_args
    sum.call_args_list
```

### Mock file

```python
def test_open_file(self):
    mock_open = mock.mock_open(read_data='file_content')
    with mock.patch('builtins.open', mock_open):
        with open('/some/path', 'r') as text_file:
            text_file.read()  # Returns 'file_content'
    mock_open.assert_any_call('/some/path', 'r')
    mock_open().write.call_args.args
```

### Mock module

```python
import sys
sys.modules['some_module'] = mock.MagicMock()
```

## Tips

Mocking can sometimes be tricky.
Understanding how it works can help saving some time.

### Mock your own module

Mock your own module instead the original module.
Let's say your module is at `a.b` and it imports `x.y.z`.
You want to mock `z`.

The result of mocking may be like this:

```python
@mock.patch('x.y.z')  # Does not work...
@mock.patch('a.b.z')  # Works!
```

### Reloading the module

Mocking a module that is already loaded won't work.
This often happens when you load a module in a `import` statement at the top of the script,
and create a mock for it in runtime.

To solve this,
reload the module after creating the mock:

```python
from importlib import reload  # Python >= 3.4 only, else unneeded
reload(x.y.z)
```
