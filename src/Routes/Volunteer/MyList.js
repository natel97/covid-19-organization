import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mockVolunteerOpportunities } from "../../Components/MockData";

const getDemandClass = demand =>
  demand > 8 ? "error" : demand > 5 ? "warning" : "success";

export default () => {
  const [activities] = useState(mockVolunteerOpportunities());
  return (
    <div className="flex-column full-height">
      <h1 className="text-center">My Volunteering Activities</h1>
      <div style={{ background: "#ccc" }} className="flex-1">
        {activities
          .sort((a, b) => b.localDemand - a.localDemand)
          .map(({ name, description, localDemand }) => (
            <button className={`${getDemandClass(localDemand)} full-width`}>
              <h2>{name}</h2>
              <div>{description}</div>
            </button>
          ))}
      </div>
      <Link to="/volunteer/add">
        <button className="success full-width">Add Opportunities</button>
      </Link>
    </div>
  );
};
