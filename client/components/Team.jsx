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
          for(var keys in item) {
            descriptionArray.push(keys + ' = ' + `{${item[keys]}} `);
          }

          // var description = JSON.parse(descriptionArray);
          return <IndividualCharacter {...descriptionArray}/>
        })}
      </div>
    )
  } else {
    return <div>PLEASE SUMMON A HERO</div>
  }


}

export default Team;