import React, { Component } from 'react';

// import SummaryStore from '../stores/SummaryStore.js';
import store from '../Store'

class Summary extends Component {

  constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
    this.getOwnSummary = this.getOwnSummary.bind(this);

    this.state = this.getOwnSummary()
  }

  getOwnSummary() {
    let state = store.getState()
    let sum = 0
    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }
    return {sum}
  }

  componentDidMount() {
    store.subscribe(this.onUpdate);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onUpdate);
  }

  onUpdate() {
    this.setState(this.getOwnSummary())
  }

  render() {
    return (
      <div>Total Count: {this.state.sum}</div>
    );
  }
}

export default Summary;
