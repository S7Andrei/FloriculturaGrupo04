import { configureStore } from "@reduxjs/toolkit";
import  plantsSlice from './plants/plantsSlice.js'

export const plantsActions = plantsSlice.actions
const store = configureStore({
    reducer: {plant: plantsSlice.reducer}

})

export default store