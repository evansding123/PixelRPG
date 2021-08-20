import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../../reducers/modeChange'
import { initialize } from '../../reducers/battleReducer';
import BattleTeam from './BattleTeam.jsx';
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

  const mode = useSelector((state) => state.mode.value);
  const battle = useSelector((state) => state.battle.value);
  const dispatch = useDispatch();
  const [charInfo, setChar] = useState(stats);

  //probably have a useeffect that gets boss information here

  //might need to set an initialState that has both the boss and the team information plus whos turn it is. we can update everything in that hook/state




  useEffect(() => {

    dispatch(changeMode('battle'));
    //setChar(stats); // instead of doing this, pass something into reducer function to initialize state

    dispatch(initialize(stats));

    //after the battle is over, wipe the reducer function

  }, [])







  return(
    //maybe can reuse this. or make a separate component
    <>
      <div><BattleTeam/></div>
      <Enemy values = {stats}/>
    </>
  )


}

export default Level;