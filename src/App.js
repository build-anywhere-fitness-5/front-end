import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"


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
import Onboarding from "./components/Onboarding";
import Header from "./components/Header";

import "./App.css";
import CreatePass from "./components/instructor/CreatePass";
import ScheduledClasses from "./components/Clients/ScheduledClasses";
import CreateCategory from "./components/instructor/CreateCategory";


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

      <Route exact path="/onboarding">
        <Onboarding />
      </Route>

      <PrivateRoute exact path="/client" component={ClientHome} />
      <PrivateRoute exact path="/client/schedule" component={ScheduledClasses} />


      <PrivateRoute exact path='/instructor/classes/:classID' component={ViewClass} />
      <PrivateRoute path='/instructor/classes/edit/:classID' component={EditClass} />

      <PrivateRoute exact path='/instructor/studioclasses/:classID' component={ViewStudioClass} />
      <PrivateRoute path='/instructor/studioclasses/edit/:classID' component={EditStudioClass} />

      {/* <Route exact path='/logout' render={props => <LogOut {...props} />} /> */}

      <PrivateRoute exact path="/instructor" component={InstructorDashboard} />
      <PrivateRoute exact path="/instructor/createclass" component={CreateClass} />
      <PrivateRoute exact path="/instructor/createstudioclass" component={CreateStudioClass} />
      <PrivateRoute exact path="/instructor/createpass" component={CreatePass} />
      <PrivateRoute exact path="/instructor/createcategory" component={CreateCategory} />


    </div>
  );
}

export default App;
