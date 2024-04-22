import { createSlice } from "@reduxjs/toolkit";

type TypeInitial = {
    user: {
        status: boolean,
        email: string
    }
};

const initialState: TypeInitial = {
    user: { status: false, email: '' }
}

const userLoggedSlice = createSlice({
    name: 'userLogged',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
});

export default userLoggedSlice.reducer;
export const { setUser } = userLoggedSlice.actions;