import { createSlice } from "@reduxjs/toolkit";

interface PostStateType{
    title: string
    postImgUrl: string
    postBody: { postBodytext: string; textType: string }[]
}
const initialState: PostStateType = {
    title: '',
    postImgUrl: '',
    postBody: []
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addTitle: (state, action: {payload: string}) => {
            state.title = action.payload
        },

        addPostBody: (state, action: { payload: { postBodyInput: string, textType: string } }) => {
            const { postBodyInput, textType } = action.payload;
            state.postBody.push({ postBodytext:postBodyInput, textType });
        },

        removeBodyItem: (state, action: {payload: number}) => {
            state.postBody.splice(action.payload,1)
        }
    }
})

export default postSlice.reducer
export const {addTitle, addPostBody, removeBodyItem} = postSlice.actions