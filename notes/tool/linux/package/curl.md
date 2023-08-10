---
title: Curl
---

## Usage

```shell
curl OPTIONS URL
```

| Option | Description |
| --- | --- |
| `-v` `--verbose` | Makes curl verbose during the operation. |
| `-X` `--request` | Specifies a custom request method (GET, HEAD, POST, PUT). |
| `-H` `--header` | Extra header to include in the request when sending HTTP to a server. |
| `-d` `--data` | Sends the specified data to the HTTP server. |
| `-s` `--silent` | Silent (Does not show progress bar). |
| `-o` `--output` | Write response into file. |
| `-L` `--location` | Follow redirect. |
| `-k` `--insecure` | Skip SSL certificate check. |
| `--noproxy` | Comma-separated list of hosts which do not use a proxy, if one is specified. |

## Download file from remote

```shell
curl "https://img.shields.io/badge/pylint-10-green.svg"
curl -o pylint.svg "https://img.shields.io/badge/pylint-10-green.svg"
curl -o nvim.appimage -L https://github.com/neovim/neovim/releases/download/v0.4.2/nvim.appimage
```

## Put request

```shell
curl -X PUT \
  -H 'Content-Type:application/json' \
  -d '{"json":1,"encoded":{"key":"value"}}' \
  http://mysite.com
```

## Useful services

| Command | Service |
| --- | --- |
| `curl ifconfig.me` | Public IP address |
| `curl ja.wttr.in` | Weather forecast (in japanese) |
