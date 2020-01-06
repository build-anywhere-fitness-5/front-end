import React from 'react';
import { Route } from 'react-router-dom';
import Classes from './components/Classes'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anywhere Fitness</h1>

      </header>
      <Route exact path='/' component={Classes} />
    </div>
  );
}

export default App;
