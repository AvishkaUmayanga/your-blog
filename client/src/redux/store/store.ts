import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../slices/postSlice";

const store = configureStore({
    reducer: {
        postSlice: postSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store