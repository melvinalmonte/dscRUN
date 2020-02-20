import React from "react";
import Layout from "../components/layout";
import { LoginForm } from "../components/forms"
import {LoginHandler} from "../components/forms/helpers";

export const Home = () => {
    const login = LoginHandler();
  return (
    <Layout>
     <LoginForm
         email={login.handleEmail}
         password={login.handlePass}
         submit={login.handleLogin}
         err={login.err}
     />
    </Layout>
  );
};
