
import React from 'react';
import { ComponentC } from '..';
import classes from './ComponentB.module.css';

export default class ComponentB extends React.Component {
  static getDerivedStateFromError(error) {
    console.log('Comp B - getDerivedStateFromError()');
    console.log('-- error -->', error);
    console.log('___________________________________');

    return { hasError: true };
  }

  /** New lifecycle method */
  static getDerivedStateFromProps(props, state) {
    console.log('Comp B - getDerivedStateFromProps()');
    props.logArgs && console.log('-- props -->', props);
    props.logArgs && console.log('-- state -->', state);
    console.log('___________________________________');

    return state;
  }

  componentDidCatch(error, info) {
    console.log('Comp B - componentDidCatch()');
    this.props.logArgs && console.log('-- error -->', error);
    this.props.logArgs && console.log('-- info -->', info);
    console.log('___________________________________');
  }

  state = {
    name: 'Bus',
    hasError: false,
    showC: false,
    cSpeed: 10
  }

  constructor(props) {
    super(props);

    console.log('Comp B - constructor()');
    props.logArgs && console.log('-- props -->', props);
    console.log('___________________________________');
  }

  /** Legacy lifecycle method */
  // componentWillReceiveProps(nextProps) {
  //   console.log('Comp B - componentWillReceiveProps() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('Comp B - UNSAFE_componentWillReceiveProps() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method */
  // componentWillMount() {
  //   console.log('Comp B - componentWillMount() - legacy');
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillMount() {
  //   console.log('Comp B - UNSAFE_componentWillMount() - legacy');
  //   console.log('___________________________________');
  // }

  componentDidMount() {
    console.log('Comp B - componentDidMount()');
    console.log('___________________________________');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Comp B - shouldComponentUpdate()');
    this.props.logArgs && console.log('-- nextProps -->', nextProps);
    this.props.logArgs && console.log('-- nextState -->', nextState);
    console.log('___________________________________');

    return true;
  }

  /** New lifecycle method */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Comp B - getSnapshotBeforeUpdate()');
    prevProps.logArgs && console.log('-- prevProps -->', prevProps);
    prevProps.logArgs && console.log('-- prevState -->', prevState);
    console.log('___________________________________');

    return { anyValue: 512 };
  }

  /** Legacy lifecycle method */
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp B - componentWillUpdate() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   this.props.logArgs && console.log('-- nextState -->', nextState);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp B - UNSAFE_componentWillUpdate() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   this.props.logArgs && console.log('-- nextState -->', nextState);
  //   console.log('___________________________________');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Comp B - componentDidUpdate()');
    prevProps.logArgs && console.log('-- prevProps -->', prevProps);
    prevProps.logArgs && console.log('-- prevState -->', prevState);
    prevProps.logArgs && console.log('-- snapshot -->', snapshot);
    console.log('___________________________________');
  }

  componentWillUnmount() {
    console.log('Comp B - componentWillUnmount()');
    console.log('___________________________________');
  }

  toggleNameHandler = () => {
    this.setState(state => ({ name: state.name === 'Bus' ? 'Baboon' : 'Bus' }));
  };

  toggleCHandler = () => {
    this.setState(state => ({ showC: !state.showC }));
  };

  cSpeedChangeHandler = () => {
    this.setState(state => ({ cSpeed: state.cSpeed + 5 }));
  }

  render() {
    console.log('Comp B - render()');
    console.log('___________________________________');

    const { name, showC, cSpeed } = this.state;
    const { mass, logArgs } = this.props;

    return (
      <div className={classes.ComponentContainer}>
        <p>Component <code>B</code> - <small>{name} <i>({mass})</i></small></p>
        
        <button className={classes.Button} onClick={this.toggleNameHandler}>Change B's state</button>
        <button className={classes.Button} onClick={this.toggleCHandler}>{showC ? 'Unmount' : 'Mount'} C</button>
        {showC && <button className={classes.Button} onClick={this.cSpeedChangeHandler}>Change C's props</button>}

        {showC && <ComponentC speed={cSpeed} {...{logArgs}}/>}
      </div>
    );
  }
}
