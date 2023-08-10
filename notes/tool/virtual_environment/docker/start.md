---
title: Start
ref: https://docs.docker.com/engine/reference/commandline/start/
---

## Usage

```shell
docker start OPTIONS CONTAINER
```

| Option | Description |
| --- | --- |
| `-a` `--attach` | Attach STDOUT/STDERR and forward signals. |
| `-i` `--interactive` | Attach container's STDIN. |

## Example

Reattach to a container that was running a shell.

```shell
docker start -ai container
```
