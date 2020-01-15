
import React from 'react';
import { ComponentB } from '..';
import classes from './ComponentA.module.css';

export default class ComponentA extends React.Component {
  static getDerivedStateFromError(error) {
    console.log('Comp A - getDerivedStateFromError()');
    console.log('-- error -->', error);
    console.log('___________________________________');

    return { hasError: true };
  }

  /** New lifecycle method */
  static getDerivedStateFromProps(props, state) {
    console.log('Comp A - getDerivedStateFromProps()');
    props.logArgs && console.log('-- props -->', props);
    props.logArgs && console.log('-- state -->', state);
    console.log('___________________________________');

    return state;
  }

  componentDidCatch(error, info) {
    console.log('Comp A - componentDidCatch()');
    this.props.logArgs && console.log('-- error -->', error);
    this.props.logArgs && console.log('-- info -->', info);
    console.log('___________________________________');
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
    props.logArgs && console.log('-- props -->', props);
    console.log('___________________________________');
  }

  /** Legacy lifecycle method */
  // componentWillReceiveProps(nextProps) {
  //   console.log('Comp A - componentWillReceiveProps() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('Comp A - UNSAFE_componentWillReceiveProps() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method */
  // componentWillMount() {
  //   console.log('Comp A - componentWillMount() - legacy');
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillMount() {
  //   console.log('Comp A - UNSAFE_componentWillMount() - legacy');
  //   console.log('___________________________________');
  // }

  componentDidMount() {
    console.log('Comp A - componentDidMount()');
    console.log('___________________________________');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Comp A - shouldComponentUpdate()');
    this.props.logArgs && console.log('-- nextProps -->', nextProps);
    this.props.logArgs && console.log('-- nextState -->', nextState);
    console.log('___________________________________');

    return true;
  }

  /** New lifecycle method */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Comp A - getSnapshotBeforeUpdate()');
    prevProps.logArgs && console.log('-- prevProps -->', prevProps);
    prevProps.logArgs && console.log('-- prevState -->', prevState);
    console.log('___________________________________');

    return { anyValue: 512 };
  }

  /** Legacy lifecycle method */
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp A - componentWillUpdate() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   this.props.logArgs && console.log('-- nextState -->', nextState);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp A - UNSAFE_componentWillUpdate() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   this.props.logArgs && console.log('-- nextState -->', nextState);
  //   console.log('___________________________________');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Comp A - componentDidUpdate()');
    prevProps.logArgs && console.log('-- prevProps -->', prevProps);
    prevProps.logArgs && console.log('-- prevState -->', prevState);
    prevProps.logArgs && console.log('-- snapshot -->', snapshot);
    console.log('___________________________________');
  }

  componentWillUnmount() {
    console.log('Comp A - componentWillUnmount()');
    console.log('___________________________________');
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
    console.log('___________________________________');

    const { name, showB, bMass } = this.state;
    const { logArgs } = this.props;

    return (
      <div className={classes.ComponentContainer}>
        <p>Component <code>A</code> - <small>{name}</small></p>
        
        <button className={classes.Button} onClick={this.toggleNameHandler}>Change A's state</button>
        <button className={classes.Button} onClick={this.toggleBHandler}>{showB ? 'Unmount' : 'Mount'} B</button>
        {showB && <button className={classes.Button} onClick={this.bMassChangeHandler}>Change B's props</button>}

        {showB && <ComponentB mass={bMass} {...{logArgs}}/>}
      </div>
    );
  }
}
