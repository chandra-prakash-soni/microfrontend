import React from "react";
import {   Route, Switch,Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";


export default ({history})=>{
    return(<div>
        <StylesProvider>
           <Router history={history}>
  <Switch>
    <Route exact path="/pricing" component={Pricing} />
    <Route path="/" component={Landing} />
  </Switch>
</Router>
            
        </StylesProvider>
    </div>)
}