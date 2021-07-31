import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './Hero.jsx';



const PagePos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;


const SummonButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: white;
  cursor: pointer;
  background-color: black;
  width: 25%;
  position: absolute;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 310px;
  text-align: center;
  font-family: 'VT323', monospace;

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