import { createSlice } from "@reduxjs/toolkit";

const initialPlantsState = { plants: [], plantSelected: {} };

const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsState,
  reducers: {
    handleGetPlants(state, action) {
      state.plants = action.payload;
    },
    handleDeletePlant(state, action) {
      state.plants = state.plants.filter(
        (plant) => plant.id !== action.payload
      );
    },
    handleGetPlantDetails(state, action) {
      const plantIndex = state.plants.findIndex(
        (plant) => plant.id === action.payload
      );

      if (plantIndex >= 0) {
        state.plantSelected = state.plants[plantIndex];
      } else {
        state.plantSelected = false;
      }
    },
    handleAddPlant(state, action){
      state.plants.push(action.payload) 
    }
  },
});

export default plantsSlice;
export const plantsActions = plantsSlice.actions;
