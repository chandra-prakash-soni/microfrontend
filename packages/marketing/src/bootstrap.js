import React from "react";
import ReactDom from 'react-dom';
import App from "./App";
// mount function to start up the app
import {createMemoryHistory, createBrowserHistory} from "history";
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath || "/"]
    });    
    if(onNavigate){
        history.listen(onNavigate);
    }
    
    ReactDom.render(
       <App history={history} />,
        el
    )

return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
      console.log("container just navigated", location); // 👈 not very useful
    }
  };
}


// if we are in development and in isolation, call mount immediatly


if(process.env.NODE_ENV==='development'){
    const devRoot = document.querySelector("#_marketing-dev-root");
    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()})
    }
}


// we are running though container and 
// 
// 
// we should export the mount function 

export {mount}