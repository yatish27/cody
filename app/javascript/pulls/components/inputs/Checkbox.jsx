// @flow

import React from "react";

const Checkbox = ({
  label,
  name,
  checked,
  handleChange,
  hint
}: {
  label: string,
  name: string,
  checked: boolean,
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void,
  hint?: ?string
}) => (
  <div className="field">
    <div className="control">
      <label className="checkbox" htmlFor={name}>
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
    {hint != null ? <p className="help">{hint}</p> : null}
  </div>
);

export default Checkbox;
