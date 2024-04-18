import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./placeSlice";
import likeReducer from "./likeSlice";
import userLoggedReducer from "./userLoggedSlice";
import indexSlideReducer from "./indexSlideSlice";

export const store = configureStore({
    reducer: {
        places: placeReducer,
        likeChoice: likeReducer,
        userLogged: userLoggedReducer,
        indexSlider: indexSlideReducer
    }
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;