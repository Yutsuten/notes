---
title: Run
ref: https://docs.docker.com/engine/reference/commandline/run/
---

## Usage

```shell
docker run OPTIONS IMAGE COMMAND
```

| Option | Description |
| --- | --- |
| `-d` `--detach` | Run container in background (detach). |
| `-e` `--env` | Set environment variables. |
| `-p` `--publish` | Publish a container's port(s) to the host in format `HOST:CONT`. |
| `-i` `--interactive` | Keep STDIN open even if not attached. |
| `-t` `--tty` | Allocate a pseudo-TTY. |
| `-u` `--user` | Username or UID. |
| `-v` `--volume` | Bind mount a volume in format `HOSTDIR:CONTDIR`. |
| `-w` `--workdir` | Working directory inside the container. |
| `--name` | Assign a name to the container. |
| `--mount` | Attach a filesystem mount to the container. |
| `--rm` | Automatically remove the container when it exits. |

Resource constraint options:

| Option | Description |
| --- | --- |
| `-m` `--memory` | Memory limit. Followed by a suffix of `b`, `k`, `m`, `g`. Ex: `1g` for 1GB. |
| `--cpus` | CPU resources a container can use. Ex: `1` for 1 CPU. |

### Mount syntax

| Syntax | Info |
| --- | --- |
| `source=VOLNAME,target=CONTDIR` | Mount a volume |
| `type=bind,source=HOSTDIR,target=CONTDIR` | Bind mount a volume |
