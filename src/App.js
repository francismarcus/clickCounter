import React, { Component } from 'react';
import './App.css';
import Count from './count';

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <Count />
      </div>
    );
  }
}

export default App;
