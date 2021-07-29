import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Hero = (props) => {

  const [hero, setHero] = useState(0);

  useEffect(() => {
    setHero(props.number)
  })


  let heroObject = {
    0: 'something.svg', //can probably put a react component for each individual hero. maybe reuse? use character component
    1: '1.svg',
    2: '2.svg',
    3: '3.svg',
    4: '4.svg',
    5: '5.svg',
    6: '6.svg',
    7: '7.svg',
    8: '8.svg',
    9: '9.svg',
    10: '2.svg'

  }

  // if(props.number === 1) {
  //   hero = 'one jpg';
  // }

  return(
    <div>{heroObject[hero]}</div>
  )


}


export default Hero;