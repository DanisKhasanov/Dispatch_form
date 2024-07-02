import { createSlice } from "@reduxjs/toolkit";

const initialState = { address: "" };

const toLocationSlice = createSlice({
  name: "toLocation",
  initialState,
  reducers: {
    setToLocation(state, action) {
      return { ...state, ...action.payload };
    },
    resetToLocation() {
      return initialState;
    },
  },
});

export const { setToLocation, resetToLocation } = toLocationSlice.actions;
export default toLocationSlice.reducer;
