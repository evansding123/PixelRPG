import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Summon from './Summon.jsx';
import LandingPage from './LandingPage.jsx';

export const ThemeContext = React.createContext('light');

const App = (props) => {


const history = useHistory();

return (
  <div>
  <Router>
    <div>
        <Link to ='/'>Home</Link>
        <Link to ='/summon'>Summon</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <ThemeContext.Provider value = 'dark'>
          <LandingPage />
        </ThemeContext.Provider>
      </Route>
      <Route path = '/summon'>
        <Summon />
      </Route>
    </Switch>
  </Router>
  </div>
);


}

export default App;