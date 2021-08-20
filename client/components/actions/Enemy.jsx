import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

//i added something to test branch

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



const Enemy = (props) => {

  const {color, level, exp, name, health, mana, picture, range, attack, defense, speed, initial, height, width, margin, moveSet} = props.values;


  return(
    <>
      <Pic src = {picture} alt = 'enemy'></Pic>
      <div>Health: {health}</div>
    </>
  )

}


export default Enemy;