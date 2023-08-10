---
title: Build
ref: https://docs.docker.com/engine/reference/commandline/build/
---

## Usage

```shell
docker build OPTIONS CONTEXT
```

| Option | Description |
| --- | --- |
| `-f` `--file` | Path to the Dockerfile. |
| `-t` `--tag` | Name and optionally tag in the `name:tag` format. |
| `--no-cache` | Do not use cache when building the image. |
| `--pull` | Always attempt to pull a newer version of the image. |
| `--build-arg` | Set build-time variables. |

### Dockerfile

```dockerfile
FROM <image>

## Environment setup begin
ENV NAME World
RUN command
COPY . /code
WORKDIR /code
## Environment setup end

## Expose port to outside the container
EXPOSE 80

## Command to run when running the container
CMD ["binname", "arg"]
```

### Apt-get

Sometimes it can fail to acquire packages.
Add a retry option to solve this problem:

```dockerfile
RUN apt-get update \
    && apt-get install -o 'Acquire::Retries=3' -y packages
```

## Example

Build using the current directory as context and a custom `Dockerfile`.

```shell
docker build --file dockerfile/prod --tag custom.registry:4567/imagename:latest .
```

Build while setting build-time variables.

```shell
docker build --build-arg UID="$(id -u)" --build-arg GID="$(id -g)" .
```
