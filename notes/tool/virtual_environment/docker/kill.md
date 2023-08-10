---
title: Kill
ref: https://docs.docker.com/engine/reference/commandline/kill/
---

## Usage

```shell
docker kill OPTIONS CONTAINER
```

| Option | Description |
| --- | --- |
| `-s` `--signal` | Signal to send to the container. |

## Examples

Send `SIGKILL` to a container:

```shell
docker kill my_container
```

Send `SIGHUP` to a container (`SIG` is optional):

```shell
docker kill --signal SIGHUP  my_container
docker kill --signal 1 my_container
```
