---
title: Basic commands
---

```shell
## Add files to staging area
git add .             # Add all
git add directory/    # Add all files inside a directory
git add path/to/file  # Add single file
git add -p file       # Add only part of the file (--patch)

## See commit data (diff included)
git show  # parameter can be a commit, default is HEAD

## Commit changes
git commit               # Open the editor to type the message
git commit -m "Message"  # Create a message inline

## Update commit (not recommended if git push was done)
git commit --amend --no-edit     # Redo the last commit
git commit --amend -m "Message"  # Redo the last commit and enter a new message

## Push commits of master branch to remote (usually origin)
git push origin master
```
