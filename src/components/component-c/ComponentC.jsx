
import React from 'react';
import classes from './ComponentC.module.css';

export default class ComponentC extends React.Component {
  static getDerivedStateFromError(error) {
    console.log('Comp C - getDerivedStateFromError()');
    console.log('-- error -->', error);

    return { hasError: true };
  }

  /** New lifecycle method */
  static getDerivedStateFromProps(props, state) {
    console.log('Comp C - getDerivedStateFromProps()');
    console.log('-- props -->', props);
    console.log('-- state -->', state);

    return state;
  }

  componentDidCatch(error, info) {
    console.log('Comp C - componentDidCatch()');
    console.log('-- error -->', error);
    console.log('-- info -->', info);
  }

  state = {
    name: 'Car',
    hasError: false
  }

  constructor(props) {
    super(props);

    console.log('Comp C - constructor()');
    console.log('-- props -->', props);
  }

  /** Legacy lifecycle method */
  // componentWillReceiveProps(nextProps) {
  //   console.log('Comp C - componentWillReceiveProps() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('Comp C - UNSAFE_componentWillReceiveProps() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  // }

  /** Legacy lifecycle method */
  // componentWillMount() {
  //   console.log('Comp C - componentWillMount() - legacy');
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillMount() {
  //   console.log('Comp C - UNSAFE_componentWillMount() - legacy');
  // }

  componentDidMount() {
    console.log('Comp C - componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Comp C - shouldComponentUpdate()');
    console.log('-- nextProps -->', nextProps);
    console.log('-- nextState -->', nextState);

    return true;
  }

  /** New lifecycle method */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Comp C - getSnapshotBeforeUpdate()');
    console.log('-- prevProps -->', prevProps);
    console.log('-- prevState -->', prevState);

    return { anyValue: 512 };
  }

  /** Legacy lifecycle method */
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp C - componentWillUpdate() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  //   console.log('-- nextState -->', nextState);
  // }

  /** Legacy lifecycle method with prefix */
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('Comp C - UNSAFE_componentWillUpdate() - legacy');
  //   console.log('-- nextProps -->', nextProps);
  //   console.log('-- nextState -->', nextState);
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Comp C - componentDidUpdate()');
    console.log('-- prevProps -->', prevProps);
    console.log('-- prevState -->', prevState);
    console.log('-- snapshot -->', snapshot);
  }

  componentWillUnmount() {
    console.log('Comp C - componentWillUnmount()');
  }

  toggleNameHandler = () => {
    this.setState(state => ({ name: state.name === 'Car' ? 'Cobra' : 'Car' }));
  };

  render() {
    console.log('Comp C - render()');

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
