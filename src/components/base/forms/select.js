import React from "react";
const Select = props => {

  
  return (<div className="form-group">
    <label className="form-group__label">{props.title}</label>
    <select className="select__list" {...props}  >

      {props.loading && <option>... Loading</option>}

      {props.data && props.data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  </div>)
};
export default Select;
