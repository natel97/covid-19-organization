import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="full-height flex-column justify-between text-center">
      <h1>Let's Irradicate COVID-19 Together</h1>
      <div className="justify-around flex-column">
        <Link to="/volunteer" className="button success full-width">
          I want to help
        </Link>
        <Link to="/help" className="pseudo button full-width">
          I want help
        </Link>
      </div>
    </div>
  );
};
