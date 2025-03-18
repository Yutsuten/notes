---
title: Curl
---

## Usage

```shell
curl OPTIONS URL
```

| Option            | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `-X` `--request`  | Specifies a custom request method (GET, HEAD, POST, PUT).                    |
| `-H` `--header`   | Extra header to include in the request when sending HTTP to a server.        |
| `-d` `--data`     | Sends the specified data to the HTTP server.                                 |
| `-F` `--form`     | Emulate a filled-in form in which a user has pressed the submit button.      |
| `-o` `--output`   | Write response into file.                                                    |
| `-L` `--location` | Follow redirect.                                                             |
| `-k` `--insecure` | Skip SSL certificate check.                                                  |
| `-s` `--silent`   | Silent (Does not show progress bar).                                         |
| `-v` `--verbose`  | Makes curl verbose during the operation.                                     |
| `--noproxy`       | Comma-separated list of hosts which do not use a proxy, if one is specified. |

## Examples

Download file from remote:

```shell
curl --output pylint.svg 'https://img.shields.io/badge/pylint-10-green.svg'
curl --output nvim.appimage -L 'https://github.com/neovim/neovim/releases/download/v0.10.2/nvim.appimage'
```

PUT `application/json` request:

```shell
curl --request PUT \
  --header 'Content-Type:application/json' \
  --data '{"json":1,"encoded":{"key":"value"}}' \
  'http://mysite.com/api/user/1'
```

POST `application/x-www-form-urlencoded` request with array:

```shell
curl --request POST \
  --data 'username=admin' \
  --data 'groups[]=user' \
  --data 'groups[]=admin' \
  'https://example.com/api/user'
```

POST `multipart/form-data` with a file and a string:

```shell
curl --request POST \
  --header "Authorization: $TOKEN" \
  --form 'file=@path/to/file.txt' \
  --form 'name=filename.txt' \
  'https://example.com/storage'
```

## Useful services

| Command | Service |
| --- | --- |
| `curl ifconfig.me` | Public IP address |
| `curl ja.wttr.in` | Weather forecast (in japanese) |
