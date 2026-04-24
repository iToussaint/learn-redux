import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (prevState) => {
      prevState.count += 1;
    },
    decrement: (prevState) => {
      prevState.count -= 1;
    },
    incrementByAmount: (prevState, action) => {
      prevState.count += action.payload.amount;
    },
    reset: (prevState) => {
      prevState.count = 0;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
