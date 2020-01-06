import React from 'react';
import {Route} from 'react-router-dom'
import ClientLogin from './components/Clients/ClientLogin'
import ClientHome from './components/Clients/ClientHome'

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Anywhere Fitness</h1>
        <Route path="/client" component={ClientHome} />
        <Route path="/client/home" component={ClientHome} />
    </div>
  );
}

export default App;
