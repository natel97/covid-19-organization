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
        <Link to="#" className="pseudo button icon-picture">
          Demo
        </Link>
        <Link to="#" className="button icon-puzzle">
          Plugins
        </Link>
      </div>
    </nav>
  );
};
