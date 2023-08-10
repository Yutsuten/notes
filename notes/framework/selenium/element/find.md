---
title: Find
ref: https://selenium-python.readthedocs.io/locating-elements.html
---

## Methods

These are the recommended methods:

| Single element | Multiple elements |
| --- | --- |
| `find_element` | `find_elements` |

These methods has been deprecated:

| Single element | Multiple elements |
| --- | --- |
| `find_element_by_id` | - |
| `find_element_by_name` | `find_elements_by_name` |
| `find_element_by_xpath` | `find_elements_by_xpath` |
| `find_element_by_link_text` | `find_elements_by_link_text` |
| `find_element_by_partial_link_text` | `find_elements_by_partial_link_text` |
| `find_element_by_tag_name` | `find_elements_by_tag_name` |
| `find_element_by_class_name` | `find_elements_by_class_name` |
| `find_element_by_css_selector` | `find_elements_by_css_selector` |

### Examples

```python
element = browser.find_element(By.ID, 'foo')
```

Nesting is possible.

```python
browser.find_element(By.ID, 'foo').find_element(By.ID, 'boo')
```

Get the parent element.

```python
parent = browser.find_element(By.ID, 'child').find_element(By.XPATH, '..')
```
