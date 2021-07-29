import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './Hero.jsx';



const PagePos = styled.div`
  display: flex;
  flex-direction: column;
`;


const SummonButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  cursor: pointer;
`;


const Summon = (props) => {

  const [heroNumber, createHero] = useState(0);
  const [count, addCount] = useState(0);

  let currentHero = '';

  const handleClick = () => {
    createHero(Math.round(Math.random() * 10));
    //need to save hero into database around here. save it into a team

  }


  return(
    <PagePos>
      <div>summon jpg</div>
      <Hero number = {heroNumber}/>
      <SummonButton onClick = {handleClick}>Summon</SummonButton>
    </PagePos>

  )


}



export default Summon;