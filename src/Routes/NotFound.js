import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="align-center justify-center flex-column full-height">
      <div>We're sorry, but we don't know where you are.</div>
      <Link to="/">Click here to go home</Link>
    </div>
  );
};
