---
title: Pyenv
ref: https://github.com/pyenv/pyenv
---


## Installing

If not installing from the package manager, use the following.

[Guide](https://github.com/pyenv/pyenv-installer)

```shell
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```

Dependencies:

```shell
apt install --no-install-recommends make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
yum install gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel
```

### Update shell

On `.bash_profile` or `.zprofile`, add the following
(this appears at the end of the previous command):

```shell
eval "$(pyenv init -)"
```

## Usage

```shell
pyenv install 3.6.4

pyenv versions
pyenv local 3.6.4
pyenv global 3.6.4
```
