import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {text: "example"},
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
      return state;
    }
  }
})

export const text_map = (state) => state.search.text;
export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
