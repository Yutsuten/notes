---
title: Command
man: python
---

## Usage

```shell
python OPTIONS SCRIPT ARGUMENTS
```

| Option | Description                                                 |
| ------ | ----------------------------------------------------------- |
| `-c`   | Run commands instead of a script.                            |
| `-i`   | Run the script (or commands) and enter in interactive mode. |
| `-m`   | Run module in `sys.path` instead of a script.               |

Create a virtual environment:

```shell
python -m venv .venv
```

### Troubleshooting

There are some environments (i.e. CI/CD) that fail to import local scripts
when using commands installed by pip.

Add the `PYTHONPATH` environment variable to fix the issue:

```shell
env PYTHONPATH=. alembic upgrade head
```
