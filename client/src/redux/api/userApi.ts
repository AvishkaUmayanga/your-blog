import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:4000/api'}),
    endpoints: builder => ({
        signupUser: builder.mutation({
            query: (body) => ({
                url: '/signup',
                method: 'post',
                body
            })
        }),
        signInUser: builder.mutation({
            query: (body) => ({
                url: 'signIn',
                method: 'post',
                body
            })
        })
    })
})

export const { useSignupUserMutation, useSignInUserMutation } = userApi
export default userApi