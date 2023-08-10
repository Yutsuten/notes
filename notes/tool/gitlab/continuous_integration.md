---
title: Continuous integration
ref: https://docs.gitlab.com/ee/ci/yaml/
---

Example of `.gitlab-ci.yml`:

```yaml
## Node + eslint
lint-js:
  stage: test
  image: node:8
  only:
    - master
  script:
    - npm install eslint
    - node_modules/.bin/eslint --no-eslintrc --env browser,es6 --ignore-pattern 'venv/*' ./
  cache:
    key: node_cache
    paths:
      - node_modules/

## Django + mongo tests
unit:
  stage: test
  image: python:3.6
  services:
    - name: mongo:3.6
  only:
    - master
  script:
    - python -V
    - pip -V
    - python -m venv venv
    - source venv/bin/activate
    - pip install -r requirements.txt
    - python -c 'import django; print(django.get_version())'

    # In settings.py file, database's host must be set to 'mongo'
    - export DJANGO_SETTINGS_MODULE=app_name.deploy_settings.gitlab_ci
    - coverage run manage.py test
    - coverage report
  cache:
    key: pip_cache
    paths:
      - venv/
```
