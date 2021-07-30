import React, { useState, useEffect } from 'react';
import styled from 'styled-components';




const Portrait = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pic = styled.img`
  width: 10%;
  height: 10%;
  overflow: hidden;
  margin: auto;

`;


const IndividualCharacter = (props) => {

  return(
    <Portrait>
      <div>{props.index}</div>
      <Pic src = {props.picture} alt = 'character'></Pic>
      <div>{props.health}</div>
    </Portrait>
  )



}


export default IndividualCharacter;