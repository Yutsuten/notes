---
title: XML document
ref: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

## Generating a XMLDocument

```js
// A XML
let doc = document.implementation.createDocument(null, 'root', null)

// RDF
let doc = document.implementation.createDocument('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:RDF', null)

// Common commands
let root = doc.documentElement
let anElement = doc.createElement('div')
anElement.setAttribute('class', 'container')
anElement.textContent = 'Hello World'
root.appendChild(anElement)

// Serialize
let serializer = new XMLSerializer()
return serializer.serializeToString(doc)
```
