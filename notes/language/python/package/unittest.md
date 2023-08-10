---
title: Unittest
ref: https://docs.python.org/3/library/unittest.html
---

## Usage

```python
import unittest

class TestHello(unittest.TestCase):
    def test_hello(self):
        self.assertIsNotNone('Hello!')

    @unittest.skip('Skip me')
    def test_nothing(self):
        pass
```

Run:

```shell
python -m unittest
python -m unittest discover -s tests
python -m unittest tests.test_module.TestClass.test_method
```

## Asserts

```python
## All the assert methods accept a msg argument
assertEqual(a, b)
assertNotEqual(a, b)
assertGreater(a, b)
assertGreaterEqual(a, b)
assertLess(a, b)
assertLessEqual(a, b)
assertTrue(x)
assertFalse(x)
assertIs(a, b)
assertIsNot(a, b)
assertIsNone(x)
assertIsNotNone(x)
assertIn(a, b)
assertNotIn(a, b)
assertIsInstance(a, b)
assertNotIsInstance(a, b)
assertRaises(exc, fun, *args, **kwds)
```
