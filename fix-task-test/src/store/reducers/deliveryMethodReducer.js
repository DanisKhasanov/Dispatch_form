import { createSlice } from "@reduxjs/toolkit";

export const deliveryMethodSlice = createSlice({
  name: "deliveryMethod",
  initialState: "Доставка",
  reducers: {
    setDeliveryMethod: (state, action) => {
      return action.payload;
    },
    resetDeliveryMethod: () => {
      return "";
    },
  },
});

export const { setDeliveryMethod, resetDeliveryMethod } =
  deliveryMethodSlice.actions;
export default deliveryMethodSlice.reducer;
