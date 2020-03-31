import React from "react";

export default ({ match }) => {
  return (
    <div className="flex-column full-height">
      <h3 className="text-center">{match.params.type} Details</h3>
      <h3 className="label warning">Coming Soon</h3>
    </div>
  );
};
