import React from "react";
import PropTypes from "prop-types";

const SignUpForm = props => {
  const { email, password, passValidate, submit, err } = props;
  return (
    <div className="columns is-centered is-vcentered login-base">
      <div className="column is-5">
        <div className="card">
          <div className="card-content">
            <h1 className="title login-title">Sign Up</h1>
            <div className="field">
              <p className="control has-icons-left has-icons-right bd-notification">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
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
                  autoComplete="off"
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
            <div className="field">
              <p className="control has-icons-left bd-notification">
                <input
                  autoComplete="off"
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={passValidate}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <button className="button" type="button" onClick={submit}>
              Sign Up
            </button>
            {err ? (
              <p className="has-text-danger error-pass">
                Passwords do not match, please revise and try again.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

SignUpForm.propTypes = {
  email: PropTypes.func,
  password: PropTypes.func,
  passValidate: PropTypes.func,
  submit: PropTypes.func,
  err: PropTypes.bool
};
