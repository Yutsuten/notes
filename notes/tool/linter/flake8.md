---
title: Flake8
ref: http://flake8.pycqa.org/en/latest/user/configuration.html#project-configuration
---

## Install

Flake8 changes its behaviour depending on the python used to install it.

```bash
pacman -S flake8
python -m pip install flake8
```

## Usage

### Naming / path

| Home | Parent |
| ---- | ------ |
| `~/.config/flake8` | `setup.cfg`, `tox.ini`, `.flake8` |

### Command

There is not command to generate a configuration file.

### Sample

```txt
[flake8]
max-line-length = 100
max-complexity = 10
```
