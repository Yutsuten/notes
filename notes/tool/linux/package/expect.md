---
title: Expect
man: expect
---

## Usage

Expect is a program that "talks" to other interactive programs according to a script.
It is an extension of Tcl.

Some common commands are:

| Command | Description |
| --- | --- |
| `spawn` | Starts a script or a program. |
| `expect` | Waits for program output. |
| `send` | Sends a reply to your program. |
| `interact` | Allows you to interact with your program. |
| `set` | Defines a variable. May also read arguments. |

Variables:

| Variable | Description |
| --- | --- |
| `env` | An array containing environment variables. Ex: `$env(PATH)` |

Use `""` in strings for variables and special characters interpolation.

Use `{}` in strings for non-interpolating quotes.

## Tricks

Add the code at the beginning of the expect script to have terminal resize support:

```shell
trap {
  set rows [stty rows]
  set cols [stty columns]
  stty rows $rows columns $cols < $spawn_out(slave,name)
} WINCH
```

## Examples

SSH into a step_server:

```shell
spawn ssh step_server

set argument [lindex $argv 0];

expect "password:"
send -- "$argument\r"

send -- "PS1='$env(BASH_PROMPT)'\r"

interact
```

Jump some servers and set prompt:

```shell
set user "myuser"
set pass "mypass"
set serv "myserv"

spawn ssh step_server
expect {
  "yes/no" { send "yes\r"; exp_continue }
  "password:" { send "secret\r" }
}
expect {
  "step_server ~]\\\$" { send "ssh $user@$serv\r"; exp_continue }
  "password:" { send "$pass\r" }
}

send -- {PS1="\n[\D{%Y-%m-%d %H:%M:%S] \u@\h:\w\n\$ "}
send -- "\r"

interact
```
