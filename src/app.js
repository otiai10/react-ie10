import React, { Component } from 'react';
import { render } from 'react-dom';

import Foo from './Foo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: true
    }
  }
  render() {
    return (
      <div>
        <h1>Hello, World: {String(this.state.foo)}</h1>
        <Foo name="otiai10" />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('main')
)
