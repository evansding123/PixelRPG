import React from 'react'
import ReactDOM from 'react-dom';
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { useAuth, currentUser, AuthProvider } from '../../src/contexts/AuthContext'
import IndividualCharacter from '../components/IndividualCharacter.jsx';




afterEach(cleanup);


const item = {
  attack: 5,
  defense: 5
}

describe('character page', () => {



  test ('should return a picture', async () => {
    const { getByAltText, debug } = render(
      <AuthProvider>
          <IndividualCharacter values = {item}></IndividualCharacter>
      </AuthProvider>
    );

    const test = await waitFor(() => getByAltText('character'));
    expect(test).toBeInTheDocument();
  })

  test ('should initialize modal when clicked', async () => {
    const { getByAltText, debug } = render(
      <AuthProvider>
          <IndividualCharacter values = {item}></IndividualCharacter>
      </AuthProvider>
    );

    const test = await waitFor(() => getByAltText('character'));
    fireEvent.click(test);
    //debug();
    expect(screen.getByLabelText("Example Modal")).toBeInTheDocument();
    expect(screen.getByText('Attack: 5')).toBeInTheDocument();
    expect(screen.getByText('Defense: 5')).toBeInTheDocument();

  })





  //expect(handleClick).toHaveBeenCalledTimes(1);
})
