import React from 'react';
import {Route} from 'react-router-dom'
import ClientLogin from './components/Clients/ClientLogin'
import ClientHome from './components/Clients/ClientHome'
import InstructorDashboard from './components/instructor/InstructorDashboard';
import CreateClass from './components/instructor/CreateClass'

import './App.css';


function App() {
  return (
    <div className="App">
        <h1>Anywhere Fitness</h1>
        <Route path="/client" component={ClientHome} />
        <Route path="/client/home" component={ClientHome} />
      {/* <header className="App-header">
        <h1>Anywhere Fitness</h1>
      </header> */}
      <Route exact path='/' component={InstructorDashboard} />
      <Route path='/instructor/createclass' component={CreateClass} />
    </div>
  );
}

export default App;
