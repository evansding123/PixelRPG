import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './Hero.jsx';
import SummonPic from '../pictures/SummonPic.gif';
// import {Pic} from './IndividualCharacter.jsx';


const Pic = styled.img`


  min-height: 20vh;
  min-width: 15%;

  overflow: hidden;
  margin: auto;
  cursor: pointer;

`;

const PagePos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
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
  top: 60%;
  text-align: center;
  font-family: 'VT323', monospace;

`;




const Summon = (props) => {

  const [heroNumber, createHero] = useState(0);
  const [count, addCount] = useState(0);
  const [clicked, setClick] = useState(true);



  const handleClick = () => {

    createHero(Math.round(Math.random() * 7) + 1);

    // addCount(count + 1);
    // createHero(count);
    setClick(false);

    //need to save hero into database around here. save it into a team

  }

  let summonPicture = clicked ? <Pic src = {SummonPic} alt = 'character'></Pic> : <div></div>


  return(
    <PagePos>
      {summonPicture}
      <Hero number = {heroNumber}/>
      <SummonButton onClick = {handleClick}>Summon</SummonButton>
    </PagePos>

  )


}



export default Summon;