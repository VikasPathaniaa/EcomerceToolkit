import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../SliderSlice/SliderSlice";
export const store = configureStore({
  reducer: {
    slider: sliceReducer,
  }
});
