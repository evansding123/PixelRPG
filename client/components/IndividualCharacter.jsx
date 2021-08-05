import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PopUpInfo from './PopUpInfo.jsx';
import axios from 'axios';



const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;


export const Name = styled.h4`

  margin: auto;
  top: 45%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

`;

//meed to learn redux late to store global state
const IndividualCharacter = (props) => {

  const {color, level, exp, name, health, mana, picture, range, attack, defense, speed, initial, height, width, margin} = props.values;

  const Pic = styled.img`

  position: relative;
  margin: auto;
  margin-left: ${margin};
  height: ${height};
  width: ${width};
  margin-top: 10%;
  overflow: hidden;
  cursor: pointer;

`;


  const [data, setData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [exp, gainExp] = useState(0); // on useEffect, I can fetch the exp and level from the database

  //if exp is greater than a certain amount, i can increase level

  //if initial, post the data. if not, get the data from the database


  // useEffect(async () => {

  // }, [])

  const addInfo = async () => {
    if(initial === true) {
      try {
        const response = await axios.post('/characters', {
          level: level,
          exp: exp,
          health: health,
          mana: mana,
          picture: picture,
          name: name,
          attack: attack,
          defense: defense,
          speed: speed,
          intial: false,
          color: color,
          username: "evansding" //replace with actual username later
        })
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    } else {
      setData(data => {
        for(var keys in props) {
          data[keys] = props[keys];
        }
        return data;
      });
    }
  }


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = (closed) => {
    setIsOpen(closed);
  }



  let infoBox = modalIsOpen ? <PopUpInfo
    color = {color}
    name = {name}
    health = {health}
    range = {range}
    attack = {attack}
    defense = {defense}
    speed = {speed}
    initial = {initial}
    callback = {closeModal}
    addInfo = {addInfo}
  />
   : <div></div>;


  return(
    <div>
      <Frame>
        {/* <div>{props.index}</div> */}
        <Pic onClick = {openModal} src = {picture} alt = 'character'></Pic>
        <br></br>
        {/* <Name>{props.name}</Name> */}
      </Frame>
      {infoBox}
     </div>
  )

  //might need to add a pop up modal that shows the right stuff


}


export default IndividualCharacter;