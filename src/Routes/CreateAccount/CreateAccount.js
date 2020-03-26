import React from "react";

export default () => {
  return (
    <div className="justify-between flex-column full-height">
      <div>
        <h1>Let's get some basic information</h1>

        <form>
          <input
            className="stack"
            placeholder="First"
            type="text"
            name="given-name"
          />
          <input
            className="stack"
            placeholder="Last"
            type="text"
            name="family-name"
          />
          <input
            className="stack"
            placeholder="Email"
            type="email"
            name="email"
          />
        </form>
      </div>

      <button className="success">Next</button>
    </div>
  );
};
