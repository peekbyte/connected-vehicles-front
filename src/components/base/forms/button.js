import React from "react";
const Button = props => <button className={`${props.className ? "button  " + props.className : "button"}`} {...props} >{props.children}</button>;
export default Button;