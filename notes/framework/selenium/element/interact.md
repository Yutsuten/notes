---
title: Interact
ref: https://www.selenium.dev/selenium/docs/api/py/webdriver_remote/selenium.webdriver.remote.webelement.html
---

## Common

```python
element.text
element.get_attribute('innerText')  # May work better than element.text
element.get_attribute('class')
element.get_property('value')
element.is_enabled()
element.click()
element.submit()  # If within a form
```

## Checkbox

```python
element.is_selected()
```

## Select

```python
from selenium.webdriver.support.ui import Select
select = Select(element)
select.options               # Return all option elements
select.all_selected_options  # Return selected option elements
select.deselect_all()
select.select_by_index(0)
select.select_by_value('boo')
select.select_by_visible_text('boo')
```

## Date

```python
browser.execute_script('document.getElementById("startDate").value="{}"'.format('2019-01-28'))
```

## Input text

```python
from selenium.webdriver.common.keys import Keys
element.clear()
element.send_keys('seleniumhq' + Keys.RETURN)
element.send_keys(' ')          # May work as click()
element.send_keys(Keys.RETURN)  # May work as click()
```
