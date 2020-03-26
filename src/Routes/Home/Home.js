import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="full-height flex-column justify-between text-center">
      <h1>Let's Irradicate COVID-19 Together</h1>
      <div className="justify-around flex-column">
        <Link to="/volunteer">
          <button className="success full-width">I want to help</button>
        </Link>
        <Link to="/help">
          <button className="pseudo full-width">I want help</button>
        </Link>
      </div>
    </div>
  );
};
