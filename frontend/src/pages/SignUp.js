import React from "react";
import Layout from "../components/layout";
import { SignUpForm } from "../components/forms";
import {SignUpHandler} from "../components/forms/helpers";

export const SignUp = () => {
  const signin = SignUpHandler();
  return (
    <Layout>
      <SignUpForm
          email={signin.handleEmail}
          password={signin.handlePass}
          passValidate={signin.handleValidate}
          submit={signin.handleSignUp}
          err={signin.err}
      />
    </Layout>
  );
};
