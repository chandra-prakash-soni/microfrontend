import React,{lazy, Suspense, useState} from "react";
 
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Progress from "./components/Progress";

const AppLazy = lazy(()=>import('./components/AuthApp'))
const MarketingLazy  = lazy(()=>import('./components/MarketingApp'));
 

export default ()=>{

    const [isSignedIn, setIsSignedIn] = useState(false)
    return(
    <BrowserRouter>
       
        <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={<Progress/>}>
              <Switch>
                 <Route path="/auth">
                   <AppLazy onSignIn={() => setIsSignedIn(true)} />

                 </Route>

                <Route path="/" component={MarketingLazy} />

            </Switch>
          </Suspense>
        
        
    </BrowserRouter>
    )
}