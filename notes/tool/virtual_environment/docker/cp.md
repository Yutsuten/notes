---
title: Cp
ref: https://docs.docker.com/engine/reference/commandline/cp/
---

## Usage

Copy files/folders between a container and the local filesystem.

```shell
docker cp OPTIONS SOURCE CONTAINER:DEST
docker cp OPTIONS CONTAINER:SOURCE DEST
```

| Option | Description |
| --- | --- |
| `-a` `--archive` | Archive mode (copy all uid/gid information). |
| `-L` `--follow-link` | Always follow symbol link in SOURCE. |

## Example

Copy file from local to container.

```shell
docker cp requirements.txt container:/root/requirements.txt
```

Copy directory from container to local.

```shell
docker cp container:/root/wheelhouse wheelhouse
```
