import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialValue = {
  counter: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggleMethod: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
// const counterReducer = (state = defaultState, action) => {
//   if (action.type == "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   } else if (action.type == "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };
const store=configureStore({
    reducer:counterSlice.reducer
});
export const counterActions=counterSlice.actions;
// const store = createStore(counterSlice.reducer);

export default store;
