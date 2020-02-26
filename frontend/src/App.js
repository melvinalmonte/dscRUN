import React, { useEffect, useState } from "react";
import { Route, Router } from "react-router-dom";
import { firebaseAuth } from "./firebase/config";
import Layout from "./components/layout";
import history from "./history";
import { Login } from "./pages/Login";
import PublicRoute from "./routes/PublicRoute";
import { SignUp } from "./pages/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import { Clubs } from "./pages/Clubs";
import { Groups } from "./pages/Groups";
import { Availability } from "./pages/Availability";
import { Redirect } from "./pages/Redirect";
import {LandingPage} from "./pages/LandingPage";

function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return (
      <Layout>
        <h1>Loading</h1>
      </Layout>
    );
  }

  return (
    <Router history={history}>
      <Route exact path="/" component={LandingPage} />
      <PublicRoute auth={auth} path="/login" component={Login} />
      <PublicRoute auth={auth} path="/redirect" component={Redirect} />
      <PublicRoute auth={auth} path="/signup" component={SignUp} />
      <PrivateRoute auth={auth} path="/clubs" component={Clubs} />
      <PrivateRoute auth={auth} path="/groups" component={Groups} />
      <PrivateRoute auth={auth} path="/availability" component={Availability} />
    </Router>
  );
}

export default App;
