import React from "react";
import PropTypes from "prop-types";
import { logout } from "../../utils/services";
import history from "../../history";
import { NavLink, Router } from "react-router-dom";

export const Header = props => {
  const logo = process.env.PUBLIC_URL + "/images/run.png";
  const { login } = props;
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="R logo" />
        </a>
      </div>
      <div className="navbar-start">
        <Router history={history}>
          <span className="navbar-item">
            <NavLink to="/">Home</NavLink>
          </span>
          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-link">More</p>
            <div className="navbar-dropdown">
              <span className="navbar-item">
                <NavLink to="/groups">Groups</NavLink>
              </span>
              <span className="navbar-item">
                <NavLink to="/clubs"> Clubs</NavLink>
              </span>
              <span className="navbar-item">
                <NavLink to="/availability">Availability</NavLink>
              </span>
              <hr className="navbar-divider" />
              <span className="navbar-item">Contact us</span>
            </div>
          </div>
        </Router>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          {login ? (
            <div className="buttons">
              <p className="button" onClick={() => logout()}>
                Logout
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  login: PropTypes.bool
};
