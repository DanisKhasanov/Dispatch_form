import { createSlice } from "@reduxjs/toolkit";

export const fromLocationSlice = createSlice({
  name: "fromLocation",
  initialState: { address: "" },
  reducers: {
    setFromLocation: (state, action) => {
      return action.payload;
    },
    resetFromLocation: () => {
      return { address: "" };
    },
  },
});

export const { setFromLocation, resetFromLocation } = fromLocationSlice.actions;
export default fromLocationSlice.reducer;
