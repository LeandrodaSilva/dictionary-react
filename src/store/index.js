import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordSlice';
import searchReducer from './searchSlice';

export default configureStore({
  reducer: {
    'word': wordReducer,
    'search': searchReducer,
  }
})
