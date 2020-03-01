import React from "react";
import Layout from "../components/layout";
import { LoginForm } from "../components/forms";
import { LoginHandler } from "../components/forms/helpers";

export const Login = () => {
  const { handleEmail, handlePass, handleLogin, err } = LoginHandler();
  return (
    <Layout>
      <LoginForm
        email={handleEmail}
        password={handlePass}
        submit={handleLogin}
        err={err}
      />
    </Layout>
  );
};
