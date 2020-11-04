import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'image',
  initialState: {images: []},
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
      return state;
    }
  }
})

export const images_map = (state) => state.image.images;
export const imageActions = imageSlice.actions;
export default imageSlice.reducer;
