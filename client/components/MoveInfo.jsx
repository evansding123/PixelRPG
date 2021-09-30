import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InfoButton, InactiveButton } from '../styles/styles.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../reducers/modeChange'
import { attack, resetEnemyDamage } from '../reducers/battleReducer'



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

  const [damage, setDamage] = useState(-1);

  //const {name, mana_cost, power, color, id_individual_character} = props.info;


  //props.index is the index of the individual character, index should be the name of the move


  const mode = useSelector((state) => state.mode.value);
  const initalState = useSelector((state) => state.battle.enemy);
  const player = useSelector((state) => state.battle.player);

  const {power, mana_cost, id, name} = player[props.character].moveSet[props.moveIndex];








  const dispatch = useDispatch();

  const handleClick = () => {
    //console.log('battle click');
    //pass something into my reducer function

    dispatch(resetEnemyDamage());

    dispatch(attack({
      power: power,
      mana: mana_cost,
      id: id
    }));



    // setDamage(power);

  }

  // if(!player[props.index].status) {
  //   //this is basically wnen player attack
  //   dispatch();

  //   //sets redux damage to an amount, where level can access the change in redux damaage?
  // }



    return (
      <>
      <MoveSets>
        {mode !== 'battle' && <InfoButton>{name}</InfoButton>}
        {mode === 'battle' && player[props.character].status && <InfoButton onClick = {handleClick}>{name}</InfoButton>}
        {mode === 'battle' && !player[props.character].status && <InactiveButton>{name}</InactiveButton>}
        <MoveModal>cost: {mana_cost}</MoveModal>
        <MoveModal>power: {power}</MoveModal>
      </MoveSets>
      {/* {!player[props.index].status && damage > 0 && <div>{`YOU DEALT ${damage} DAMAGE`}</div>} */}
      </>
    )


}






export default MoveInfo;