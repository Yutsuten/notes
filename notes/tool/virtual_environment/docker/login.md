---
title: Login
ref: https://docs.docker.com/engine/reference/commandline/login/
---

## Login

```shell
docker login OPTIONS SERVER
```

| Option | Description |
| --- | --- |
| `-p` `--password` | Password |
| `-u` `--username` | Username |

Example of login to a self-hosted registry:

```shell
docker login -u myuser localhost:8080
```

## Logout

Remove login credentials for the specified server.

```shell
docker logout SERVER
```

Example:

```shell
docker logout localhost:8080
```
