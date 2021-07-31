import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IndividualCharacter from './IndividualCharacter.jsx';
import alpha from '../pictures/alpha.png';
import stickman from '../pictures/stickman.jpeg';
import knight from '../pictures/knight.png'
import archer from '../pictures/archer.png'
import alzy from '../pictures/alzy.png'
import cyclops from '../pictures/cyclops.png'

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
    0: '', //can probably put a react component for each individual hero. maybe reuse? use character component
    1: <IndividualCharacter
        health = {10}
        picture = {stickman}
        name = 'Stickman'
        index = {1}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}

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
      />,
    6: <IndividualCharacter
        health = {10}
        picture = {archer}
        name = 'Something'
        index = {6}
        range  = {1}
        attack = {5}
        defense = {5}
        speed = {10}
      />,
    7: '7.svg',
    8: '8.svg',
    9: '9.svg',
    10: '10.svg'

  }

  // if(props.number === 1) {
  //   hero = 'one jpg';
  // }

  return(
    <div>{heroList[hero]}</div>
  )


}


export default Hero;