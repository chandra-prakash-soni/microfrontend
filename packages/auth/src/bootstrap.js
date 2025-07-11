import React from "react";
 
import ReactDom from 'react-dom';

import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
   const history = defaultHistory || createMemoryHistory({
          initialEntries: [initialPath  || '/']
      });   

  if(onNavigate){
        history.listen(onNavigate);
    }

  ReactDom.render(
        <App history={history} onSignIn={onSignIn} />,
         el
     )

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
      console.log("Auth just navigated to:", nextPathname);
    }
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
