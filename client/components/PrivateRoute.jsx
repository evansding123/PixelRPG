import React, { useRef, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { useAuth } from '../../src/contexts/AuthContext'



export default function PrivateRoute({component: Component, ...rest}) {

  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render = {props => {
        return currentUser ? <Component {...props} />: <Redirect to = '/login'/>
      }}
      >
    </Route>
  )
}