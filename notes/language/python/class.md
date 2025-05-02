---
title: Class
ref: https://docs.python.org/3/reference/compound_stmts.html#class-definitions
---

## Syntax

Example of class definition with inheritance:

```python
class MyClass(object):
  property = 10

  def __init__(self, param1):
    self.property = param1

  def custom_method(self, param):
    return self.property * param

class InheritanceExample(MyClass):
  param2 = None

  def __init__(self, param1, param2)
    MyClass.__init__(self, param1)  # super().__init__(param1)
    self.param2 = param2

  def custom_method(self, param):
    self(InheritanceExample, self).custom_method(param)  # Python 2
    self().custom_method(param)  # Python 3
```

Creating and using an instance:

```python
instance = MyClass(5)
print(instance.custom_method(10))

getattr(instance, 'foobar')       # Equivalent to x.foobar
setattr(instance, 'foobar', 123)  # Equivalent to x.foobar = 123

vars(instance)  # Print attributes as a dict
```

### Instance representation

Used when printing the instance.

```python
def __repr__(self):
  return '%.2f' % (self.property)
```

### Static Method

```python
@staticmethod
def my_static_method(param):
  return param + 1
```

### Destructor

```python
def __del__(self, instance):
  del self.property
```
