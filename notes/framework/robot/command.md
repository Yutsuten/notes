---
title: Command
ref: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#starting-test-execution
---

## Usage

```shell
robot OPTIONS PATHS
```

| Option | Description |
| --- | --- |
| `-t` `--test` | Select tests by name. |
| `-s` `--suite` | Select suites by name. |
| `-i` `--include` | Select tests by tag. |
| `-e` `--exclude` | Select tests not to run by tag. |
| `-R` `--rerunfailed` | Select failed tests from an earlier output file. |
| `-v` `--variable` | Set variables in the test data. |
| `-d` `--outputdir` | Where to create output files. |

Return code (full list [here](http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#return-codes)):

| Code | Description |
| --- | --- |
| 0 | All tests passed. |
| 1-249 | Number of tests failed. |
| 250 | 250 or more failures. |

## Examples

Set a variable and run all tests:

```shell
robot -v HEADLESS:True .
```

Select suite and test:

```shell
robot -s 'suite.regression' -t 'Login Page' .
```
