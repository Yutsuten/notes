---
title: Nextcloud
ref: https://github.com/nextcloud/all-in-one
---

## With docker compose

Setup with reverse proxy (using caddy and pi-hole, for example):

`docker-compose.yml` ([nextcloud image](https://hub.docker.com/r/nextcloud/all-in-one))

```yaml
services:
  nextcloud:
    image: nextcloud/all-in-one:latest
    container_name: nextcloud-aio-mastercontainer
    restart: unless-stopped
    environment:
      APACHE_PORT: 11000
      APACHE_IP_BINDING: 0.0.0.0
    ports:
      - 8080:8080
    volumes:
      - aio_mastercontainer: /mnt/docker-aio-config
      - /var/run/docker.sock:/var/run/docker.sock:ro
    depends_on:
      - caddy  # Change this if using another web server

volumes:
  aio_mastercontainer:
```
