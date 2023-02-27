import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

//* product Api data
export const getData = createAsyncThunk("getData/productSlice ", async () => {
  let response = await axios.get(BASE_URL);
  return await response.data;
});

//*product single product data

export const singleProduct = createAsyncThunk(
  "singleProduct/productSlice",
  async (id) => {
    let response = await axios.get(`${BASE_URL}/${id}`);
    let result = await response.data;
    return result;
  }
);
