import React, { Component } from 'react';
import { render } from 'react-dom';

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

class Foo extends Component {
  render() {
    return <h2>My name is {this.props.name}.</h2>;
  }
}

render(
  <App />,
  document.getElementById('main')
)
