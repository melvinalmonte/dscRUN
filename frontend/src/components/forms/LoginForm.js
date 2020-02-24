import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginForm = props => {
  const { email, password, submit, err } = props;
  return (
    <div className="columns is-centered is-vcentered login-base">
      <div className="column is-5">
        <div className="card">
          <div className="card-content">
            <h1 className="title login-title">Login</h1>
            <div className="field">
              <p className="control has-icons-left has-icons-right bd-notification">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  onChange={email}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right" />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left bd-notification">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  onChange={password}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <button className="button" type="button" onClick={submit}>
              Login
            </button>
            {err ? (
              <p className="has-text-danger error-pass">
                Invalid Email or Password, please try again.
              </p>
            ) : null}
            <p className="sign-up-link">
              Don&quot;t Have an Account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  email: PropTypes.func,
  password: PropTypes.func,
  submit: PropTypes.func,
  err: PropTypes.bool
};
