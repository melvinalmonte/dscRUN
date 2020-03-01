import React from "react";
import { logIn } from "../../../utils/services";

const LoginHandler = () => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [err, setErr] = React.useState(false);

  const handleEmail = e => setEmail(e.target.value);
  const handlePass = e => setPass(e.target.value);

  const handleLogin = () => {
    logIn(email, pass).catch(() => {
      setErr(true);
    });
  };
  return {
    err,
    handleEmail,
    handlePass,
    handleLogin
  };
};

export default LoginHandler;
