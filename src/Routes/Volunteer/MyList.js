import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mockVolunteerOpportunities } from "../../Components/MockData";

const getDemandClass = demand =>
  demand > 8 ? "error" : demand > 5 ? "warning" : "success";

export default () => {
  const [activities] = useState(mockVolunteerOpportunities());
  return (
    <div className="flex-column full-height">
      <h3 className="text-center">My Volunteering Activities</h3>
      <div
        style={{ background: "#ccc" }}
        className="flex-1 overflow-auto flex-column"
      >
        {activities
          .sort((a, b) => b.localDemand - a.localDemand)
          .map(({ name, description, localDemand }) => (
            <Link
              to={`/volunteer/${name}`}
              className={`button ${getDemandClass(localDemand)} full-width`}
            >
              <h2>{name}</h2>
              <div>{description}</div>
            </Link>
          ))}
      </div>
      <Link to="/volunteer/add">
        <button className="info full-width">See All Opportunities</button>
      </Link>
    </div>
  );
};
