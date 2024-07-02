import { createSlice } from '@reduxjs/toolkit';

export const recipientSlice = createSlice({
  name: 'recipient',
  initialState: { name: '', phones: '' },
  reducers: {
    setRecipient: (state, action) => {
      return action.payload;
    },
    resetRecipient: () => {
      return { name: '', phones: '' };
    },
  },
});

export const { setRecipient, resetRecipient } = recipientSlice.actions;
export default recipientSlice.reducer;
