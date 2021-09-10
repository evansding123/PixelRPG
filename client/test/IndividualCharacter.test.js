import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import IndividualCharacter from '../components/IndividualCharacter.jsx';


const item = {
  attack: 5,
  defense: 5
}

test('should return a picture', () => {
  render(<IndividualCharacter values = {item}></IndividualCharacter>)

  expect(screen.getByText('blah').toBeInTheDocument());
})
