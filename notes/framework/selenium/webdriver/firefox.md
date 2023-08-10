---
title: Firefox
ref: https://firefox-source-docs.mozilla.org/testing/geckodriver/index.html
---

## GeckoDriver

Driver used to interact with Gecko browsers, such as Firefox.

## Options

```python
from selenium import webdriver
from selenium.webdriver.firefox.options import Options

options = Options()
options.headless = True
options.log.level = 'trace'

browser = webdriver.Firefox(options=options)
```
