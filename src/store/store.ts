import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./placeSlice";
import likeReducer from "./likeSlice";
import userLoggedReducer from "./userLoggedSlice";

export const store = configureStore({
    reducer: {
        places: placeReducer,
        likeChoice: likeReducer,
        userLogged: userLoggedReducer
    }
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;