import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './src/redux/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
