import { configureStore } from "@reduxjs/toolkit";
import plantsSlice from "./plants/plantsSlice.js";
import loginSlice from "./login/loginSlice.js";
export const plantsActions = plantsSlice.actions;
const store = configureStore({
  reducer: { plants: plantsSlice.reducer, login: loginSlice.reducer},
});

export default store;
