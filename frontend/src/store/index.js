import { configureStore } from "@reduxjs/toolkit";
import plantsSlice from "./plants/plantsSlice.js";

export const plantsActions = plantsSlice.actions;
const store = configureStore({
  reducer: { plants: plantsSlice.reducer },
});

export default store;
