import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth === false ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.elementType,
  auth: PropTypes.bool,
  location: PropTypes.object
};

export default PublicRoute;
