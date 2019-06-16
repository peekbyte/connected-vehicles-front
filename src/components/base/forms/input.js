import React from "react";

const Input = props => (
  <div className="form-group">
    <label className="form-group__label">{props.title}</label>
    <input className="input__input"  {...props} />
  </div>
);

export default Input;
