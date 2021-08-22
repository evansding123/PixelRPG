import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { defend, resetDamage, resetEnemyDamage } from '../../reducers/battleReducer'



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

  useEffect(() => {

    if(enemy.status === true) {
      // dispatch(defend({
      //   power: attack,
      // }))

      setTimeout(function() {
        dispatch(resetDamage());
      }, 1000)

      setTimeout(function() {
        dispatch(defend({
          power: attack,
        }))
      }, 3000)
    }

  }, [enemy.status])


  //might not need this part?

  // if(enemy.status === false) {
  //   setTimeout(function() {
  //     dispatch(resetEnemyDamage());
  //   }, 2000)
  // }


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