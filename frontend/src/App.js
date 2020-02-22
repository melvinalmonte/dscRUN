import React, {useEffect, useState} from "react";
import {Route, Router} from "react-router-dom";
import { firebaseAuth } from "./firebase/config";
import Layout from "./components/layout";
import history from "./history";
import {Home} from "./pages/Home";
import PublicRoute from "./routes/PublicRoute";
import {SignUp} from "./pages/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import {Clubs} from "./pages/Clubs";
import {Groups} from "./pages/Groups";
import {Availability} from "./pages/Availability";
import {Redirect} from "./pages/Redirect";

function App() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
        setLoading(false)
      }
      else {
        setAuthed(false);
        setLoading(false)
      }
    });
    return () => {
      removeListener()
    }
  }, []);

  if(loading){
    return(
        <Layout>
          <h1>Loading</h1>
        </Layout>
    )
  }

  return (
      <Router history={history}>
          <Route exact path="/" component={Home}/>
          <PublicRoute authed={authed} path="/redirect" component={Redirect}/>
          <PublicRoute authed={authed} path="/signup" component={SignUp}/>
          <PrivateRoute authed={authed} path="/clubs" component={Clubs}/>
          <PrivateRoute authed={authed} path="/groups" component={Groups}/>
          <PrivateRoute authed={authed} path="/availability" component={Availability}/>
      </Router>
  );
}

export default App;
