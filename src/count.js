import React from 'react';

class Click extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
      <h1>The counter is currently {this.state.count}</h1>

      <button 
        onClick={() => this.setState({ count: this.state.count - 1 })}>
        -
      </button>

      <button 
        onClick={() => this.setState({ count: this.state.count + 1 })}>
        +
      </button>

      </div>
    )
  }
}
export default Click;
