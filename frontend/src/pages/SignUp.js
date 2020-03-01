import React from "react";
import Layout from "../components/layout";
import { SignUpForm } from "../components/forms";
import { SignUpHandler } from "../components/forms/helpers";

export const SignUp = () => {
  const {
    handleEmail,
    handlePass,
    handleValidate,
    handleSignUp,
    err
  } = SignUpHandler();
  return (
    <Layout>
      <SignUpForm
        email={handleEmail}
        password={handlePass}
        passValidate={handleValidate}
        submit={handleSignUp}
        err={err}
      />
    </Layout>
  );
};
