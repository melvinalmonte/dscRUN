import React from "react";
import Layout from "../components/layout";
import { Auth } from "../utils/Auth";

export const Clubs = () => {
  const { auth } = Auth();

  return (
    <Layout login={auth}>
      <h1 className="title">This is the Clubs Page.</h1>
    </Layout>
  );
};
