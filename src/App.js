import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Home from "./Routes/Home/Home";
import NotFound from "./Routes/NotFound";
import MyList from "./Routes/Volunteer/MyList";
import Navbar from "./Components/Navbar";
import CreateAccount from "./Routes/CreateAccount/CreateAccount";
import AddMore from "./Routes/Volunteer/AddMore";
import HelpHome from "./Routes/GetHelp/HelpHome";
import {
  mockVolunteerOpportunities,
  mockHelpOptions
} from "./Components/MockData";

export default () => {
  return (
    <div className="full-width full-height nav-padding">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          {/* Volunteer opportunities */}
          <Route path="/volunteer/add">
            <AddMore dataset={mockVolunteerOpportunities()} />
          </Route>
          <Route path="/volunteer" component={MyList} />
          <Route path="/account" component={CreateAccount} />

          {/* Getting Help */}
          <Route path="/help/all">
            <AddMore dataset={mockHelpOptions()} />
          </Route>
          <Route path="/help" component={HelpHome} />

          {/* Misc */}
          <Route path="/not-found" component={NotFound} />
          <Redirect from="**" to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
