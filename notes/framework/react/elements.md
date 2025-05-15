---
title: Elements
ref: https://reactjs.org/docs/hooks-reference.html#useref
---

## Element reference

Get a reference to a element and use it elsewhere.

In this example the `button` text will change on click.

```jsx
import React from 'react';

function ElementReference() {
  const [buttonText, setButtonText] = React.useState('Empty');
  const nodeRef = React.useRef(null);

  return (
    <>
      <button onClick={setButtonText(nodeRef.current.textContent)}>{buttonText}</button>
      <div ref={nodeRef}>Stuff</div>
    </>
  );
}
```

### Attach / Detach callback

A `ref` may change its `current` value but it won't cause a re-render.
To run some code when a DOM element attaches or detaches,
use a `callback ref` instead.

In this example the `button` text will change as soon as the `ref` is attached.

```jsx
import React from 'react';

function CallbackReference() {
  const [buttonText, setButtonText] = React.useState('Empty');
  const callbackRef = React.useCallback((node) => {
    if (node !== null) {
      setButtonText(node.textContent);
    }
  }, []);

  return (
    <>
      <button>{buttonText}</button>
      <div ref={callbackRef}>Stuff</div>
    </>
  );
}
```

## Radio button

Track the checked radio button:

```jsx
import React from 'react';

function AreYouSure() {
  const [selected, setSelected] = React.useState('yes');

  return (
    <>
      <input
        type="radio"
        name="group1"
        id="yes"
        value="yes"
        checked={selected === 'yes'}
        onChange={e => setSelected(e.target.value)}
      />
      <label htmlFor="yes">Yes</label>
      <input
        type="radio"
        name="group1"
        id="no"
        value="no"
        checked={selected === 'no'}
        onChange={e => setSelected(e.target.value)}
      />
      <label htmlFor="no">No</label>
    </>
  );
}
```
