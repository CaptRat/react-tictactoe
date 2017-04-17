import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   msg: "Hello, Puppies"
    // }
  }

  componentWillMount(){
    this.state = {
      msg: 'Yo Yo, World!'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={() => this.setState({msg: this.state.msg + '!'})}>{this.state.msg}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
