import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../SliderSlice/SliderSlice";
import productReducer from "../ProductSlice/productSlice";
export const store = configureStore({
  reducer: {
    slider: sliceReducer,
    productSlice: productReducer,
  },
});
