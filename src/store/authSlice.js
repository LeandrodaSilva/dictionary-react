import { createSlice } from '@reduxjs/toolkit';
import SessionStorage from "../util/SessionStorage";

export const authSlice = createSlice({
  name: 'session',
  initialState: {isLogged: SessionStorage.isLoggedIn()},
  reducers: {
    setLogged: (state, action) => {
      state.isLogged = action.payload;
      return state;
    }
  }
})

export const isLogged_map = (state) => state.session.isLogged;
export const authActions = authSlice.actions;
export default authSlice.reducer;
