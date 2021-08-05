import React, { useRef, useState } from 'react';
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
import { AuthProvider } from '../../src/contexts/AuthContext';

//export const ThemeContext = React.createContext('light');

const NavBar = styled.div`
  display: flex;
  > a {
    margin-right: 6px;
  }
`;

const App = (props) => {


// const [user, setUser] = useState('');

// const addEmail = (email) => {
//   setUser(email);
// }


//const history = useHistory();

return (
  <div>
  <Router>
    <AuthProvider>
      <NavBar>
          <Link to ='/'>Home</Link>
          <Link to ='/signup'>Sign up</Link>
          <Link to = '/login'>Login</Link>
          <Link to ='/summon'>Summon</Link>
          <Link to = '/team'>Teams</Link>
      </NavBar>
      <Switch>
        <PrivateRoute exact path = '/' component = {Dashboard}/>
        <Route path='/signup' component = {Signup} />
        <Route path = '/login' component = {Login} />
        <PrivateRoute path = '/summon' component = {Summon}/>
        <PrivateRoute path = '/team' component = {Team} />
      </Switch>
    </AuthProvider>
  </Router>
  </div>
);


}

export default App;