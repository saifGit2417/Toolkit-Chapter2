import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        getAcounts: builder.query({
            query: () => `acounts`,
            providesTags: ['acounts'],
        }),
        addAcount: builder.mutation({
            query: (amount, id) => ({
                url: `acounts`,
                method: 'POST',
                body: { amount, id }
            }),
            invalidatesTags: ['acounts']
        }),
        updateAcount: builder.mutation({
            query: ({ id, amount }) => ({
                url: `acounts/${id}`,
                method: 'PATCH',
                body: { amount }
            }),
            invalidatesTags: ['acounts']
        }),
        deletAcount: builder.mutation({
            query: (id) => ({
                url: `acounts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['acounts']
        }),
    }),
})

export const { useGetAcountsQuery,
    useAddAcountMutation,
    useDeletAcountMutation,
    useUpdateAcountMutation } = adminApi