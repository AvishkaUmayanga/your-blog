import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postApi = createApi({
    reducerPath: 'postApi',
    tagTypes: ['data'],
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:4000/api', credentials: 'include'}),
    endpoints: builder => ({
        createNewPost: builder.mutation({
            query: (body) => ({
                url: 'create_post',
                method: 'post',
                body
            }),
            invalidatesTags:() => {
                return [{type:'data', id:'postId'}]
            }
        }),
        getAllPosts: builder.query({
            query: () => ({
                url: 'get_posts',
                method: 'get',
            }),
            providesTags:() => {
                return [{type:'data', id:'postId'}]
            }
        })
    })
})

export const { useCreateNewPostMutation, useGetAllPostsQuery } = postApi
export default postApi