import React, { Component } from 'react';

import * as Actions from '../Actions.js';
// import CounterStore from '../stores/CounterStore.js';
import store from '../Store'
console.log('store', store)
const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: store.getState()[props.caption]
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  onChange() {
    const newCount = store.getState()[this.props.caption];
    this.setState({count: newCount});
    console.log('store', store.getState())
  }

  onClickIncrementButton() {
    store.dispatch(Actions.increment(this.props.caption))
  }

  onClickDecrementButton() {
    store.dispatch(Actions.decrement(this.props.caption))
  }

  render() {
    const {caption} = this.props;
    console.log('render-counter--' + caption)    
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

// Counter.propTypes = {
//   caption: PropTypes.string.isRequired
// };

export default Counter;

