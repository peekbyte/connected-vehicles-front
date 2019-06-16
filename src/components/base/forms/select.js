import React from "react";
const Select = props => {

  
  return (<div className="form-group">
    <label className="form-group__label">{props.label}</label>
    <select className="select__list" {...props}  >

      {props.data.loading && <option>... Loading</option>}

      {props.emptyRow && <option />}
      {props.data.result.map((item, index) => (
        <option key={index} value={item[props.valueKey]}>
          {item[props.labelKey]}
        </option>
      ))}
    </select>
  </div>)
};
export default Select;
