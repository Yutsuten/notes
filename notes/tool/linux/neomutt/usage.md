---
title: Usage
ref: https://neomutt.org/guide/advancedusage
---

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
