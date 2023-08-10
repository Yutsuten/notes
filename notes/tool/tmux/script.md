---
title: Script
---

## Startup script

```bash
##!/bin/bash
tmux new-session -d -c /path/to/project vim
tmux new-window -c /path/to/project
tmux send-keys 'command' Enter

tmux new-session -d -c /path/to/otherproject vim
tmux new-window -c /path/to/otherproject
tmux send-keys 'command' Enter

tmux attach-session -t 1
```
