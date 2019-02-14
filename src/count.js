import React from 'react';
import { throws } from 'assert';

class Count extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = (n) => {
    this.setState({ count: this.state.count + n });
  }
  
  decrement = (n) => {
    this.setState({ count: this.state.count - n });
  }

  render() {
    return (
      <div>
      <h1>The counter is currently {this.state.count}</h1>
      <button onClick={() => this.decrement(1)}>
        -
      </button>
      <button onClick={() => this.increment(1)}>
        +
      </button>
      </div>
    )
  }
}
export default Count;
