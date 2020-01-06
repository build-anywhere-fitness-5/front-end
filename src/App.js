import React from 'react';
import { Route } from 'react-router-dom';

import InstructorDashboard from './components/instructor/InstructorDashboard';
import CreateClass from './components/instructor/CreateClass'

import './App.css';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Anywhere Fitness</h1>
      </header> */}
      <Route exact path='/' component={InstructorDashboard} />
      <Route path='/instructor/createclass' component={CreateClass} />
    </div>
  );
}

export default App;
