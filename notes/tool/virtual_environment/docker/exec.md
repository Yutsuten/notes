---
title: Exec
ref: https://docs.docker.com/engine/reference/commandline/exec/
---

## Usage

```shell
docker exec OPTIONS CONTAINER COMMAND
```

| Option | Description |
| --- | --- |
| `-d` `--detach` | Detached mode: run command in the background. |
| `-e` `--env` | Set environment variables. |
| `-i` `--interactive` | Keep STDIN open even if not attached. |
| `-t` `--tty` | Allocate a pseudo-TTY. |
| `-u` `--user` | Username or UID. |
| `-w` `--workdir` | Working directory inside the container. |

## Example

Run a shell inside a container.

```shell
docker exec -it container bash
```
