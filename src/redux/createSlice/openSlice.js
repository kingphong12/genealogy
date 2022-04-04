import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
  name: "open",
  initialState: {
    opened: true,
  },
  reducers: {
    openSibar: (state, action) => {
      state.opened = action.payload;
    },
  },
});

const { reducer, actions } = openSlice;

export const { openSibar } = actions;
export default reducer;
