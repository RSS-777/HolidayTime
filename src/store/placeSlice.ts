import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  place: string
}

const initialState: TypeInitialState = {
  place: "",
}

const placeSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlace: (state, action) => {
      state.place = action.payload
    }
  }
});

export default placeSlice.reducer;
export const { setPlace } = placeSlice.actions;