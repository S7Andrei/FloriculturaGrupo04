import { createSlice } from "@reduxjs/toolkit";

const initialPlantsState = { plants: [] };

const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsState,
  reducers: {
    handleGetPlants(state, action) {
      state.plants = action.payload;
    },
    handleDeletePlant(state, action) {
      state.plants = state.plants.filter((plant) => plant.id !== action.payload);
    },
  },
});

export default plantsSlice;
export const plantsActions = plantsSlice.actions;
