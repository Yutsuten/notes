---
title: Component
ref: https://reactjs.org/tutorial/tutorial.html
---

## Declaration

The most common way to create a component:

```javascript
import React from 'react';

class Game extends React.Component {
}
```

Component that only renders:

```jsx
function Game(props) {
  return (
    <button onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

Root component initialization:

```jsx
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
```

### Render

```jsx
render() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
```

### State

Create a variable that should be tracked:

```jsx
const [value, setValue] = React.useState('');
```

A constructor also can be used.

```jsx
constructor(props) {
  super(props);
  this.state = {
    myarray: Array(9).fill(null),
    mybool: true,
  };
}

this.state.myarray
this.setState({myarray: []})
```

### Sending props to child component

When instantiating a child component,
`props` (variables, functions, etc) can be sent.

From the parent component:

```jsx
return (
  <Square
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
  />
)
```

From the child component:

```jsx
return (
  <button onClick={this.props.onClick}>
    {this.props.value}
  </button>
)
```
