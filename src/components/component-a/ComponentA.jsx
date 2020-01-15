
import React from 'react';
import { ComponentB } from '..';
import classes from './ComponentA.module.css';

export default class ComponentA extends React.Component {
  static getDerivedStateFromError(error) {
    console.log('Comp A - getDerivedStateFromError()');
    console.log('-- error -->', error);

    return { hasError: true };
  }

  /** New lifecycle method */
  static getDerivedStateFromProps(props, state) {
    console.log('Comp A - getDerivedStateFromProps()');
    console.log('-- props -->', props);
    console.log('-- state -->', state);

    return state;
  }

  componentDidCatch(error, info) {
    console.log('Comp A - componentDidCatch()');
    console.log('-- error -->', error);
    console.log('-- info -->', info);
  }

  state = {
    name: 'Aeroplane',
    hasError: false,
    showB: false,
    bMass: 300
  }

  constructor(props) {
    super(props);

    console.log('Comp A - constructor()');
    console.log('-- props -->', props);
  }

  /** Legacy lifecycle method */
  // componentWillReceiveProps(nextProps) {
  //   console.log('Comp A - componentWillReceiveProps() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('Comp A - UNSAFE_componentWillReceiveProps() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  // }

  /** Legacy lifecycle method */
  // componentWillMount() {
  //   console.log('Comp A - componentWillMount() - legacy');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillMount() {
  //   console.log('Comp A - UNSAFE_componentWillMount() - legacy');
  // }

  componentDidMount() {
    console.log('Comp A - componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Comp A - shouldComponentUpdate()');
    console.log('-- nextProps -->', nextProps);
    console.log('-- nextState -->', nextState);

    return true;
  }

  /** New lifecycle method */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Comp A - getSnapshotBeforeUpdate()');
    console.log('-- prevProps -->', prevProps);
    console.log('-- prevState -->', prevState);

    return { anyValue: 512 };
  }

  /** Legacy lifecycle method */
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp A - componentWillUpdate() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  //   console.log('-- nextState -->', nextState);
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp A - UNSAFE_componentWillUpdate() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  //   console.log('-- nextState -->', nextState);
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Comp A - componentDidUpdate()');
    console.log('-- prevProps -->', prevProps);
    console.log('-- prevState -->', prevState);
    console.log('-- snapshot -->', snapshot);
  }

  componentWillUnmount() {
    console.log('Comp A - componentWillUnmount()');
  }

  toggleNameHandler = () => {
    this.setState(state => ({ name: state.name === 'Aeroplane' ? 'Anaconda' : 'Aeroplane' }));
  };

  toggleBHandler = () => {
    this.setState(state => ({ showB: !state.showB }));
  };

  bMassChangeHandler = () => {
    this.setState(state => ({ bMass: state.bMass + 50 }));
  }

  render() {
    console.log('Comp A - render()');

    const { name, showB, bMass } = this.state;

    return (
      <div className={classes.ComponentContainer}>
        <p>Component <code>A</code> - <small>{name}</small></p>
        <button className={classes.Button} onClick={this.toggleNameHandler}>Change A's state</button>
        <button className={classes.Button} onClick={this.toggleBHandler}>Toggle B</button>
        {showB && <button className={classes.Button} onClick={this.bMassChangeHandler}>Change B's props</button>}

        {showB && <ComponentB mass={bMass}/>}
      </div>
    );
  }
}
