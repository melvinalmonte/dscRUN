import React from "react";

const SignUpForm = props => {
  return (
    <div className="columns is-centered is-vcentered login-base">
      <div className="column is-5">
        <div className="card">
          <div className="card-content">
            <h1 className="title login-title">Sign Up</h1>
            <div className="field">
              <p className="control has-icons-left has-icons-right bd-notification">
                <input className="input" type="email" placeholder="Email" autoComplete="off" onChange={props.email} />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"/>
                </span>
                <span className="icon is-small is-right"/>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left bd-notification">
                <input
                    autoComplete="off"
                  className="input"
                  type="password"
                  placeholder="Password"
                  onChange={props.password}
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
                    onChange={props.passValidate}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <button className="button" type="button" onClick={props.submit}>Sign Up</button>
            {props.err ?
                <p className="has-text-danger error-pass">Passwords do not match, please revise and try again.</p> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
