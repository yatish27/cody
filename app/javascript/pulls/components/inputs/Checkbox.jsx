// @flow

import React from "react";

const Checkbox = ({
  label,
  name,
  checked,
  handleChange
}: {
  label: string,
  name: string,
  checked: boolean,
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void
}) => (
  <div className="field">
    <div className="control">
      <label className="checkbox">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        &nbsp;&nbsp;
        {label}
      </label>
    </div>
  </div>
);

export default Checkbox;
