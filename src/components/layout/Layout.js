import React from "react";
import PropTypes from "prop-types";
import SideBar from "../sidebar";

export const Layout = props => {
  const { children } = props;
  return (
    <div className="columns layout-base">
      <div className="column side-bar">
        <SideBar />
      </div>
      <div className="column is-11">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
