import React, { useRef, useState } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import styled from 'styled-components';
import Summon from './Summon.jsx';
import Signup from './Signup.jsx';
import Team from './Team.jsx';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import PrivateRoute from './PrivateRoute.jsx'
import NavBar from './NavBar.jsx';
import Adventure from './actions/Adventure.jsx'
import { AuthProvider } from '../../src/contexts/AuthContext';



//export const ThemeContext = React.createContext('light');


const App = (props) => {



  return (
    <div>
    <Router>
      <AuthProvider>
        <NavBar/>
        <Switch>
          <PrivateRoute exact path = '/' component = {Dashboard}/>
          <Route path='/signup' component = {Signup} />
          <Route path = '/login' component = {Login} />
          <PrivateRoute path = '/summon' component = {Summon}/>
          <PrivateRoute path = '/team' component = {Team} />
          <PrivateRoute path = '/adventure' component = {Adventure} />
        </Switch>
      </AuthProvider>
    </Router>
    </div>
  );


}

export default App;