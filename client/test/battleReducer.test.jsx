//import Level from '../components/actions/Level.jsx';
import reducer, { initializeEnemy } from '../reducers/battleReducer';



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

test('should update the enemy part of state', () => {

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

    level : 1,
    exp : 0,
    mana : 5,
    health : 10,
    picture : 'testtext',
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

  expect(reducer(previousState, initializeEnemy(stats))).toEqual(
    {
      enemy: {

        level : 1,
        exp : 0,
        mana : 5,
        health : 10,
        picture : 'testtext',
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

test('should add a team to global state', () => {
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