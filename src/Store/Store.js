import { configureStore } from "@reduxjs/toolkit";
import slider from "../Fetaures/SliderSlice/SliderSlice";
import productSlice from "../Fetaures/ProductSlice/productSlice";
import cartSlice from "../Fetaures/CartSlice/cartSlice";
import LoginSlice from "../Fetaures/AuthSlice/LoginSlice";
export const store = configureStore({
  reducer: {
    slider,
    productSlice,
    cartSlice,
    LoginSlice
  },
});
