import { createSlice } from '@reduxjs/toolkit';

export const packagesSlice = createSlice({
  name: 'packages',
  initialState: [],
  reducers: {
    setPackages: (state, action) => {
      return action.payload;
    },
    resetPackages: () => {
      return [];
    },
  },
});

export const { setPackages, resetPackages } = packagesSlice.actions;
export default packagesSlice.reducer;
