import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';
console.dir(Counter)
console.dir(Summary)
// console.dir('panel', Counter,Summary)
const style = {
  margin: '20px'
};

class ControlPanel extends Component {

  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;

