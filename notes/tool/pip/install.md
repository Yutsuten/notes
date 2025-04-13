---
title: Install
ref: https://pip.pypa.io/en/stable/cli/pip_install/
---

## Usage

```shell
pip install OPTIONS PACKAGE_NAME
```

| Option               | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| `-r` `--requirement` | Install from the given requirements file.                       |
| `-e` `--editable`    | Install a project in editable mode.                             |
| `-U` `--upgrade`     | Upgrade all specified packages to the newest available version. |
| `-t` `--target`      | Install packages into `dir`.                                    |
| `--user`             | Install to the Python user install directory (`~/.local/bin`).  |

Install a package into a `python/` directory (may be used for creating an AWS lambda layer):

```shell
mkdir python
pip install -t python/ PACKAGE
```
