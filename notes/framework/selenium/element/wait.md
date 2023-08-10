---
title: Wait
ref: https://selenium-python.readthedocs.io/waits.html
---

## Explicit wait

### Usage

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

WebDriverWait(browser, 10).until(
  EC.presence_of_element_located((By.ID, 'foo'))
)
```

### Expected conditions list

- `EC.title_is`
- `EC.title_contains`
- `EC.presence_of_element_located`
- `EC.visibility_of_element_located`
- `EC.visibility_of`
- `EC.presence_of_all_elements_located`
- `EC.text_to_be_present_in_element`
- `EC.text_to_be_present_in_element_value`
- `EC.frame_to_be_available_and_switch_to_it`
- `EC.invisibility_of_element_located`
- `EC.element_to_be_clickable`
- `EC.staleness_of`
- `EC.element_to_be_selected`
- `EC.element_located_to_be_selected`
- `EC.element_selection_state_to_be`
- `EC.element_located_selection_state_to_be`
- `EC.alert_is_present`

## Implicit wait

Selenium will wait this value for every element that is not found immediately.

```python
browser.implicitly_wait(10)  # seconds
```
