// @flow

import React from "react";

const TextField = ({
  label,
  name,
  value,
  handleChange
}: {
  label: string,
  name: string,
  value: string,
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        className="input"
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default TextField;
