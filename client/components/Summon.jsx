import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './Hero.jsx';


const Summon = (props) => {

  const [heroNumber, createHero] = useState(0);

  let currentHero = '';

  const handleClick = () => {
    createHero(Math.round(Math.random() * 10));

  }

  if(heroNumber !== 0) {
    let currentHero = 'notzero'
  }

  return(
    <>
    <div>summon jpg</div>
    <Hero number = {heroNumber}/>
    <button onClick = {handleClick}>Summon</button>
    </>

  )


}



export default Summon;