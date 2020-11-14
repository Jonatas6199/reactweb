import React from 'react'
import {Redirect ,Route } from 'react-router-dom'
import authentication from '../functions/authentication.js';

export default function PrivateRoute(props){
  if (authentication.authenticated()){
    return(
      <Route exact={true} path={props.path} component={props.component}/>)
  }
  else{
    return (
    <Redirect to ='/login'/>)
  }
}

