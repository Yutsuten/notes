---
title: Pylint
pypi: pylint
arch: python-pylint
man: pylint
ref: https://pylint.pycqa.org/
---

## Usage

### Naming / path

| Home | Parent |
| ---- | ------ |
| `~/.pylintrc`, `.config/pylintrc` | `pylintrc` |

### Command

```bash
pylint --generate-rcfile
```

### Sample

Usage with `pylint-django`, for django projects:

```txt
[MASTER]
load-plugins=pylint_django
```

Customizing checks:

```txt
[MASTER]
## If there are dependencies, add to path
init-hook='import sys, os; sys.path.append(os.getcwd() + '/anki')'

extension-pkg-whitelist=aqt.qt # Ignore module

[BASIC]
## Change variables naming to camelCase
function-rgx=_?_?[a-z][A-Za-z0-9]{1,30}$
method-rgx=_?_?[a-z][A-Za-z0-9]{1,30}_?_?$
attr-rgx=_?_?[a-z][A-Za-z0-9]{1,30}$
argument-rgx=_?[A-Za-z0-9]{1,31}$
variable-rgx=_?[a-z][A-Za-z0-9]{1,30}$
inlinevar-rgx=_?[a-z][A-Za-z0-9]{1,30}$

[TYPECHECK]
## Ignore module
ignored-modules=aqt.qt

[MESSAGES CONTROL]
## Disable rules
disable=import-error,no-name-in-module,unused-argument,protected-access,redefined-outer-name
```
