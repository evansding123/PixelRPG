import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {Name} from '../styles/styles.jsx';

Modal.setAppElement('#app');





const PopUpInfo = (props) => {

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(100, 100, 100, 0.75)'
    },
    content: {
      top: '25%',
      left: '65%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '40px',
      backgroundColor: `${props.color}`
    },
  };

  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    props.callback(false);
    setIsOpen(false);

  }

  const addInfo = () => {
    props.addInfo();
    props.callback(false);
  }

  const {name, health, range, attack, defense, speed, initial} = props;

  let addButton = initial ? <button onClick = {addInfo}>Add!</button> : <div></div>;

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
      <Name>{name}</Name>
      <br></br>
      <div> Health: {health}</div>
      <div>Range: {range}</div>
      <div>Attack: {attack}</div>
      <div>Defense: {defense}</div>
      <div>Speed: {speed}</div>
      <br></br>
      {addButton}
    </Modal>

    //conditional rendering for the add button
  )

}


export default PopUpInfo;