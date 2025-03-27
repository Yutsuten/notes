---
title: Run
ref: https://docs.docker.com/engine/reference/commandline/run/
---

## Usage

```shell
docker run OPTIONS IMAGE COMMAND
```

| Option               | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| `-d` `--detach`      | Run container in background (detach).                            |
| `-e` `--env`         | Set environment variables.                                       |
| `-p` `--publish`     | Publish a container's port(s) to the host in format `HOST:CONT`. |
| `-i` `--interactive` | Keep STDIN open even if not attached.                            |
| `-t` `--tty`         | Allocate a pseudo-TTY.                                           |
| `-u` `--user`        | Username or UID.                                                 |
| `-v` `--volume`      | Bind mount a volume in format `HOSTDIR:CONTDIR`.                 |
| `-w` `--workdir`     | Working directory inside the container.                          |
| `--entrypoint`       | Overwrite the default ENTRYPOINT of the image.                   |
| `--name`             | Assign a name to the container.                                  |
| `--mount`            | Attach a filesystem mount to the container.                      |
| `--rm`               | Automatically remove the container when it exits.                |
| `--add-host`         | Add a custom host-to-IP mapping.                                 |

Resource constraint options:

| Option | Description |
| --- | --- |
| `-m` `--memory` | Memory limit. Followed by a suffix of `b` `k` `m` `g`. Ex: `1g` for 1GB. |
| `--cpus` | CPU resources a container can use. Ex: `1` for 1 CPU. |

### Mount syntax

[All options documentation](https://docs.docker.com/engine/storage/bind-mounts/#options-for---mount)

| Syntax                                    | Info                |
| ----------------------------------------- | ------------------- |
| `source=VOLNAME,target=CONTDIR`           | Mount a volume      |
| `type=bind,source=HOSTDIR,target=CONTDIR` | Bind mount a volume |

## Examples

Run bash in an image:

```shell
docker run -it --rm IMAGE bash               # If ENTRYPOINT is the default `/bin/sh -c`
docker run -it --rm --entrypoint bash IMAGE  # Always works
```

Bind mount current directory to container's `/src`:

```shell
docker run --rm --mount type=bind,src=$PWD,dst=/src IMAGE
```

Add a custom host-to-IP mapping (like editing `/etc/hosts`):

```shell
docker run --add-host example.com:127.0.0.1 IMAGE
```
