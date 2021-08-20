import { createSlice } from '@reduxjs/toolkit';

export const battleReducer = createSlice({
  name: 'battle',
  initialState: {
    value: {}
  },
  reducers: {
    initialize: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    }
  }
})

export const { initialize } = battleReducer.actions

export default battleReducer.reducer