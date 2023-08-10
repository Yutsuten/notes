---
title: Container
---

## Usage

```shell
docker container COMMAND
```

| Option | Description |
| --- | --- |
| `ls` | List containers. |
| `stop` | Gracefully stop the specified container. |
| `kill` | Force shutdown of the specified container. |
| `rm` | Remove specified container. |

### Save container into image

```shell
docker commit CONTAINER
docker tag HASH IMAGE_NAME
```
