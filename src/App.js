import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from "./components/Circles/Circles";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;
