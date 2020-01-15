
import React from 'react';
import { ComponentC } from '..';

export default class ComponentB extends React.Component {
  static getDerivedStateFromError(error) {
    console.log('Comp B - getDerivedStateFromError()');
    console.log('-- error -->', error);

    return { hasError: true };
  }

  /** New lifecycle method */
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Comp B - getDerivedStateFromProps()');
  //   console.log('-- props -->', props);
  //   console.log('-- state -->', state);

  //   return state;
  // }

  componentDidCatch(error, info) {
    console.log('Comp B - componentDidCatch()');
    console.log('-- error -->', error);
    console.log('-- info -->', info);
  }

  state = {
    color: 'blue',
    hasError: false
  }

  constructor(props) {
    super(props);

    console.log('Comp B - constructor()');
    console.log('-- props -->', props);
  }

  /** Legacy lifecycle method */
  componentWillReceiveProps(nextProps) {
    console.log('Comp B - componentWillReceiveProps() - legacy');
    console.log('-- nextProps -->', nextProps);
  }

  /** Legacy lifecycle method with prefix */
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('Comp B - UNSAFE_componentWillReceiveProps() - legacy');
    console.log('-- nextProps -->', nextProps);
  }

  /** Legacy lifecycle method */
  componentWillMount() {
    console.log('Comp B - componentWillMount() - legacy');
  }

  /** Legacy lifecycle method with prefix */
  UNSAFE_componentWillMount() {
    console.log('Comp B - UNSAFE_componentWillMount() - legacy');
  }

  componentDidMount() {
    console.log('Comp B - componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Comp B - shouldComponentUpdate()');
    console.log('-- nextProps -->', nextProps);
    console.log('-- nextState -->', nextState);

    return true;
  }

  /** New lifecycle method */
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('Comp B - getSnapshotBeforeUpdate()');
  //   console.log('-- prevProps -->', prevProps);
  //   console.log('-- prevState -->', prevState);

  //   return { anyValue: 512 };
  // }

  /** Legacy lifecycle method */
  componentWillUpdate(nextProps, nextState) {
    console.log('Comp B - componentWillUpdate() - legacy');
    console.log('-- nextProps -->', nextProps);
    console.log('-- nextState -->', nextState);
  }

  /** Legacy lifecycle method with prefix */
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('Comp B - UNSAFE_componentWillUpdate() - legacy');
    console.log('-- nextProps -->', nextProps);
    console.log('-- nextState -->', nextState);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Comp B - componentDidUpdate()');
    console.log('-- prevProps -->', prevProps);
    console.log('-- prevState -->', prevState);
    console.log('-- snapshot -->', snapshot);
  }

  componentWillUnmount() {
    console.log('Comp B - componentWillUnmount()');
  }

  render() {
    console.log('Comp B - render()');

    const { color } = this.state;

    return (
      <div>
        <p style={{ color }}>Component <code>B</code></p>
        <ComponentC />
      </div>
    );
  }
}
