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
pip wheel -w wheelhouse package.tar.gz
```

The `wheel` command accepts the same options as `install`,
so `-r` to look for packages in a `requirements.txt` or typing the package name directly are also ok.

```shell
pip wheel -w wheelhouse -r requirements.txt
pip wheel -w wheelhouse flask
```
