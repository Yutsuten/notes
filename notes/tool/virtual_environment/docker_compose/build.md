---
title: Build
ref: https://docs.docker.com/compose/reference/build/
---

## Usage

```shell
docker-compose build OPTIONS SERVICE
```

| Option | Description |
| --- | --- |
| `--no-cache` | Do not use cache when building the image. |
| `--pull` | Always attempt to pull a newer version of the image. |

## Configuration

When `Dockerfile` and the context are in the same directory:

```yml
build: .
```

When setting custom dockerfile and context:

```yml
build:
  context: .
  dockerfile: dockerfiles/Dockerfile_app
```
