---
title: Run
ref: https://docs.docker.com/compose/reference/run/
---

## Usage

Run a one-off command on a service.

```shell
docker-compose run OPTIONS SERVICE COMMAND
```

| Option | Description |
| --- | --- |
| `-d` `--detach` | Detached mode: Run container in the background. |
| `-e` `--env` | Set an environment variable (can be used multiple times). |
| `--name` | Assign a name to the container. |
| `-T` `--no-TTY` | Disable pseudo-tty allocation. |
| `--rm` | Remove container after run. |
| `-u` `--user` | Run as specified username or uid. |
| `-w` `--workdir` | Working directory inside the container. |

## Example

Run a command with an environment variable.

```shell
docker-compose run -e DEBUG=1 app bash
```
