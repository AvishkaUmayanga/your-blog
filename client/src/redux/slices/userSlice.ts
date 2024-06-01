import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    isLoggedIn: boolean
}

const initialState: UserState = {
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        signInSuccess: (state, action: {payload: boolean}) => {
            state.isLoggedIn = action.payload
        },
        signOutSuccess:(state, action: {payload: boolean}) => {
            state.isLoggedIn = action.payload
        },
    }
})

export const { signInSuccess, signOutSuccess } = userSlice.actions
export default userSlice.reducer