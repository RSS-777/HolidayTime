import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
   language: string
}

const initialState: TypeInitialState = {
   language: "UA"
}
const languageSlice = createSlice({
    name: 'languages',
    initialState,
    reducers:  {
      setLanguage: (state, action) => {
        state.language = action.payload
      }
    }
});

export default languageSlice.reducer;
export const {setLanguage} = languageSlice.actions;