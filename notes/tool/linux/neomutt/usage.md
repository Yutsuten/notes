---
title: Usage
man: neomuttrc
ref: https://neomutt.org/guide/advancedusage
---

## Shortcuts

These shortcuts are based on [my configuration](https://github.com/Yutsuten/linux-config/blob/main/tools/neomutt/neomuttrc).

To run a command (called `function` in the neomutt docs, but I'll call it command anyway)
without using a shortcut (replace `COMMAND`):

```txt
:exec COMMAND
```

The wordings used on neomutt's commands aren't very intuitive,
so to ease our understanding:

- Tag = select
- Pattern = see the [searching section](#searching) bellow

| Shortcut | Command | Description |
| --- | --- | --- |
| `T` | `tag-pattern` | Tag (select) messages by pattern. |
| `Z` | `untag-pattern` | Untag (unselect) messages by pattern. |
| `D` | `delete-pattern` | Mark to delete messages by pattern. |
| `U` | `undelete-pattern` | Unmark to delete messages by pattern. |
| `F` | `limit` | Apply a filter (search), and show only (limit) the matched messages. |
| `A` | `tag-prefix` | The next shortcut/command will be applied to all tagged (selected) messages. |
| `S` `s` | `save-message` | **Move** the message to an arbitrary mailbox. Performed by copy & delete. |
| `x` | `set-flag` | Set flags (i.e.: mark as new or unread) |
| `c` | `clear-flag` | Clear flags (i.e.: mark as read) |

Some shortcut combos:

- `TAS`: To archive messages (send to local storage)

## Searching

Here some often used pattern modifiers.
See a complete list [here](https://neomutt.org/guide/advancedusage#3-%C2%A0patterns-searching-limiting-and-tagging).

| Pattern modifier | Description |
| --- | --- |
| `all` `~A` | All messages |
| `~f EXPR` | Messages originating **from** EXPR. |
| `~t EXPR` | Messages addressed **to** EXPR.  |
| `~d RANGE` | Messages with **date-sent** in a Date range. Units: `S,M,H,d,w,m,y`. Syntax: `>3m`. |
| `~s EXPR` | Messages having EXPR in the **subject** field. |
| `~b EXPR` `=B STRING` | Messages having EXPR in the message **body**. Use the latter for searching on the server. |
| `~N` `~O` | **New**/**Old** messages. |
| `~U` | **Unread** messages. |
| `~R` | **Read** messages. |
| `~F` | **Flagged** (important) messages. |
| `~T` | **Tagged** (selected) messages. |
