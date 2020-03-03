import React from "react";
import Layout from "../components/layout";
import { SignUpForm } from "../components/forms";
import { SignUpHandler } from "../components/forms/helpers";

export const SignUp = () => {
  const signIn = SignUpHandler();
  return (
    <Layout>
      <SignUpForm
        email={signIn.handleEmail}
        password={signIn.handlePass}
        passValidate={signIn.handleValidate}
        submit={signIn.handleSignUp}
        err={signIn.err}
      />
    </Layout>
  );
};
