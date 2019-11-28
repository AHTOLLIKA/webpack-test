import React from 'react';
import logo from './logo.svg';

import './App.scss';

import Test from './components/Test';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Test />
    </header>
  </div>
);

export default App;
