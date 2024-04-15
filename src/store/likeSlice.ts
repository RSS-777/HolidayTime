import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
    [placeId: string]: boolean
}

const initialState: TypeInitialState = {}

const likeSlice = createSlice({
    name: 'likeChoice',
    initialState,
    reducers:  {
      setLike: (state, action) => {
        const {placeId, value} = action.payload
        state[placeId] = value
      }
    }
});

export default likeSlice.reducer;
export const {setLike} = likeSlice.actions;