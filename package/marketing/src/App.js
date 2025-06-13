import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";


export default ()=>{
    return(<div>
        <StylesProvider>
           <HashRouter>
  <Switch>
    <Route exact path="/pricing" component={Pricing} />
    <Route path="/" component={Landing} />
  </Switch>
</HashRouter>
            
        </StylesProvider>
    </div>)
}