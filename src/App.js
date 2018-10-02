import React, { Component } from 'react';
import './App.css';
import LuizaoCamera from './Luizao/Camera'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Testing PWA config!
          </h2>
          <h2>
             Waiting for your feedback.
          </h2>

        </header>
        <LuizaoCamera />
      </div>
    );
  }
}

export default App;
