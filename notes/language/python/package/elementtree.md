---
title: Elementtree
ref: http://effbot.org/zone/element-index.htm
---

Generate and manipulate XML.

```python
import xml.etree.ElementTree as ET

root = ET.Element("html")
head = ET.SubElement(root, "head")
title = ET.SubElement(head, "title")
title.text = "Page title"
body = ET.SubElement(root, "body")
body.set("bgcolor", "#ffffff")
body.text = "Hello, World!"

result = ET.tostring(root).decode('utf-8')
```
