import { createSlice } from '@reduxjs/toolkit';

export const modeChange = createSlice({
  name: 'mode',
  initialState: {
    value: ''
  },
  reducers: {
    changeMode: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    }
  }
})

export const { changeMode } = modeChange.actions

export default modeChange.reducer