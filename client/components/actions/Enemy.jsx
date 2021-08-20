import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { defend } from '../../reducers/battleReducer'



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

  const dispatch = useDispatch();

  const enemy = useSelector((state) => state.battle.enemy);


  if(enemy.status === true) {
    setTimeout(function() {
      dispatch(defend({
        power: attack,
      }))
    }, 2000)
  }


  if(enemy.health <= 0) {
    return (
      <div>YOU HAVE DEFEATED THE ENEMY</div>
    )
  } else {
    return(
      <>
        <div>Health: {health}</div>
        <Pic src = {picture} alt = 'enemy'></Pic>
      </>
    )
  }




}


export default Enemy;