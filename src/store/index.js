import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordSlice';
import searchReducer from './searchSlice';
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    'word': wordReducer,
    'search': searchReducer,
    'session': authReducer,
  }
})
