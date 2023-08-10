---
title: Disown
man: disown
ref: https://phoenixnap.com/kb/disown-command-linux
---

## Overview

Removes the specified job from the list of jobs.
Output of disowned jobs become unacessible through normal ways.

Jobs in the list of jobs are sent a hang-up signal when fish terminates,
which usually causes the job to terminate;
disown allows these processes to continue regardless.

## Intercept output

There is a (hacky) way to get the output of a disowned job.

```shell
strace -ewrite -p $PID
```

## Usage

### Bash

```shell
disown OPTIONS JOBS
```

| Option | Description |
| --- | --- |
| `-a` | Remove all jobs from jobs table. |
| `-r` | Remove currently running jobs from jobs table. |
| `-h` | SIGHUP is not sent to the job if the shell receives a SIGHUP. |

### Fish

No options are available for fish.
If no job is specified,
the last job is chosen.

```shell
disown JOBS
```

#### Examples

Disown all jobs:

```shell
disown (jobs -p)
```
