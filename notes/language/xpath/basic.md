---
title: Basic
ref: https://devhints.io/xpath
---

## Syntax

```txt
//tag[@attribute="foo"]/tag//tag[contains(., 'text')]
```

| Token | Description |
| --- | --- |
| `/` | [Axis] Select a child. If it is the first character, start from root. |
| `//` | [Axis] Select a descendant. If it is the first character, search through all nodes. |
| `div` | [Node] Select the nodes `div`. Can be any valid HTML tag name. |
| `*` | [Node] Select all nodes. |
| `..` | [Node] Select the parent node. |
| `[n]` | [Attribute] Select the `n`th element. |
| `@class` | [Attribute] Select an attribute. Can be any valid HTML attribute. |
| `.` `text()` | [Attribute] Select the text of an element. |
| `normalize-space()` | [Attribute] Same as `text()`, but trims and normalize whitespace. |
| `contains(target, text)` | [Attribute] Select elements that contains the given text. |

## Examples

Search by given tag and attribute name:

```txt
//input[@type="search"]
```

Search for a class or classes:

```txt
//div[contains(@class, "container")]
//a[contains(@class, "paginate_button") and contains(@class, "current")]
```

Search by displayed text:

```txt
//a[contains(., "Home")]
```

Select the 1st element of a type:

```txt
//div[1]
(//div//table)[1]
```

Search using conditions in various elements:

```txt
div[./div[2][contains(., "title")] and ./div[3][contains(., "description")]]
```
