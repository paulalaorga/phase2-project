import React from 'react';
import stove from './stove.png';
import './App.css';
import NavBar from './Components/NavBar';

function App() {

  return (
    <div className="App">
      <header id="menu-header">
        <img src={stove} className="App-logo" alt="menu" />
      </header>
      <NavBar />
    </div>
  );
}

export default App;
