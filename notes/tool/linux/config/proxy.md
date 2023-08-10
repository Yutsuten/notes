---
title: Proxy
---

## Package Manager

### Apt

Add a file `/etc/apt/apt.conf.d/apt.conf` with the following content.

```txt
Acquire::ftp::proxy "http://user:pass@proxyhost:port/";
Acquire::http::proxy "http://user:pass@proxyhost:port/";
Acquire::https::proxy "http://user:pass@proxyhost:port/";
```

## Environment Variables

```shell
export http_proxy="http://user:pass@proxyhost:port/"
export https_proxy=${http_proxy}
export ftp_proxy=${http_proxy}
export no_proxy="localhost,127.0.0.1,192.168.1.1,::1,*.local"

export HTTP_PROXY=${http_proxy}
export HTTPS_PROXY=${http_proxy}
export FTP_PROXY=${http_proxy}
export NO_PROXY=${no_proxy}
```
