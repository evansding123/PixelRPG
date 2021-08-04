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
import LandingPage from './LandingPage.jsx';
import Team from './Team.jsx';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import { AuthProvider } from '../../src/contexts/AuthContext';

export const ThemeContext = React.createContext('light');

const NavBar = styled.div`
  display: flex;
  > a {
    margin-right: 6px;
  }
`;

const App = (props) => {


const [user, setUser] = useState('');

const addEmail = (email) => {
  setUser(email);
}


//const history = useHistory();

return (
  <div>
  <Router>
    <AuthProvider>
      <NavBar>
          <Link to ='/'>Home</Link>
          <Link to ='/signup'>Sign up</Link>
          <Link to ='/summon'>Summon</Link>
          <Link to = '/team'>Teams</Link>
          <Link to = '/login'>Login</Link>
          {user}
      </NavBar>
      <Switch>
        <Route exact path = '/'>
          <Dashboard/>
        </Route>
        <Route path="/signup">
          <ThemeContext.Provider value = 'dark'>
            <LandingPage callback = {addEmail} />
          </ThemeContext.Provider>
        </Route>
        <Route path = '/login'>
          <Login />
        </Route>
        <Route path = '/summon'>
          <Summon />
        </Route>
        <Route path = '/team'>
          <Team/>
        </Route>
      </Switch>
    </AuthProvider>
  </Router>
  </div>
);


}

export default App;