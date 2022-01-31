import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IData } from '../app/taskSlice';


type DataArr = [IData]

export const apiSlice = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: builder => ({
    getTasks: builder.query<DataArr, void>({
      query: () => '/tasks'
    })
  })
})
export const {useGetTasksQuery} = apiSlice
