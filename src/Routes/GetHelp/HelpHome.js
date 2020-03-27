import React from "react";
import { mockHelpOptions } from "../../Components/MockData";
import { Link } from "react-router-dom";

export default () => {
  const helpItems = mockHelpOptions().sort(
    ({ localDemand: a }, { localDemand: b }) => a - b
  );

  return (
    <div className="full-height justify-between flex-column text-center">
      <div
        className="flex-1 flex-column overflow-auto"
        style={{ background: "#ccc" }}
      >
        <h3>Reoccurring Assistance</h3>
        <button className="pseudo">None</button>
        <hr className="full-width" />
        <h3>Favored Assistance Options</h3>

        {helpItems.map(({ name, description, localDemand }) => (
          <button
            className={
              localDemand < 4
                ? "success"
                : localDemand < 7
                ? "warning"
                : "error"
            }
          >
            <div className="flex-column">
              <h4>{name}</h4>
              <div>{description}</div>
            </div>
          </button>
        ))}
      </div>
      <Link className="button" to="/help/all">
        See all options
      </Link>
    </div>
  );
};
