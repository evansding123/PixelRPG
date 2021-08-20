import { createSlice } from '@reduxjs/toolkit';

export const battleReducer = createSlice({
  name: 'battle',
  initialState: {
    enemy: {},
    player: [],
    count: 0,
    active: true
  },
  reducers: {
    initializeEnemy: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.enemy = action.payload
    },

    initializeTeam: (state, action) => {
      state.player = action.payload;
    },

    attack: (state, action) => {


      state.enemy.health -= action.payload.power;
      // state.enemy.status = true;
      state.count++;


      for(var i = 0; i < state.player.length; i++) {
        if(state.player[i].id === action.payload.id) {
          state.player[i].status = false;
        }
      }

      if(state.count >= state.player.length) {
        state.active = false;
        state.enemy.status = true;
      }




    },

    defend: (state, action) => {
      //enemy attacks and player has to defend
    },

    modify: (state) => {
      for(var i = 0; i < state.player.length; i++) {
        state.player[i].width = '50px';
        state.player[i].height = '50px';
        state.player[i].margin = '5%';
      }

    }
  }
})

export const { initializeEnemy, initializeTeam, attack, defend, modify } = battleReducer.actions

export default battleReducer.reducer