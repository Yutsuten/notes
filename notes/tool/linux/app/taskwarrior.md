---
title: Taskwarrior
ref: https://taskwarrior.org/docs/syntax.html
---

## Usage

```shell
task FILTER COMMAND MODIFICATIONS
```

| Task | Filter | Command | Modifications | Miscellaneous |
| --- | --- | --- | --- | --- |
| `task` | | `list` | | |
| `task` | `+home` | `list` | | |
| `task` | `12` | `modify` | `project:Garden` | |
| `task` | | `show` | | `editor` |

### Common commands

| Command | Description |
| --- | --- |
| `next` | Shows a page of the most urgent tasks, sorted by urgency, which is a calculated value. |
| `list` | List all tasks |
| `information` | Shows all data and metadata |
| `add` | Add a new task |
| `modify` | Modifies the existing task with provided information. |
| `edit` | Edit task(s) |
| `delete` | Delete task(s) |
| `start` | Start task(s) |
| `stop` | Remove the start time from a task |
| `done` | Mark the task as completed |
| `tags` | Shows a list of all tags used |
| `projects` | Shows a list of all project names used |
| `summary` | Shows a summary separated by projects |
| `completed` | Shows all tasks matching the filter that are completed. |
| `help` | Display an usage help text |

### Common filter / modifiers

| Filter / modifier | Description |
| --- | --- |
| `project:Home` | Set the project |
| `status:pending` | Set the status of the task |
| `priority:H` | Set the priority of the task |
| `due:eom` | Set the due date of the task |
| `+garden` | Set a tag |

## Examples

Return completed task back to todo list:

```shell
task completed  # Get the UUID of the completed task
task UUID modify status:pending
task next       # Run twice to get a valid ID for the task
```
