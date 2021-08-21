import { createSlice } from '@reduxjs/toolkit';

export const battleReducer = createSlice({
  name: 'battle',
  initialState: {
    enemy: {},
    player: [],
    count: 0,
    damage: 0
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
      for(var i = 0; i < state.player.length; i++) {
        state.player[i].status = true;
      }
    },

    attack: (state, action) => {


      state.enemy.health -= action.payload.power;

      // state.enemy.status = true;
      state.count++;

      //finds the player that did the move and makes them unable to take another move
      for(var i = 0; i < state.player.length; i++) {
        if(state.player[i].id === action.payload.id) {
          state.player[i].status = false;
        }
      }

      state.damage = action.payload.power;


      if(state.count >= state.player.length) {
        state.damage = 0;
        state.enemy.status = true;
      }




    },

    defend: (state, action) => {
      //enemy attacks and player has to defend
      let random = Math.floor(Math.random() * state.player.length);
      state.player[random].health -= action.payload.power;
      state.enemy.status = false;
      state.count = 0;
      for(var i = 0; i < state.player.length; i++) {
        state.player[i].status = true;
      }



    },

    displayDamage: (state, action) => {

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

export const { initializeEnemy, initializeTeam, attack, defend, modify, displayDamage } = battleReducer.actions

export default battleReducer.reducer