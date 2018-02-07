import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lakshmi from "./Lakshmi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Learn React</h1>
        </header>

        <Lakshmi/>

        {getFooter()}

      </div>
    );
  }
}

function getFooter() {
  return (
    <div>This is footer component. this is a pure js functions</div>
  )
}


export default App;
