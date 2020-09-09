import { createSlice } from '@reduxjs/toolkit';

export const wordSlice = createSlice({
  name: 'word',
  initialState: {entries: []},
  reducers: {
    setEntries: (state, action) => {
      state.entries = action.payload.entries;
      return state;
    }
  }
})

export const entries_map = (state) => state.word.entries;
export const wordActions = wordSlice.actions;
export default wordSlice.reducer;
