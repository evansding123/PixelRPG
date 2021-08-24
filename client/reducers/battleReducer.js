import { createSlice } from '@reduxjs/toolkit';

export const battleReducer = createSlice({
  name: 'battle',
  initialState: {
    enemy: {},
    player: [],
    count: 0,
    damage: 0,
    enemyDamage: 0,
    damagedPlayer: {},
    battleState: 'red'
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
          state.player[i].mana -= action.payload.mana;
          state.player[i].status = false;
        }
      }

      state.damage = action.payload.power;


      if(state.count >= state.player.length) {
        //state.damage = 0;
        state.enemy.status = true;
      }




    },

    defend: (state, action) => {
      //enemy attacks and player has to defend
      //damages random player
      let random = Math.floor(Math.random() * state.player.length);

      state.player[random].health -= action.payload.power;

      //finds player who got damaged
      state.damagedPlayer = state.player[random];
      if(state.player[random].health <= 0) {
        state.player[random].color = '#606060';
        state.player[random].status = false;
      }

      //saves state of enenmy damage to display
      state.enemyDamage = action.payload.power;
      //gives turn back to player
      state.count = 0;
      state.enemy.status = false;

      for(var i = 0; i < state.player.length; i++) {
        if(state.player[i].color !== '#606060') {
          state.player[i].status = true;
        }

      }







    },

    resetDamage: (state) => {
      state.damage = 0;

    },

    resetEnemyDamage: (state) => {
      state.enemyDamage = 0;
    },

    changeBattleState: (state, action) => {

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

export const { initializeEnemy, initializeTeam, attack, defend, modify, resetDamage, resetEnemyDamage, changeBattleState } = battleReducer.actions

export default battleReducer.reducer