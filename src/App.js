import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Home from "./Routes/Home/Home";
import NotFound from "./Routes/NotFound";
import MyList from "./Routes/Volunteer/MyList";
import Navbar from "./Components/Navbar";
import CreateAccount from "./Routes/Auth/CreateAccount";
import AddMore from "./Routes/Volunteer/AddMore";
import HelpHome from "./Routes/GetHelp/HelpHome";
import {
  mockVolunteerOpportunities,
  mockHelpOptions
} from "./Components/MockData";
import { store } from "./Redux/store";
import { Provider, useSelector } from "react-redux";
import Login from "./Routes/Auth/Login";
import About from "./Routes/Home/About";
import TypeOptions from "./Routes/Volunteer/TypeOptions";
export default () => {
  return (
    <div className="full-width full-height nav-padding">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/landing" component={Home} />

            {/* Authentication */}
            <Route path="/auth/create" component={CreateAccount} />
            <Route path="/auth" component={Login} />

            {/* Volunteer opportunities */}
            <AuthenticatedRoute path="/volunteer/add">
              <AddMore dataset={mockVolunteerOpportunities()} />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/volunteer" exact component={MyList} />
            <AuthenticatedRoute
              path="/volunteer/:type"
              component={TypeOptions}
            />

            {/* Getting Help */}
            <AuthenticatedRoute path="/help/all">
              <AddMore dataset={mockHelpOptions()} />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/help" component={HelpHome} />

            {/* Misc */}
            <AuthenticatedRoute path="/not-found" component={NotFound} />
            <Redirect from="**" to="/not-found" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

const AuthenticatedRoute = props => {
  const auth = useSelector(s => s.token);
  if (auth === null || auth === undefined) {
    return <Redirect to="/auth" />;
  }

  return <Route {...props} />;
};

const Landing = () => {
  const auth = useSelector(s => s.token);
  if (auth === null || auth === undefined) {
    return <About />;
  }

  return <Redirect to="/landing" />;
};
