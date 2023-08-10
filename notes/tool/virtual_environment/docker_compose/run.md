---
title: Run
ref: https://docs.docker.com/compose/reference/run/
---

## Usage

```shell
docker-compose run OPTIONS SERVICE COMMAND
```

| Option | Description |
| --- | --- |
| `-d` `--detach` | Detached mode: Run container in the background. |
| `-u` `--user` | Run as specified username or uid. |
| `-w` `--workdir` | Working directory inside the container. |
| `--rm` | Remove container after run. |
| `--name` | Assign a name to the container. |
| `-e` | Set an environment variable (can be used multiple times). |
| `-T` | Disable pseudo-tty allocation. |

## Example

Run a shell against a service.

```shell
docker-compose run app bash
```
