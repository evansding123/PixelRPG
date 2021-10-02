import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {InfoButton} from '../styles/styles.jsx'
import MoveInfo from './MoveInfo.jsx';
import { useSelector, useDispatch } from 'react-redux'

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;


  margin: 10px;
  margin-left: 10px;

  > div {
    margin: 10px;
  }

`;

const CharStats = styled.div`
  display: flex;

  justify-content: center;
  border-style: solid;
  background-color: ${props => props.color};
  margin-bottom: 10px;


`;

const Moves = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: flex-start;


`;

const Move = styled.div`



`;








const DescriptionBox = (props) => {


  const [clicked, setClick] = useState(false);

  const player = useSelector((state) => state.battle.player);

  // const {name, health, range, attack, defense, speed, initial, moveSet, color, mana, exp, level, id} = props.values;

  const {name, health, range, attack, defense, speed, initial, moveSet, color, mana, exp, level, id} = player[props.index];



  const handleClick = ()=> {
    setClick(!clicked);
  }

  // let move = clicked ? <MoveInfo info = {item}/> : null;



  return (
    <>
    <CharStats color = {color}>
      <Stats>
        <div>Level: {level}</div>
        <div>Exp: {exp}</div>
        <div>Health: {health}</div>
        <div>Mana: {mana}</div>
        <div>Attack: {attack}</div>
        <div>Defense: {defense}</div>


      </Stats>
    </CharStats>
     <Moves>
     {/* <div> Moves: </div> */}
       {moveSet.map((item, index) => {
         return (
           <Move key = {index}>
             {/* <div>{item.name}</div> */}
             {<MoveInfo moveIndex = {index} character = {props.index} />}
           </Move>
         )
       })}
       {/* <InfoButton onClick = {handleClick}>Show</InfoButton> */}
     </Moves>
     </>
  )
}




export default DescriptionBox;