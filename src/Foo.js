import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './foo.css';

class Foo extends Component {
  render() {
    return <h2 styleName="foobar">My name is {this.props.name}.</h2>;
  }
}

export default CSSModules(Foo, styles);
