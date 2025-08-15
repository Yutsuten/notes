---
title: Plugins
---

## pytest-xdist

Enable running tests in parallel to speed up test execution.

```shell
pip install pytest-xdist
```

Useful [options](https://pytest-xdist.readthedocs.io/en/stable/distribution.html)
that become available when running `pytest`:

| Option   | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| `-n`     | Specify the number of processes.                                                  |
| `--dist` | Select the test distribution algorithm. `load` `loadscope` `loadfile` `loadgroup` |
