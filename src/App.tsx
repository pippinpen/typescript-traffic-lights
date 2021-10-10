import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLights from './components/TrafficLight/TrafficLights';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TrafficLights startingLight="green" />
      </header>
    </div>
  );
}

export default App;
