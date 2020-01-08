import React from "react";

import ClientLogin from "./components/Clients/ClientLogin";
import ClientHome from "./components/Clients/ClientHome";

import InstructorDashboard from "./components/instructor/InstructorDashboard";
import CreateClass from "./components/instructor/CreateClass";
import ViewClass from './components/instructor/ViewClass';
import EditClass from './components/instructor/EditClass';

import { Route } from "react-router-dom";

import SignupLoginLinks from "./components/SignupLoginLinks";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";

import "./App.css";
import CreatePass from "./components/instructor/CreatePass";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <SignupLoginLinks />
      </Route>

      <Route exact path="/login">
        <LoginForm />
      </Route>

      <Route exact path="/signup">
        <SignupForm role="client" />
      </Route>

      <Route exact path="/signup/client">
        <SignupForm role="client" />
      </Route>

      <Route exact path="/signup/instructor">
        <SignupForm role="instructor" />
      </Route>

      <Route path="/client" component={ClientHome} />

      <Route path="/client/home" component={ClientHome} />
      <Route exact path='/instructor/classes/:classID' render={props => {
        return <ViewClass {...props} />
      }} />
      <Route path='/instructor/classes/edit/:classID' render={props => {
        return <EditClass {...props} />
      }} />

      <Route exact path="/instructor" component={InstructorDashboard} />
      <Route exact path="/instructor/createclass" component={CreateClass} />
      <Route exact path="/instructor/createpass" component={CreatePass} />

    </div>
  );
}

export default App;
