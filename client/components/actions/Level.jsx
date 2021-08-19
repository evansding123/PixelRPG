import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import Team from '../Team.jsx';
import Enemy from './Enemy.jsx';
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

  //probably have a useeffect that gets boss information here




  const stage = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ]

  //temporary place to store enemy info

  const stats = {

      level : 1,
      exp : 0,
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
    //maybe can reuse this. or make a separate component
    <>
    <div><Team/></div>
    <Enemy pic = {demon} values = {stats}/>
    </>
  )


}

export default Level;