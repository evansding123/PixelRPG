import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {Name} from './IndividualCharacter.jsx';

Modal.setAppElement('#app');

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
    left: '70%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
  },
};



const PopUpInfo = (props) => {

  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    props.callback(false);
    setIsOpen(false);

  }

  const {name, health, range, attack, defense, speed} = props;

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
    </Modal>
  )

}


export default PopUpInfo;