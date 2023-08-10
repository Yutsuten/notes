---
title: Freeze
ref: https://pip.pypa.io/en/stable/cli/pip_freeze/
---

## Usage

Output installed packages in requirements format.

```shell
pip freeze OPTIONS
```

| Option | Description |
| --- | --- |
| `-l` `--local` | Do not output globally-installed packages. |

## Example

Save into `requirements.txt` the locally installed packages.

```shell
pip freeze -l > requirements.txt
```
