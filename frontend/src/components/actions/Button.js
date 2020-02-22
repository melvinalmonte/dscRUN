import React from "react";

export const Button = props => (
  <button onClick={props.actions} className="button is-large run-btn">
    {props.title}
  </button>
);
