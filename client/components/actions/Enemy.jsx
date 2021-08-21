import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { defend, resetDamage } from '../../reducers/battleReducer'



const Pic = styled.img`

  position: relative;
  margin: auto;
  overflow: hidden;
  cursor: pointer;

`;

const HealthBar = styled.div`
  margin: auto;
`;



const Enemy = (props) => {

  const {color, level, exp, name, health, mana, picture, range, attack, defense, speed, initial, height, width, margin, moveSet} = props.values;

  const dispatch = useDispatch();

  const enemy = useSelector((state) => state.battle.enemy);


  if(enemy.status === true) {
    //dispatch(resetDamage());
    setTimeout(function() {
      dispatch(resetDamage());
    }, 1000)
    setTimeout(function() {
      dispatch(defend({
        power: attack,
      }))
    }, 3000)
  }


  if(enemy.health <= 0) {
    return (
      <div>YOU HAVE DEFEATED THE ENEMY</div>
    )
  } else {
    return(
      <>
        <HealthBar>Health: {health}</HealthBar>
        <Pic src = {picture} alt = 'enemy'></Pic>
      </>
    )
  }




}


export default Enemy;