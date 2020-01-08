import React from "react";
import { Route } from "react-router-dom";

import ClientLogin from "./components/Clients/ClientLogin";
import ClientHome from "./components/Clients/ClientHome";

import InstructorDashboard from "./components/instructor/InstructorDashboard";
import CreateClass from "./components/instructor/CreateClass";
import ViewClass from './components/instructor/ViewClass';
import EditClass from './components/instructor/EditClass';
import ViewStudioClass from './components/instructor/ViewStudioClass';
import EditStudioClass from './components/instructor/EditStudioClass';
import CreateStudioClass from './components/instructor/CreateStudioClass';

import SignupLoginLinks from "./components/SignupLoginLinks";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";

import "./App.css";
import CreatePass from "./components/instructor/CreatePass";

import PrivateRoute from './components/PrivateRoute';


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

      <Route exact path="/signup/client" render={props => {
        return <SignupForm {...props} role="client" />
      }} />


      {/* <Route exact path="/signup/client">
        <SignupForm role="client" />
      </Route> */}

      <Route exact path="/signup/instructor">
        <SignupForm role="instructor" />
      </Route>

      <PrivateRoute path="/client" component={ClientHome} />

      <PrivateRoute path="/client/home" component={ClientHome} />

      <PrivateRoute exact path='/instructor/classes/:classID' render={props => {
        return <ViewClass {...props} />
      }} />
      <PrivateRoute path='/instructor/classes/edit/:classID' render={props => {
        return <EditClass {...props} />
      }} />

      <PrivateRoute exact path='/instructor/studioclasses/:classID' render={props => {
        return <ViewStudioClass {...props} />
      }} />
      <PrivateRoute path='/instructor/studioclasses/edit/:classID' render={props => {
        return <EditStudioClass {...props} />
      }} />

      {/* <Route exact path='/logout' render={props => <LogOut {...props} />} /> */}

      <PrivateRoute exact path="/instructor" component={InstructorDashboard} />
      <PrivateRoute exact path="/instructor/createclass" component={CreateClass} />
      <PrivateRoute exact path="/instructor/createstudioclass" component={CreateStudioClass} />
      <PrivateRoute exact path="/instructor/createpass" component={CreatePass} />

    </div>
  );
}

export default App;
