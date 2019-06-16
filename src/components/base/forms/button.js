import React from "react";
const Button = props => <button className="button" {...props} >{props.label}</button>;
export default Button;