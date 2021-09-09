//import Level from '../components/actions/Level.jsx';
import reducer, { initializeEnemy, initializeTeam, attack, defend } from '../reducers/battleReducer';

const initialState = {
  enemy: {},
  player: [],
  count: 0,
  damage: 0,
  enemyDamage: 0,
  damagedPlayer: {},
  battleState: 'red'
}



test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      enemy: {},
      player: [],
      count: 0,
      damage: 0,
      enemyDamage: 0,
      damagedPlayer: {},
      battleState: 'red'
    }
  )
})

test('should update the enemy part of global state', () => {

  const previousState = {
    enemy: {},
    player: [],
    count: 0,
    damage: 0,
    enemyDamage: 0,
    damagedPlayer: {},
    battleState: 'red'
  };
  const stats = {

    health : 10,

}

  expect(reducer(previousState, initializeEnemy(stats))).toEqual(
    {
      enemy: {
        health : 10,
    },
      player: [],
      count: 0,
      damage: 0,
      enemyDamage: 0,
      damagedPlayer: {},
      battleState: 'red'
    }
  )
})

test('should add a team to global state and set status to true', () => {
  const players = [{attack : 5}]

  expect(reducer(initialState, initializeTeam(players))).toEqual(
    {
      enemy: {},
      player: [{attack: 5, status: true}],
      count: 0,
      damage: 0,
      enemyDamage: 0,
      damagedPlayer: {},
      battleState: 'red'
    }
  )
})


test('should solve attack logic', () => {
  const previousState = {
    enemy: {health: 5},
    player: [{attack: 5, status: true, mana: 5}],
    count: 0,
    damage: 0,
    enemyDamage: 0,
    damagedPlayer: {},
    battleState: 'red'
  }


  expect(reducer(previousState, attack({power: 1, mana: 1}))).toEqual(
    {
      enemy: {health: 4, status: true},
      player: [{attack: 5, mana: 4, status: false}],
      count: 1,
      damage: 1,
      enemyDamage: 0,
      damagedPlayer: {},
      battleState: 'red'
    }
  )
})

test('should solve defend logic', () => {
  const previousState = {
    enemy: {health: 5},
    player: [{health: 5, attack: 5, status: true, mana: 5}],
    count: 0,
    damage: 0,
    enemyDamage: 0,
    damagedPlayer: {},
    battleState: 'red'
  }


  expect(reducer(previousState, defend({power: 1}))).toEqual(
    {
      enemy: {health: 5, status: false},
      player: [{health: 4, attack: 5, mana: 5, status: true}],
      count: 0,
      damage: 0,
      enemyDamage: 1,
      damagedPlayer: {health: 4, attack: 5, mana: 5, status: true},
      battleState: 'red'
    }
  )
})


