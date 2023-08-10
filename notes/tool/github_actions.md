---
title: Github actions
ref: https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions
---

## Setup a basic workflow

```shell
mkdir -p .github/workflows
touch .github/workflows/continuous-testing.yml
```

Example of basic .yml file:

```yml
name: Continuous Testing
on: [push, pull_request]
jobs:
  unit-test:
    name: Unit Tests
    runs-on: ubuntu-18.04
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Cache
        uses: actions/cache@v2
        with:
          path: ~/.cache
          key: cache
      - name: Run command
        run: ls -al
      - name: Run even on fail
        if: ${{ success() || failure() }}
        run: pwd
```

`name` is the name of the workflow.
`on` is when the workflow is triggered.

`jobs.<id>` are run in different machines, in parallel by default.
`jobs.<id>.name` is the name of the job.
`jobs.<id>.runs-on` is the OS of the machine.
`jobs.<id>.steps` each step to complete the job.

### Actions

- [Checkout](https://github.com/actions/checkout): Action for checking out a repo.
- [Cache](https://github.com/actions/cache): Cache dependencies and build outputs.
- [Setup Python](https://github.com/actions/setup-python): Set up your workflow with a specific
version of python.
- [Pyenv](https://github.com/gabrielfalcao/pyenv-action): Enables pyenv within your workflow.

### Coveralls

For python, the official GitHub Action does not work.
As a workaround, install the coveralls package with pip,
then manually call it on the script.

```shell
- name: Run tests
  env:
    COVERALLS_REPO_TOKEN: ${{ secrets.COVERALLS_REPO_TOKEN }}
  run: |
    python -m pip install coveralls PyYAML
    coverage run ...
    coveralls
```

Configuration on `coveralls.yml` is needed.

```yaml
service_name: travis-ci
parallel: false
```
