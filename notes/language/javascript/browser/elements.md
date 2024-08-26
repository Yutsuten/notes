---
title: Elements
ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
---

## Retrieving

| Property / Method | Description |
| --- | --- |
| `document.activeElement` | The Element that currently has focus. |
| `document.getElementById()` | An object reference to the identified element. |
| `document.getElementsByClassName()` | A list of elements with the given class name. |
| `document.getElementsByTagName()` | A list of elements with the given tag name. |
| `document.getElementsByName()` | A list of elements with the given name. |

## Properties

| Property | Description |
| --- | --- |
| `Element.textContent` | A DOMString representing the text content of the node and its descendants. |
| `Element.innerText` | A DOMString representing the rendered text content of an element. |
| `Element.innerHTML` | A HTML or XML markup contained within the element. |
| `Element.id` | A DOMString representing the id of the element. |
| `Element.tagName` | A String with the name of the tag for the given element. |
| `Element.classList` | A DOMTokenList containing the list of class attributes. |
| `Element.clientHeight` | A Number representing the inner height of the element. |
| `Element.scrollHeight` | A Number representing the scroll view height of an element. |
| `Element.scrollTop` | A Number representing number of pixels the top of the document is scrolled vertically. |
| `Element.style` | A CSSStyleDeclaration representing the declarations of the element's style attribute. |
| `Input.value` | A DOMString that contains the current value of the text entered into the text field. |

## Methods

| Method | Description |
| --- | --- |
| `Element.click()` | Click an element. |
| `Element.getBoundingClientRect()` | Get size of an element and its position relative to the viewport. |
| `Element.scrollBy()` | Scrolls an element by the given amount. |
