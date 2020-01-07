import React from "react";

import ClientLogin from "./components/Clients/ClientLogin";
import ClientHome from "./components/Clients/ClientHome";

import InstructorDashboard from "./components/instructor/InstructorDashboard";
import CreateClass from "./components/instructor/CreateClass";
import InstructorClass from "./components/instructor/InstructorClass";

import { Route } from "react-router-dom";

import SignupLoginLinks from "./components/SignupLoginLinks";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Anywhere Fitness</h1>

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

      <Route
        path="/instructor/classes/:id"
        render={props => {
          return <InstructorClass {...props} />;
        }}
      />

      <Route
        exact
        path="/instructor"
        render={props => {
          return <InstructorDashboard {...props} />;
        }}
      />
      <Route exact path="/instructor/createclass" component={CreateClass} />
    </div>
  );
}

export default App;
