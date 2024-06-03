import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['data'],
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:4000/api', credentials: 'include'}),
    endpoints: builder => ({

        signupUser: builder.mutation({
            query: (body) => ({
                url: '/signup',
                method: 'POST',
                body
            })
        }),

        signInUser: builder.mutation({
            query: (body) => ({
                url: '/signIn',
                method: 'POST',
                body
            })
        }),

        googleSignIn: builder.mutation({
            query: (body) => ({
                url: '/google',
                method: 'POST',
                body
            })
        }),

        getUserDetails: builder.query({
            query: () => ({
                url: '/user_data',
                method: 'GET'
            }),
            providesTags: () => {
                return [{type:'data', id:'userData'}]
            }
        }),

        updateUser: builder.mutation({
            query: (body) => ({
                url: '/update_user',
                method: 'PATCH',
                body
            }),
            invalidatesTags: () => {
                return [{type:'data', id:'userData'}]
            }
        })
    })
})

export const { useSignupUserMutation, useSignInUserMutation, useGoogleSignInMutation, useGetUserDetailsQuery, useUpdateUserMutation } = userApi
export default userApi