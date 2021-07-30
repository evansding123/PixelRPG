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


`;

const Name = styled.div`
  margin: auto;

`;


const IndividualCharacter = (props) => {


  const [data, setData] = useState({});

  useEffect(() => {
    setData(data => {
      for(var keys in props) {
        data[keys] = props[keys];
      }
      return data;
    });

  })

  return(
    <Frame>
      <div>{props.index}</div>
      <Pic src = {props.picture} alt = 'character'></Pic>
      <br></br>
      <Name>{props.name}</Name>
    </Frame>
  )

  //might need to add a pop up modal that shows the right stuff


}


export default IndividualCharacter;