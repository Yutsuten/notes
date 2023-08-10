---
title: Wheel
ref: https://pip.pypa.io/en/stable/cli/pip_wheel/
---

## Usage

```shell
pip wheel OPTIONS TARGET
```

| Option | Description |
| --- | --- |
| `-w` `--wheel-dir` | Build wheels into the given directory. |
| `-r` `--requirement` | Install from the given requirements file. |
| `--no-deps` | Don’t install package dependencies. |

## Example

Build a wheel file from a gzipped source code.

```shell
pip wheel --wheel-dir wheelhouse package.tar.gz
```
