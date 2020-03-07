import React from "react";
import PropTypes from "prop-types";
import { Header } from "../header/Header";

export const Layout = props => {
  const { login, children } = props;
  return (
    <div>
      <Header login={login} />
      <div className="layout-base">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  login: PropTypes.bool,
  children: PropTypes.node.isRequired
};
