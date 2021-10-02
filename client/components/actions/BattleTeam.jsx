import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { useAuth, currentUser } from '../../../src/contexts/AuthContext';
import IndividualCharacter from '../IndividualCharacter.jsx';
import DescriptionBox from '../DescriptionBox.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { modify, changeBattleState } from '../../reducers/battleReducer';



const Members = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;

`;

const Member = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  min-width: 500px;


`;

const Name = styled.div`
  margin: 10px;
  width: 50px;
`;



const BattleTeam = (props) => {

  // const { character } = props;
  const player = useSelector((state) => state.battle.player);
  const { currentUser } = useAuth();


  const dispatch = useDispatch();

  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/teams', {
  //         params: {
  //           username: currentUser.email
  //         }
  //       });
  //       console.log(response);

  //       addChar(response.data.rows);
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }

  //   fetchData();

  // }, [])




  if(player.length !== 0) {
    return(
      <Members>
        {player.map((item, index) => {

          return(
                <Member key = {index}>
                  <IndividualCharacter values = {item} key = {item}/>
                  <Name key = {item.name}>{item.name}</Name>
                  <DescriptionBox values = {item} index = {index}/>
                </Member>
          );

            //need to add a description, can i reuse the modal? probably just make a new one
        })}
      </Members>
    )
  } else {
    return <div>LOADING</div>
  }


}


export default BattleTeam;