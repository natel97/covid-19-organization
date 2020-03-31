import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../Redux/reducer";

export default () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(s => s.token);

  return (
    <nav>
      <BackAndHome pathname={pathname} />

      <input id="bmenub" type="checkbox" className="show" />
      <label htmlFor="bmenub" className="burger pseudo button">
        &#8801;
      </label>

      {user && user !== null ? (
        <LoggedInOptions logout={() => dispatch(setToken({ token: null }))} />
      ) : (
        <LoggedOutOptions />
      )}
    </nav>
  );
};

const BackAndHome = ({ pathname }) => {
  const showBack = pathname !== "/landing" && pathname !== "/";

  return (
    <>
      {showBack && (
        <Link
          className="brand border-right"
          to={pathname.substring(0, pathname.lastIndexOf("/"))}
        >
          <span>&#8249;</span>
        </Link>
      )}
      <Link to="/" className="brand">
        Home
      </Link>
    </>
  );
};

const LoggedInOptions = ({ logout }) => {
  return (
    <div className="menu">
      <Link to="/volunteer" className="pseudo button icon-picture">
        Volunteer
      </Link>
      <Link to="/help" className="pseudo button icon-picture">
        Get help
      </Link>
      <a
        href="https://github.com/natel97/covid-19-organization"
        className="pseudo button icon-picture"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <Link to="/" onClick={logout} className="button icon-puzzle">
        Sign Out
      </Link>
    </div>
  );
};
const LoggedOutOptions = () => {
  return (
    <div className="menu">
      <Link to="/" className="pseudo button icon-picture">
        About this app
      </Link>
      <a
        href="https://github.com/natel97/covid-19-organization"
        className="pseudo button icon-picture"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <Link to="/auth" className="button icon-puzzle">
        Sign In
      </Link>
      <Link to="/auth/create" className="button pseudo icon-puzzle">
        Create Account
      </Link>
    </div>
  );
};
