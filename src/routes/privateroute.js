import React from 'react'
import {Redirect ,Route } from 'react-router-dom'
import authenticated from '../functions/authentication';

export default function PrivateRoute(props){
  var result = authenticated();
  
    if (result){
      return(
        <Route exact={true} path={props.path} component={props.component}/>)
    }
    else{
      return (
      <Redirect to ='/login'/>)
    }
 
}

