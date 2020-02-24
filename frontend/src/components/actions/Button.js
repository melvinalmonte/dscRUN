import React from "react";
import PropTypes from "prop-types";

export const Button = props => {
  const { actions, title } = props;
  return (
    <button onClick={actions} className="button is-large run-btn">
      {title}
    </button>
  );
};

Button.propTypes = {
  actions: PropTypes.func,
  title: PropTypes.string
};
