import React from "react";
import { firebaseAuth } from "../firebase/config";

export const Auth = () => {
  const [auth, setAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        setAuth(true);
        setLoading(false);
      } else {
        setAuth(false);
        setLoading(false);
      }
    });
    return () => {
      removeListener();
    };
  }, []);

  return {
    auth,
    loading
  };
};
