import reducer, { changeMode } from '../reducers/modeChange';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
     value: ''
    }
  )
})


test('should return the initial state', () => {

  const initialState = {
    value: ''
  }

  expect(reducer(initialState, changeMode('battle'))).toEqual(
    {
     value: 'battle'
    }
  )
})


