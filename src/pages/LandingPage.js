import React from "react";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <Layout>
      <div className="columns landing-page-base is-vcentered">
        <div className="column">
          <section className="hero ">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Rutgers Newark DSC Study Groups Application
                </h1>
                <h2 className="subtitle">
                  Click <Link to="/login">here</Link> to login
                </h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
