import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualCharacter from './IndividualCharacter.jsx';
import { useAuth, currentUser } from '../../src/contexts/AuthContext'



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
            <table>
            <tr>
              <th><IndividualCharacter values = {item}/></th>
              <th>{item.name}</th>
            </tr>
            </table>
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