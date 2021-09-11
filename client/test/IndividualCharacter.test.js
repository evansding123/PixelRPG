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


//jest.mock('../components/IndividualCharacter.jsx');

it('should return a picture and a click should open a modal', async () => {
  // act(() => {
  //   ReactDOM.render(
  //     <AuthProvider>
  //         <IndividualCharacter values = {item}></IndividualCharacter>
  //     </AuthProvider>, container);
  // });


  const { getByAltText, debug } = render(
    <AuthProvider>
        <IndividualCharacter values = {item}></IndividualCharacter>
    </AuthProvider>
  );



  const test = await waitFor(() => getByAltText('character'));



  expect(test).toBeInTheDocument();
  fireEvent.click(test);
  debug();
  expect(screen.getByLabelText("Example Modal")).toBeInTheDocument();

  //expect(handleClick).toHaveBeenCalledTimes(1);
})
