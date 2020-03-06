import React from "react";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <Layout>
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <div className="column has-text-centered">
              <h1 className="title">
                Rutgers Newark DSC Study Groups Application, HELLO FROM GCP
              </h1>
              <div className="buttons is-centered">
                <Link to="/login">
                  {" "}
                  <p className="button">Log in</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
