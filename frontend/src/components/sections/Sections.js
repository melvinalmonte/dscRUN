import React from "react";
import Button from "../actions";

export const Sections = props => (
  <section className="section">
    <div className="container has-text-centered">
      <h1 className="title groups-title">{props.title}</h1>
      <Button actions={props.btnAction} title={props.btnTitle} />
      <p className="group-description">{props.description}</p>
    </div>
  </section>
);
