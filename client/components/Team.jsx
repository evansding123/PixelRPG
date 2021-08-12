import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import IndividualCharacter from './IndividualCharacter.jsx';
import DescriptionBox from './DescriptionBox.jsx';
import { useAuth, currentUser } from '../../src/contexts/AuthContext'


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



const Team = (props) => {


  const [character, addChar] = useState([]);
  const { currentUser } = useAuth();

  //send a get request to database for current team. depending on username too?
  useEffect(async () => {
    try {
      const response = await axios.get('/teams', {
        params: {
          username: currentUser.email
        }
      });
      console.log(response);

      addChar(response.data.rows);
    } catch (error) {
      console.log(error)
    }
  }, [])

  let descriptionArray = [];

  if(character.length !== 0) {
    return(
      <div>
        {character.map((item) => {
          item.width = '50px';
          item.height = '50px';
          item.margin = '5%';
          return(
              <Members>
                <Member>
                  <IndividualCharacter values = {item}/>
                  <Name>{item.name}</Name>
                  <DescriptionBox values = {item}/>
                </Member>
              </Members>

          );

            //need to add a description, can i reuse the modal? probably just make a new one
        })}
      </div>
    )
  } else {
    return <div>PLEASE SUMMON A HERO</div>
  }


}

export default Team;