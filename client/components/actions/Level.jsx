import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { useAuth, currentUser } from '../../../src/contexts/AuthContext';
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../../reducers/modeChange'
import { initializeEnemy, initializeTeam, modify } from '../../reducers/battleReducer';
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

const LevelStructure = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Turn = styled.h3`
  margin: auto;
  color: blue;
`;

const EnemyTurn = styled.h3`
  margin: auto;
  color: #E96C6C;
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
  const enemy = useSelector((state) => state.battle.enemy);
  const player = useSelector((state) => state.battle.player);
  const count = useSelector((state) => state.battle.count);
  const damage = useSelector((state) => state.battle.damage);

  const dispatch = useDispatch();

  const { currentUser } = useAuth();




  //might need to set an initialState that has both the boss and the team information plus whos turn it is. we can update everything in that hook/state




  useEffect(() => {

    dispatch(changeMode('battle'));
    //probably have a useeffect that gets boss information here

    const fetchData = async () => {
      try {
        const response = await axios.get('/teams', {
          params: {
            username: currentUser.email
          }
        });
        console.log(response);

        dispatch(initializeTeam(response.data.rows));
      } catch (error) {
        console.log(error)
      }

    }

    fetchData();

    stats.status = false;

    dispatch(initializeEnemy(stats));


    //after the battle is over, wipe the reducer function

  }, [])


  dispatch((modify()));

  // if(count >= player.length) {
  //   //disable button
  //   dispatch()
  // }



  return(
    //maybe can reuse this. or make a separate component
    <LevelStructure>
      {enemy.status === false && <Turn>YOUR TURN</Turn>}
      {enemy.status === true && <EnemyTurn>ENEMY ATTACKS</EnemyTurn>}
      <br></br>
      <Enemy values = {enemy}/>
      {damage > 0 && <div>{`YOU DEALT ${damage} DAMAGE`}</div>}
      {damage > 0 && enemy.status === true && <div>{`ENEMY DEALT DEALT ${damage} DAMAGE`}</div>}

      <div><BattleTeam character = {player}/></div>
    </LevelStructure>
  )


}

export default Level;