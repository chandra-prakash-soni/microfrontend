import React,{lazy, Suspense, useState, useEffect} from "react";
 
import { Router, Redirect,  Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Progress from "./components/Progress";
import {createBrowserHistory} from "history";
 

const AppLazy = lazy(()=>import('./components/AuthApp'))
const MarketingLazy  = lazy(()=>import('./components/MarketingApp'));
const DashboardLazy = lazy(()=>import('./components/DashboardApp'))
const history = createBrowserHistory()

export default ()=>{
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(()=>{
      if(isSignedIn){
        history.push('/dashboard')
      }

    },[isSignedIn])
    return(
    
    <Router history={history}>
        <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={<Progress/>}>
              <Switch>
                 <Route path="/auth">
                   <AppLazy onSignIn={() => setIsSignedIn(true)} />

                 </Route>
                <Route path='/dashboard'>
                  
                  {!isSignedIn && <Redirect to='/'/>} 
                  <DashboardLazy/>

                </Route>
                <Route path="/" component={MarketingLazy} />

            </Switch>
          </Suspense>
        
        
    </Router>
    
    )
}