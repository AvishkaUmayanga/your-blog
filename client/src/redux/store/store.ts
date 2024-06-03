import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postSliceReducer from "../slices/postSlice";
import userApi from "../api/userApi";
import { persistReducer, persistStore }  from "redux-persist"
import storage from "redux-persist/lib/storage";
import userSliceReducer from "../slices/userSlice";
import sideBarSliceReducer from "../slices/sideBarSlice";
import postApi from "../api/postApi";

const rootReducer = combineReducers({
    postSlice: postSliceReducer,
    userSlice: userSliceReducer,
    sideBarSlice: sideBarSliceReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
})

const persistConfig = {
    key : 'root',
    storage,
    version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getMiddleWare => getMiddleWare().concat(userApi.middleware, postApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)
