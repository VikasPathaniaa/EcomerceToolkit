import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

//* product Api data
export const getData = createAsyncThunk("getData/productSlice ", async () => {
  let response = await axios.get(BASE_URL);
  return await response.data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    list: [],
    isloading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.list = action.payload
      state.isloading = false
    });
      builder.addCase(getData.pending, (state) => {
        state.isloading = true
      });
      builder.addCase(getData.rejected, (state) => {
        state.isloading = false
      });
  },
});

export default productSlice.reducer
