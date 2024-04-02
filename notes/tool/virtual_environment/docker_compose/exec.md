---
title: Exec
ref: https://docs.docker.com/reference/cli/docker/compose/exec/
---

## Usage

Execute a command in a running container.

```shell
docker-compose run OPTIONS SERVICE COMMAND
```

| Option | Description |
| --- | --- |
| `-d` `--detach` | Detached mode: Run container in the background. |
| `-e` `--env` | Set an environment variable (can be used multiple times). |
| `-T` `--no-TTY` | Disable pseudo-tty allocation. |
| `-u` `--user` | Run as specified username or uid. |
| `-w` `--workdir` | Working directory inside the container. |

## Example

Run a command with an environment variable.

```shell
docker-compose exec -e DEBUG=1 app bash
```
