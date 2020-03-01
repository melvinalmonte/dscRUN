import React from "react";
import PropTypes from "prop-types";
import Button from "../actions";

export const Sections = props => {
  const { btnAction, btnTitle, description } = props;
  return (
    <section className="section">
      <div className="container has-text-centered">
        <Button actions={btnAction} title={btnTitle} />
        <p className="group-description">{description}</p>
      </div>
    </section>
  );
};

Sections.propTypes = {
  btnAction: PropTypes.func,
  btnTitle: PropTypes.string,
  description: PropTypes.string
};
