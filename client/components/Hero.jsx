import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IndividualCharacter from './IndividualCharacter.jsx';
//import alpha from '../pictures/alpha.png';
import stickman from '../pictures/stickman.jpeg';
import knight from '../pictures/knight.png'
import archer from '../pictures/archer.png'
import alzy from '../pictures/alzy.png'
import cyclops from '../pictures/cyclops.png'
import demon from '../pictures/demon.gif'
import priest from '../pictures/priest.png'
import vampire from '../pictures/vampire.png'
import mysteriousMan from '../pictures/mysteriousman.png'



const Hero = (props) => {

  const [hero, setHero] = useState(0);
  const [heroList, generateList] = useState({});

  useEffect(() => {
    setHero(props.number);

  })

  useEffect(() => {
    generateList(heroObject);
  }, [])



  //maybe its better to use an array for this
  let heroObject = {
    0: '',
    1: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : stickman,
          name : 'Stickman',
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

          ],
          status: true,
        }}

      />,
    2: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : knight,
          name : 'Knight',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#FFFF0080',
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
          ],
          status: true,
        }}

      />,
    3: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : archer,
          name : 'Archer',
          index : 1,
          range  : 2,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#CC660080',
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
          ],
          status: true,
      }}

      />,
    4: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : alzy,
          name : 'Alzy',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#CC660080',
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
          ],
          status: true,
      }}


      />,
    5: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 17,
          picture : cyclops,
          name : 'Cyclops',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#00CCCC80',
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
            {
              moveName: 'laser eyes',
              power: 7,
              cost: 5,
            },
          ],
          status: true,
      }}
      />,
    6: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : mysteriousMan,
          name : 'Mysterious Man',
          index : 1,
          range  : 1,
          attack : 8,
          defense : 5,
          speed : 10,
          color : '#7F00FF80',
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
            {
              moveName: 'assassinate',
              power: 7,
              cost: 3,
            }
          ],
          status: true,
      }}
      />,
    7: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : priest,
          name : 'Priest',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#FFFF0080',
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
          ],
          status: true,
        }}
      />,
    8: <IndividualCharacter
        values = {{
          level : 1,
          exp : 0,
          mana : 5,
          health : 10,
          picture : vampire,
          name : 'Vampire',
          index : 1,
          range  : 1,
          attack : 5,
          defense : 5,
          speed : 10,
          color : '#9933FF80',
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
          ],
          status: true,
        }}
    />,
  }

  // if(props.number === 1) {
  //   hero = 'one jpg';
  // }

  return(
    <div>{heroList[hero]}</div>
  )


}


export default Hero;