import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <Link to="/" className="brand">
        <span>Home</span>
      </Link>

      <input id="bmenub" type="checkbox" className="show" />
      <label for="bmenub" className="burger pseudo button">
        &#8801;
      </label>

      <div class="menu">
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
        <Link to="/" className="button icon-puzzle">
          Sign Out
        </Link>
      </div>
    </nav>
  );
};
