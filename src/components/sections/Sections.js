import React from "react";
import PropTypes from "prop-types";
import Button from "../actions";

export const Sections = props => {
  const { title, btnAction, btnTitle, description } = props;
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title groups-title">{title}</h1>
        <Button actions={btnAction} title={btnTitle} />
        <p className="group-description">{description}</p>
      </div>
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string,
  btnAction: PropTypes.func,
  btnTitle: PropTypes.string,
  description: PropTypes.string
};
