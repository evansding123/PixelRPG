import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { useAuth, currentUser } from '../../../src/contexts/AuthContext';
import IndividualCharacter from '../IndividualCharacter.jsx';
import DescriptionBox from '../DescriptionBox.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { modify } from '../../reducers/battleReducer';



const Members = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

`;

const Member = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


`;

const Name = styled.div`
  margin: 10px;
  width: 50px;
`;



const BattleTeam = (props) => {

  const { character } = props;
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
  dispatch((modify()));

  if(character.length !== 0) {
    return(
      <Members>
        {character.map((item) => {

          return(
                <Member>
                  <IndividualCharacter values = {item}/>
                  <Name>{item.name}</Name>
                  <DescriptionBox values = {item}/>
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