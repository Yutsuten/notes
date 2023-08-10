---
title: Github pages setup
---

## Install

```txt
gem install bundler
```

## Usage

Edit `Gemfile`:

```txt
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

Install gems and run:

```shell
bundle install

bundle exec jekyll build --watch
bundle exec jekyll serve
```
