import React from 'react'
import ReactDOM from 'react-dom';
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { useAuth, currentUser, AuthProvider } from '../../src/contexts/AuthContext'
import Enemy from '../components/actions/Enemy.jsx';
import { Provider } from 'react-redux';
import store from '../store.js';




afterEach(cleanup);

const stats = {

  level : 1,
  exp : 0,
  mana : 5,
  health : 10,
  picture : 'placeholder',
  name : 'demon',
  index : 1,
  range  : 1,
  attack : 5,
  defense : 5,
  speed : 10,
  width : '10%',
  height : '10vh',
  initial : true,
  moveSet: [
    {
      moveName: 'punch',
      power: 1,
      cost: 1,
    },
    {
      moveName: 'kick',
      power: 2,
      cost: 2,
    },
  ]

}


describe('enemy', () => {

  test ('should return a picture', async () => {
    const { getByAltText, debug } = render(
          <Provider store = {store}>
            <Enemy values = {stats}></Enemy>
          </Provider>

    );

    const test = await waitFor(() => getByAltText('enemy'));

    expect(test).toBeInTheDocument();
  })


  test ('should return text with health of 10', async () => {
    const { getByAltText, debug } = render(
          <Provider store = {store}>
            <Enemy values = {stats}></Enemy>
          </Provider>

    );

    const test = await waitFor(() => getByAltText('enemy'));

    expect(screen.getByText('Health: 10')).toBeInTheDocument();
  })





})