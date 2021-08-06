import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory
} from "react-router-dom";

import Level from './Level.jsx';



const Navigation = styled.div`
  display: flex;
  > a {
    margin-right: 6px;
  }
  justify-content: flex-start;
  align-items: flex-start;
`;




const Adventure = (props) => {

  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
  }

  // useEffect(() => {
  //   setClick(false);
  // }, [])

  return(
    <Router>
      <Navigation>
        {clicked && <Link to = '/adventure' onClick = {handleClick} >Back</Link>}
        {!clicked && <Link to = 'levelone' onClick = {handleClick}>Level One</Link>}
      </Navigation>
      <Switch>
        <Route exact path='/levelone' component = {Level} />
      </Switch>
    </Router>

  )


}


export default Adventure;