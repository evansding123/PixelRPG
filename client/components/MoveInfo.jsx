import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InfoButton } from '../styles/styles.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../reducers/modeChange'



const MoveSets = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;


  margin: 10px;
  margin-left: 10px;
  border-style: solid;
  border-radius: 10px;
  padding: 10px;
  background-color: ${props => props.color}

`;

const MoveModal = styled.div`
  margin: 5px;
`;



const MoveInfo =(props) => {

  const {name, mana_cost, power, color} = props.info;

  const mode = useSelector((state) => state.mode.value);

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <MoveSets color = {props.color}>
      {mode !== 'battle' && <InfoButton>{name}</InfoButton>}
      {mode === 'battle' && <InfoButton onClick = {handleClick}>{name}</InfoButton>}
      <MoveModal>cost: {mana_cost}</MoveModal>
      <MoveModal>power: {power}</MoveModal>
    </MoveSets>
  )

}






export default MoveInfo;