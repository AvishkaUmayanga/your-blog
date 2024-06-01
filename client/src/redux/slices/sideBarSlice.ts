import { createSlice } from "@reduxjs/toolkit";

type sideBarType = {
    activeTab: string
}
const initialState: sideBarType = {
    activeTab: 'Profile'
}

const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        setActiveTab: (state, action: {payload: string}) => {
            state.activeTab = action.payload
        }
    }
})

export const { setActiveTab } = sideBarSlice.actions
export default sideBarSlice.reducer