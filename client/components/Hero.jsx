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
        level = {1}
        exp = {0}
        health = {10}
        picture = {stickman}
        name = 'Stickman'
        index = {1}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}
        width = '10%'
        height = '10vh'
      />,
    2: <IndividualCharacter
        health = {20} //these numbers can be random, within a range
        picture = {knight}
        name = 'Knight'
        index = {2}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}
        color = '#FFFF0080'

      />,
    3: <IndividualCharacter
        health = {30}
        picture = {archer}
        name = 'Archer'
        index = {3}
        range  = {2}
        attack = {5}
        defense = {5}
        speed = {10}
        color =  '#CC660080'

      />,
    4: <IndividualCharacter
        health = {10}
        picture = {alzy}
        name = 'Alzy'
        index = {4}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}
        color =  '#CC660080'


      />,
    5: <IndividualCharacter
        health = {10}
        picture = {cyclops}
        name = 'Cyclops'
        index = {5}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}
        color = '#00CCCC80'

      />,
    6: <IndividualCharacter
        health = {10}
        picture = {mysteriousMan}
        name = 'Mysterious Man'
        index = {6}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}
        color =  '#7F00FF80'

      />,
    7: <IndividualCharacter
          health = {10}
          picture = {priest}
          name = 'Priest'
          index = {6}
          range  = {1}
          attack = {5}
          defense = {5}
          speed = {10}
          color =  '#FFFF0080'
      />,
    8: <IndividualCharacter
        health = {10}
        picture = {vampire}
        name = 'Vampire'
        index = {6}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}
        color =  '#9933FF80'
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