import React, { useState } from "react";

export default ({ dataset }) => {
  const [options, setOptions] = useState(
    dataset
      .sort((a, b) => 2 * +(a.name > b.name) - 1)
      .map(d => ({ ...d, selected: false }))
  );

  return (
    <div>
      <h3 className="text-center">All Options</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Interested?</th>
          </tr>
        </thead>
        <tbody>
          {options.map(({ name, description, selected }, i) => (
            <tr
              onClick={() => {
                const opts = [...options];
                opts[i].selected = !selected;
                setOptions(opts);
              }}
            >
              <td>
                <div className="flex-column">
                  <h4>{name}</h4>
                  <div>{description}</div>
                </div>
              </td>
              <td align="center">
                <label className="full-width full-height">
                  <input type="checkbox" disabled checked={selected} />
                  <span className="checkable" />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
