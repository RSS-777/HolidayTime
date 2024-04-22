import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  index: number
}

const initialState: TypeInitialState = {
  index: 0,
}

const sliderSlice = createSlice({
  name: 'indexSlider',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload
    }
  }
});

export default sliderSlice.reducer;
export const { setIndex } = sliderSlice.actions;