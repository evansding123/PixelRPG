import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IndividualCharacter from './IndividualCharacter.jsx';
import alpha from '../pictures/alpha.png';


const Hero = (props) => {

  const [hero, setHero] = useState(0);
  const [heroList, generateList] = useState({});

  useEffect(() => {
    setHero(props.number);

  })

  useEffect(() => {
    generateList(heroObject);
  }, [])



  //should i store this as another jsx file?
  let heroObject = {
    0: 'something.svg', //can probably put a react component for each individual hero. maybe reuse? use character component
    1: <IndividualCharacter
        health = {10}
        picture = {alpha}
        index = {1}
      />,
    2: <IndividualCharacter
        health = {20} //these numbers can be random, within a range
        picture = {alpha}
        index = {2}
      />,
    3: <IndividualCharacter
        health = {30}
        picture = {alpha}
        index = {3}
      />,
    4: <IndividualCharacter
        health = {10}
        picture = {alpha}
        index = {4}
      />,
    5: <IndividualCharacter
        health = {10}
        picture = {alpha}
        index = {5}
      />,
    6: <IndividualCharacter
        health = {10}
        picture = {alpha}
        index = {6}
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