import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import modeChange from './reducers/modeChange';
import battleReducer from './reducers/battleReducer';



export default configureStore({
  reducer: {
    counter: counterReducer,
    mode: modeChange,
    battle: battleReducer
  }
})

