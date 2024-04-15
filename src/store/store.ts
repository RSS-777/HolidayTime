import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import placeReducer from "./placeSlice";
import likeReducer from "./likeSlice";

export const store = configureStore({
    reducer: {
        languages: languageReducer,
        places: placeReducer,
        likeChoice: likeReducer
    }
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;