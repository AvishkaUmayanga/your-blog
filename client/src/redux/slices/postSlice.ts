import { createSlice } from "@reduxjs/toolkit";

interface PostStateType{
    title: string | null
    postImgUrl: string
    postBody: { postBodytext: string | null; textType: string | null }[]
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
        addTitle: (state, action: {payload: string | null}) => {
            state.title = action.payload
        },

        addPostBody: (state, action: { payload: { postBodyInput: string | null, textType: string | null } }) => {
            const { postBodyInput, textType } = action.payload;
            state.postBody.push({ postBodytext:postBodyInput, textType });
        },

        removeBodyItem: (state, action: {payload: number}) => {
            state.postBody.splice(action.payload,1)
        },

        addPostImg: (state, action) => {
            state.postImgUrl = action.payload
        },

        clearAllFields: (state) => {
            state.title = null;
            state.postImgUrl = ''
            state.postBody = []
        }
    }
})

export default postSlice.reducer
export const {addTitle, addPostBody, removeBodyItem, addPostImg, clearAllFields} = postSlice.actions