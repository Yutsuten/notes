---
title: Badges
---

## Generate

```shell
npm install -g gh-badges
badge 'build' 'passed' :brightgreen @flat > build.svg

pip install coverage-badge
coverage-badge -o coverage.svg
```

### Script for django project

```shell
## coverage-run.sh
if coverage run manage.py test ; then
    coverage report
    coverage html
    badge 'build' 'passed' :brightgreen @flat > build.svg
    coverage-badge -o coverage.svg
else
    badge 'build' 'failed' :red @flat > build.svg
fi
```

## On the fly

Use [shields.io](https://shields.io/) to generate badges on the fly.
Example:

```txt
https://img.shields.io/badge/Version-2.5.2-brightgreen.svg
```
