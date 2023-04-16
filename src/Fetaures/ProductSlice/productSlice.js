import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//* product Api data
export const getData = createAsyncThunk("getData/productSlice ", async () => {
  let response = await axios.get("https://fakestoreapi.com/products");
  let result = await response.data;
  return result
});

//*product single product data

export const singleProduct = createAsyncThunk(
  "singleProduct/productSlice",
  async (id) => {
    let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    let result = await response.data;
    return result;
  }
);

const initialState = {
  list: [],
  Product: {},
  isloading: true,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isloading = false;
    }).addCase(getData.pending, (state) => {
      state.isloading = true;
    }).addCase(getData.rejected, (state) => {
      state.isloading = false;
    }).addCase(singleProduct.fulfilled, (state, action) => {
      state.Product = action.payload;
      state.isloading = false;
    }).addCase(singleProduct.pending, (state) => {
      state.isloading = true;
    }).addCase(singleProduct.rejected, (state) => {
      state.isloading = false;
    });
  },
});

export default productSlice.reducer;
