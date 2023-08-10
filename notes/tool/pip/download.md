---
title: Download
ref: https://pip.pypa.io/en/stable/cli/pip_download/
---

## Usage

Download packages from PyPI,
VCS project urls,
local or remote source archives.

```shell
pip download OPTIONS TARGET
```

| Option | Description |
| --- | --- |
| `--only-binary` | Do not use source packages. |
| `--implementation` | Only use wheels compatible with Python implementation. e.g. `py` `cp` |

## Examples

Download wheel file from a package.

```shell
pip download --only-binary=:all: --implementation py package
```

Download in any format
(if wheel file is required,
use `pip wheel` or build from source).

```shell
pip download package
```
