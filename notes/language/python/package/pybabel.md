---
title: Pybabel
---

## Translation into multiple languages

```python
## i18n.py
import gettext
import os

localedir = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'locale')
en = gettext.translation('mydomain', localedir, languages=['en'])
ja = gettext.translation('mydomain', localedir, languages=['ja'])

## Print in english
en.install()
print(en.gettext('Some string'))

## Print in japanese
ja.install()
print(ja.gettext('Some string'))
```

Generate .pot files:

```shell
pybabel extract --input-dirs='proj' --output-file='proj/locale/mydomain.pot'
```

- Create domain.po on `locale/en/LC_MESSAGES/` and `locale/ja/LC_MESSAGES/` using .pot as base.
- Write the translations

```shell
pybabel compile --directory='proj/locale' --domain='mydomain'
```
