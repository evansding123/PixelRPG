import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {InfoButton} from '../styles/styles.jsx'
import MoveInfo from './MoveInfo.jsx';

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

const MovesStats = styled.div`
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
  justify-content: center;
  align-items: flex-start;
  margin-bottom: auto;

`;

const Move = styled.div`



`;








const DescriptionBox = (props) => {


  const [clicked, setClick] = useState(false);

  const {name, health, range, attack, defense, speed, initial, moveSet, color, mana} = props.values;

  const handleClick = ()=> {
    setClick(!clicked);
  }

  // let move = clicked ? <MoveInfo info = {item}/> : null;



  return (
    <>
    <MovesStats color = {color}>
      <Stats>

        <div>Health: {health}</div>
        <div>Mana: {mana}</div>
        <div>Attack: {attack}</div>
        <div>Defense: {defense}</div>
        <div>Speed: {speed}</div>

      </Stats>
    </MovesStats>
     <Moves>
     {/* <div> Moves: </div> */}
       {moveSet.map((item, index) => {
         return (
           <Move>
             {/* <div>{item.name}</div> */}
             {<MoveInfo color = {color} info = {item} index = {props.index}/>}
           </Move>
         )
       })}
       {/* <InfoButton onClick = {handleClick}>Show</InfoButton> */}
     </Moves>
     </>
  )
}




export default DescriptionBox;