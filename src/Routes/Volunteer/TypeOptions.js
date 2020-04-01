import React from "react";

export default ({ match }) => {
  return (
    <div className="flex-column full-height">
      <h3 className="text-center">{match.params.type} Details</h3>
      <div className="label warning flex-1 ">
        <div className="full-height flex-column justify-center align-center">
          <h2>Coming Soon</h2>
        </div>
      </div>
    </div>
  );
};
