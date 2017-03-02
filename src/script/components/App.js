import React, { Component } from 'react';
import MyComponent from './MyComponent'
import logo from '../../images/logo.svg';
import '../../style/dist/components/App.css';

// ES6 Class
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent subtitle="I am embedded in another component." />
      </div>
    );
  }
}

export default App;
