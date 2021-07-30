import React, { useState, useEffect } from 'react';
import styled from 'styled-components';




const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Pic = styled.img`
  width: 10%;
  height: 10%;
  overflow: hidden;
  margin: auto;
  padding-left: 3%;

`;

const HealthBar = styled.div`
  margin: auto;
`;


const IndividualCharacter = (props) => {

  return(
    <Frame>
      <div>{props.index}</div>
      <Pic src = {props.picture} alt = 'character'></Pic>
      <br></br>
      <HealthBar>Health {props.health}</HealthBar>
    </Frame>
  )

  //might need to add a pop up modal that shows the right stuff


}


export default IndividualCharacter;