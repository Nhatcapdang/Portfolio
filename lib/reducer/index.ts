import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlicePublic = createApi({
  reducerPath: 'apiPublic',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: builder => ({}),
})
