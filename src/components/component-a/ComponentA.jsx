
import React from 'react';
import { ComponentB } from '..';

export default class ComponentA extends React.Component {
  render() {
    return (
      <div>
        <p>Component <code>A</code></p>
        <ComponentB />
      </div>
    );
  }
}
