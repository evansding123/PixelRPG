import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualCharacter from './IndividualCharacter.jsx';


const Team = (props) => {


  const [character, addChar] = useState([]);

  //send a get request to database for current team. depending on username too?
  useEffect(async () => {
    try {
      const response = await axios.get('/teams', {
        params: {
          username: 'evansding'
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
          return <IndividualCharacter values = {item}/> //need to add a description, can i reuse the modal? probably just make a new one
        })}
      </div>
    )
  } else {
    return <div>PLEASE SUMMON A HERO</div>
  }


}

export default Team;