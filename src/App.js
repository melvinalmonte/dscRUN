import React from "react";
import { Route, Router } from "react-router-dom";
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
import { LandingPage } from "./pages/LandingPage";
import { Auth } from "./utils/Auth";

function App() {
  const { auth, loading } = Auth();

  if (loading) {
    return (
      <Layout>
        <h1>Loading</h1>
      </Layout>
    );
  }

  return (
    <Router history={history}>
      <Route exact path="/" component={Redirect} />
      <Route exact path="/home" component={LandingPage} />
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
