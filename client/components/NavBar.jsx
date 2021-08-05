import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAuth, currentUser } from '../../src/contexts/AuthContext.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


const Navigation = styled.div`
  display: flex;
  > a {
    margin-right: 6px;
  }
  justify-content: flex-end;
  align-items: flex-end;
`;

const Email = styled.div`
  margin-right: 0;
`;

const NavBar = (props) => {

  const { currentUser } = useAuth();

  return (
    <Navigation>
            <Link to ='/'>Home</Link>
            <Link to ='/signup'>Sign up</Link>
            <Link to = '/login'>Login</Link>
            <Link to ='/summon'>Summon</Link>
            <Link to = '/team'>Teams</Link>
            <Email>{currentUser && currentUser.email}</Email>
    </Navigation>
  )



}


export default NavBar;
