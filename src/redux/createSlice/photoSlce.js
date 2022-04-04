import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk();

const photo = createSlice({
  name: "photo",
  initialState: {
    photos: [],
  },
  reducers: {
    addPhotos: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {},
});

const { actions, reducer } = photo;
export const { addPhotos } = actions;

export default reducer;
