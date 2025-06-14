import React from "react";
import ReactDom from 'react-dom';
import App from "./App";
// mount function to start up the app

const mount = (el) =>{
    ReactDom.render(
       <App />,
        el
    )
}


// if we are in development and in isolation, call mount immediatly


if(process.env.NODE_ENV==='development'){
    const devRoot = document.querySelector("#_marketing-dev-root");
    if(devRoot){
        mount(devRoot)
    }
}


// we are running though container and 
// 
// 
// we should export the mount function 

export {mount}