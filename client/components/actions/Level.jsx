import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import Team from '../Team.jsx';
import demon from '../../pictures/demon.gif'

const Pic = styled.img`

  position: relative;
  margin: auto;
  margin-left: ${props => props.margin};
  height: ${props => props.height};
  width: ${props => props.width};
  margin-top: 10%;
  overflow: hidden;
  cursor: pointer;

`;


const Level = (props) => {


  const stage = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ]


  const fighters = {

  }

  return(
    //maybe can reuse this. or make a separate component
    <>
    <div><Team/></div>
    <Pic src = {demon} alt = 'enemy'></Pic>
    </>
  )


}

export default Level;