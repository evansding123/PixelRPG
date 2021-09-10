import React from 'react'
import ReactDOM from 'react-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { useAuth, currentUser, AuthProvider } from '../../src/contexts/AuthContext'
import IndividualCharacter from '../components/IndividualCharacter.jsx';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});



const item = {
  attack: 5,
  defense: 5
}

const value = {
  currentUser

}

//jest.mock('../components/IndividualCharacter.jsx');

test('should return a picture', () => {
  // act(() => {
  //   ReactDOM.render(
  //     <AuthProvider>
  //         <IndividualCharacter values = {item}></IndividualCharacter>
  //     </AuthProvider>, container);
  // });

  act(() => {
    render(
      <AuthProvider value = {value}>
          <IndividualCharacter values = {item}></IndividualCharacter>
      </AuthProvider>
    );
  })








  expect(screen.getByAltText('').toBeInTheDocument());
})
