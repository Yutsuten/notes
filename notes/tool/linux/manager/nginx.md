---
title: Nginx
ref: https://nginx.org/en/docs/
---

## Serving static content

The main configuration file is at `/etc/nginx/nginx.conf`.

A basic and fast web server configuration:

```shell
user http;
worker_processes auto;
worker_cpu_affinity auto;

events {
    multi_accept on;
}

http {
    charset utf-8;
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;

    include mime.types;
    default_type application/octet-stream;

    server {
        location / {
            root /usr/share/nginx/html;
            autoindex on;
        }
    }
}
```
