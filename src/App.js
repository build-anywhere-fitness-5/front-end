import React from 'react';
import {Route} from 'react-router-dom'
import ClientLogin from './components/Clients/ClientLogin'
import ClientHome from './components/Clients/ClientHome'
import InstructorDashboard from './components/instructor/InstructorDashboard';
import CreateClass from './components/instructor/CreateClass'

import SignupLoginLinks from "./components/SignupLoginLinks";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Anywhere Fitness</h1>
        <Route exact path="/">
          <SignupLoginLinks />
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route exact path="/signup">
          <SignupForm role="client"/>
        </Route>

        <Route exact path="/signup/client">
          <SignupForm role="client" />
        </Route>

        <Route exact path="/signup/instructor">
          <SignupForm role="instructor" />
        </Route>

      </header>
    </div>
  );
}

export default App;
