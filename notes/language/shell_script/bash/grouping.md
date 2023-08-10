---
title: Grouping
---

```shell
## $ prints output (stdout), result, variable value
## Without it return execution status

(( expression ))  # Run the arithmetic expression, return status 0 if result is non-zero, 1 otherwise
$(( expression ))  # Run the arithmetic expression and return result of the calculation

( expression )  # Run the commands in a subshell
$( expression )  # Run the commands in a subshell and return its stdout

{ expression }  # Run the commands as a group
${ some_var }  # Return variable value
```
