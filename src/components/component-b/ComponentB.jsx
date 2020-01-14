
import React from 'react';
import { ComponentC } from '..';

export default class ComponentB extends React.Component {
  render() {
    return (
      <div>
        <p>Component <code>B</code></p>
        <ComponentC />
      </div>
    );
  }
}
