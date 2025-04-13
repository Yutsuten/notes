---
title: Login
ref: https://docs.docker.com/engine/reference/commandline/login/
---

## Login

```shell
docker login OPTIONS SERVER
```

| Option             | Description                   |
| ------------------ | ----------------------------- |
| `-p` `--password`  | Password                      |
| `-u` `--username`  | Username                      |
| `--password-stdin` | Take the password from stdin. |

Login to a self-hosted registry:

```shell
docker login -u myuser localhost:8080
```

### Pass

The easist is to send the password through stdin:

```shell
pass docker-pass | docker login -u myuser --password-stdin localhost:8080
```

For an automated password management,
install `docker-credential-pass` and configure `~/.docker/config.json`:

```json
{
  "credsStore": "pass"
}
```

You may want to update `~/.password-store/.gitignore`:

```txt
docker-credential-helpers/
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
