import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PopUpInfo from './PopUpInfo.jsx';






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
  cursor: pointer;

`;

export const Name = styled.h4`
  margin: auto;

`;

//meed to learn redux late to store global state
const IndividualCharacter = (props) => {


  const [data, setData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setData(data => {
      for(var keys in props) {
        data[keys] = props[keys];
      }
      return data;
    });

  })


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = (closed) => {
    setIsOpen(closed);
  }

  const {name, health, range, attack, defense, speed} = props;

  let infoBox = modalIsOpen ? <PopUpInfo
    name = {name}
    health = {health}
    range = {range}
    attack = {attack}
    defense = {defense}
    speed = {speed}
    callback = {closeModal}
  />
   : <div></div>;


  return(
    <div>
      <Frame>
        {/* <div>{props.index}</div> */}
        <Pic onClick = {openModal} src = {props.picture} alt = 'character'></Pic>
        <br></br>
        <Name>{props.name}</Name>
      </Frame>
      {infoBox}
     </div>
  )

  //might need to add a pop up modal that shows the right stuff


}


export default IndividualCharacter;