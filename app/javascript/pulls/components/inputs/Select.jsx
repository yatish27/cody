// @flow
/* eslint-disable jsx-a11y/no-onchange */

import React from "react";

const Select = ({
  label,
  name,
  options,
  selected,
  hint,
  handleChange
}: {
  label: string,
  name: string,
  options: string[],
  selected: string,
  hint?: ?string,
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void
}) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <div className="select">
        <select name={name} value={selected} onChange={handleChange}>
          {options.map(option => <option key={option}>{option}</option>)}
        </select>
      </div>
    </div>
    {hint != null ? <p className="help">{hint}</p> : null}
  </div>
);

export default Select;
