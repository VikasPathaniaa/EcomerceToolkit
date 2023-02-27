import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../Api/api";
import { singleProduct } from "../Api/api";
const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    list: [],
    Product: {},
    isloading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isloading = false;
    });
    builder.addCase(getData.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getData.rejected, (state) => {
      state.isloading = false;
    });
    builder.addCase(singleProduct.fulfilled, (state, action) => {
      state.Product = action.payload;
      state.isloading = false;
    });
    builder.addCase(singleProduct.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(singleProduct.rejected, (state) => {
      state.isloading = false;
    });
  },
});

export default productSlice.reducer;
