import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: builder => ({
    getTasks: builder.query<void, void>({
      query: () => '/tasks'
    })
  })
})
export const {useGetTasksQuery} = apiSlice
