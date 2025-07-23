---
title: Configuration
ref: https://docs.docker.com/reference/compose-file/services/
---

## docker-compose.yml

```yml
version: "3"
services:
  app:
    build: .
    image: imagename
    restart: unless-stopped
    ports:
      - "4050:4000"
    volumes:
      - /code/node_modules
    extra_hosts:
      - "somehost:162.242.195.82"
      - "otherhost:50.31.209.229"
    working_dir: /code
```

| Attribute | Allowed Values                                            |
| --------- | --------------------------------------------------------- |
| `restart` | `no` `always` `on-failure[:max-retries]` `unless-stopped` |
| `ports`   | `HOST:CONTAINER`                                          |

## .env

```shell
COMPOSE_PROJECT_NAME=foo
COMPOSE_FILE=docker-compose.yml
```
