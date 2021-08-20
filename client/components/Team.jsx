import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../reducers/modeChange'

import loading from '../pictures/loading.gif';

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

  const mode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const [character, addChar] = useState([]);
  const { currentUser } = useAuth();

  //send a get request to database for current team. depending on username too?
  useEffect(() => {

    const fetchData = async () => {
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

    }


    dispatch(changeMode(''));
    fetchData();

  }, [])

  let descriptionArray = [];

  if(character.length !== 0) {
    return(
      <Members>
        {character.map((item, index) => {
          item.width = '50px';
          item.height = '50px';
          item.margin = '5%';
          return(

                <Member>
                  <IndividualCharacter values = {item}/>
                  <Name>{item.name}</Name>
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

export default Team;