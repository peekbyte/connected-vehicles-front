import React from "react";
import { Link } from "react-router-dom";

const CardItemRow = props => (
  <div className="card-item-row">
    <span className="card-item-row-label">{props.label + ": "}</span>
    <span className="card-item-row-value">
      {props.status && <span class={`status status--${props.status}`} />}
      {props.link ? <Link to={props.link}>{props.value}</Link> : props.value}
    </span>
  </div>
);

export default CardItemRow;
