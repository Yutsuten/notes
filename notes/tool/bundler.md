---
title: Bundler
ref: https://wiki.archlinux.org/title/Ruby
---

## Install

Requires `ruby` to be installed on the system.

```shell
gem install bundler
```

## Managing dependencies

Gems are installed on `GEM_HOME` or in a local directory with:

```shell
bundle config set --local path '.bundle'
```

Install/update gems from `Gemfile` with:

```shell
bundle install
bundle update
```
