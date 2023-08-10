---
title: Parallel
---

## Good practices

When interrupting the script with `ctrl+C`,
kill the child processes by adding this code at the beginning of the script.

```shell
trap 'kill 0' SIGINT
```

Always add `wait` after creating child processes.

## Simple command

Run a command in parallel and get its PID.

```shell
command &
pid=$!
```

## Multiple commands

```shell
{
  echo '[A] Start'
  sleep 10
  echo '[A] Finish'
} &
{
  echo '[B] Start'
  sleep 5
  echo '[B] Finish'
} &
```

## Loop + workers

If there are a lot of work to be done in parallel,
but you would like to have a limited amount of workers,
something like this might work (not tested):

```shell
for ...; do
  if [[ $(jobs -p | wc -l) -ge 4 ]]; then
    wait -n
  fi
  do_stuff &
done
```
