import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
  HashRouter
} from "react-router-dom";

import Level from './Level.jsx';
import demon from '../../pictures/demon.gif'



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

  const boss = {

    level : 1,
    exp : 5,
    mana : 5,
    health : 10,
    picture : demon,
    name : 'demon',
    index : 1,
    range  : 1,
    attack : 5,
    defense : 5,
    speed : 10,
    width : '10%',
    height : '10vh',
    initial : true,
    moveSet: [
      {
        moveName: 'punch',
        power: 1,
        cost: 1,
      },
      {
        moveName: 'kick',
        power: 2,
        cost: 2,
      },
    ]

}

  return(
    <HashRouter>
      <Navigation>
        {clicked && <Link to = '/adventure' onClick = {handleClick} >Back</Link>}
        {!clicked && <Link to = '/levelone' onClick = {handleClick}>Level One</Link>}
        {!clicked && <Link to = '/levelone' onClick = {handleClick}>Level Two</Link>}
      </Navigation>
      <Switch>
        <Route path='/levelone' render = {(props) => <Level {...props} stats = {boss}/> } />
        {/* <Route path='/levelone' render = {(props) => <Level {...props} stats = {demon}/> } /> */}
      </Switch>
    </HashRouter>

  )


}


export default Adventure;