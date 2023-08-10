---
title: Javascript
---

## Run arbitrary javascript

```python
browser.execute_script('some_javascript()')
```

If the javascript returns an element,
it is returned and can be assigned to a variable.

```python
element = browser.execute_script('document.getElementById("foo")')
```
