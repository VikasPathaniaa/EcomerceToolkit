import { createSlice } from "@reduxjs/toolkit";
import data from '../../Component/Slider/data.json'

export const SliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: data.length,
  },
  reducers: {
    nextSlide(state, action) {
      state.value = action.payload > state.length-1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length-1 : action.payload;
    },
    dotSlide(state , action) {
      let slide = action.payload
      state.value = slide
    },
 
  },
});

export const { nextSlide, prevSlide, dotSlide } = SliderSlice.actions;

export default SliderSlice.reducer;
