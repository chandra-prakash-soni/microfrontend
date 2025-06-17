import React from "react";
import {   Route, Switch,Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";


 
import Signup from "./components/Signup";
import Signin from "./components/Signin";


export default ({ history,onSignIn }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin/">
              <Signin onSignIn={onSignIn}/>
            </Route>
            <Route path="/auth/signup/">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};