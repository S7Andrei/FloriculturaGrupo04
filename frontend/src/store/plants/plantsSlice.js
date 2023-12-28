import { createSlice } from "@reduxjs/toolkit";

const initialPlantsState = { plants: [] };

const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsState,
  reducers: {
    handleGetPlants(state, action) {
      state.plants = action.payload;
      //console.log(state.plants)
    },
  },
});

export default plantsSlice;
export const plantsAction = plantsSlice.actions;
