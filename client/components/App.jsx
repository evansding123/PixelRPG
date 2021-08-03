import React from 'react';
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

export const ThemeContext = React.createContext('light');

const NavBar = styled.div`
  display: flex;
  > a {
    margin-right: 6px;
  }
`;

const App = (props) => {


//const history = useHistory();

return (
  <div>
  <Router>
    <NavBar>
        <Link to ='/'>Home</Link>
        <Link to ='/summon'>Summon</Link>
        <Link to = '/team'>Teams</Link>
    </NavBar>
    <Switch>
      <Route exact path="/">
        <ThemeContext.Provider value = 'dark'>
          <LandingPage />
        </ThemeContext.Provider>
      </Route>
      <Route path = '/summon'>
        <Summon />
      </Route>
      <Route path = '/team'>
        <Team/>
      </Route>
    </Switch>
  </Router>
  </div>
);


}

export default App;