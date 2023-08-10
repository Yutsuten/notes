---
title: Logging
ref: https://docs.docker.com/config/containers/logging/configure/
---

## Configuration

Check the current logging driver with:

```shell
docker info --format '{{.LoggingDriver}}'
```

To change the log configuration globally,
edit the file `/etc/docker/daemon.json`.

### Local

Recommended for development,
the `local` driver is optimized for performance and disk use.
By default it preserves 100MB of log messages per container and uses automatic compression.

```json
{
  "log-driver": "local",
  "log-opts": {
    "max-size": "20m",
    "max-file": "5",
    "compress": "true"
  }
}
```

### Syslog

The `syslog` driver outputs the logs to a file inside `/var/log`.
Sometimes used on some production servers.

```json
{
  "log-driver": "syslog",
  "log-opts": {
    "tag": "app_service"
  }
}
```
