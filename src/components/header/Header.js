import React from "react";
import PropTypes from "prop-types";
import { logout } from "../../utils/services";

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
        <a className="navbar-item" href="/">
          Home
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <p className="navbar-link">More</p>

          <div className="navbar-dropdown">
            <a className="navbar-item" href="/groups">
              Groups
            </a>
            <a className="navbar-item" href="/clubs">
              Clubs
            </a>
            <a className="navbar-item" href="/availability">
              Availability
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item" href="#!">
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          {login ? (
            <div className="buttons">
              <a className="button" href="#!" onClick={() => logout()}>
                Logout
              </a>
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
