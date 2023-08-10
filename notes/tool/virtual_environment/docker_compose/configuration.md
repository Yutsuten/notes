---
title: Configuration
ref: https://docs.docker.com/compose/compose-file/compose-file-v3/
---

## docker-compose.yml

```yml
version: "3"
services:
  app:
    build: .
    image: imagename
    ports:
      - "4050:4000"  # HOST:CONTAINER
    volumes:
      - /code/node_modules
    extra_hosts:
      - "somehost:162.242.195.82"
      - "otherhost:50.31.209.229"
    working_dir: /code
```

## .env

```shell
COMPOSE_PROJECT_NAME=foo
COMPOSE_FILE=docker-compose.yml
```
