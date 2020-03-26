import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Home from "./Routes/Home/Home";
import NotFound from "./Routes/NotFound";
import MyList from "./Routes/Volunteer/MyList";
import Navbar from "./Components/Navbar";
import CreateAccount from "./Routes/CreateAccount/CreateAccount";
import AddMore from "./Routes/Volunteer/AddMore";

export default () => {
  return (
    <div className="full-width full-height nav-padding">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/volunteer/add" component={AddMore} />
          <Route path="/volunteer" component={MyList} />
          <Route path="/account" component={CreateAccount} />

          <Route path="/not-found" component={NotFound} />
          <Redirect from="**" to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
