
import React from 'react';
import classes from './ComponentC.module.css';

export default class ComponentC extends React.Component {
  static getDerivedStateFromError(error) {
    console.log('Comp C - getDerivedStateFromError()');
    console.log('-- error -->', error);
    console.log('___________________________________');

    return { hasError: true };
  }

  /** New lifecycle method */
  static getDerivedStateFromProps(props, state) {
    console.log('Comp C - getDerivedStateFromProps()');
    props.logArgs && console.log('-- props -->', props);
    props.logArgs && console.log('-- state -->', state);
    console.log('___________________________________');

    return state;
  }

  componentDidCatch(error, info) {
    console.log('Comp C - componentDidCatch()');
    this.props.logArgs && console.log('-- error -->', error);
    this.props.logArgs && console.log('-- info -->', info);
    console.log('___________________________________');
  }

  state = {
    name: 'Car',
    hasError: false
  }

  constructor(props) {
    super(props);

    console.log('Comp C - constructor()');
    props.logArgs && console.log('-- props -->', props);
    console.log('___________________________________');
  }

  /** Legacy lifecycle method */
  // componentWillReceiveProps(nextProps) {
  //   console.log('Comp C - componentWillReceiveProps() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('Comp C - UNSAFE_componentWillReceiveProps() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method */
  // componentWillMount() {
  //   console.log('Comp C - componentWillMount() - legacy');
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillMount() {
  //   console.log('Comp C - UNSAFE_componentWillMount() - legacy');
  //   console.log('___________________________________');
  // }

  componentDidMount() {
    console.log('Comp C - componentDidMount()');
    console.log('___________________________________');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Comp C - shouldComponentUpdate()');
    this.props.logArgs && console.log('-- nextProps -->', nextProps);
    this.props.logArgs && console.log('-- nextState -->', nextState);
    console.log('___________________________________');

    return true;
  }

  /** New lifecycle method */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Comp C - getSnapshotBeforeUpdate()');
    prevProps.logArgs && console.log('-- prevProps -->', prevProps);
    prevProps.logArgs && console.log('-- prevState -->', prevState);
    console.log('___________________________________');

    return { anyValue: 512 };
  }

  /** Legacy lifecycle method */
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp C - componentWillUpdate() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   this.props.logArgs && console.log('-- nextState -->', nextState);
  //   console.log('___________________________________');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp C - UNSAFE_componentWillUpdate() - legacy');
  //   this.props.logArgs && console.log('-- nextProps -->', nextProps);
  //   this.props.logArgs && console.log('-- nextState -->', nextState);
  //   console.log('___________________________________');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Comp C - componentDidUpdate()');
    prevProps.logArgs && console.log('-- prevProps -->', prevProps);
    prevProps.logArgs && console.log('-- prevState -->', prevState);
    prevProps.logArgs && console.log('-- snapshot -->', snapshot);
    console.log('___________________________________');
  }

  componentWillUnmount() {
    console.log('Comp C - componentWillUnmount()');
    console.log('___________________________________');
  }

  toggleNameHandler = () => {
    this.setState(state => ({ name: state.name === 'Car' ? 'Cobra' : 'Car' }));
  };

  render() {
    console.log('Comp C - render()');
    console.log('___________________________________');

    const { name } = this.state;
    const { speed } = this.props;

    return (
      <div className={classes.ComponentContainer}>
        <p>Component <code>C</code> - <small>{name} <i>({speed})</i></small></p>
        
        <button className={classes.Button} onClick={this.toggleNameHandler}>Change C's state</button>
      </div>
    );
  }
}
