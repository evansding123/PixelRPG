import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



export const Name = styled.h4`
  margin: auto;
`;

export const SummonButton = styled.button`
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
  top:55%;
  text-align: center;
  font-family: 'VT323', monospace;

`;


export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > input {
    width: 15%;

  }

`;

export const InfoButton = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  font-family: 'VT323', monospace;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 4rem;
  border-radius: 5px;
`;

export const InactiveButton = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  font-family: 'VT323', monospace;
  background-color: grey;
  color: #A0A0A0;

  width: 4rem;
  border-radius: 5px;
`;


