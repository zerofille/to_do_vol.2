import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from './taskSlice';
import { apiSlice } from '../rtkQuery/rtqApi';

const store = configureStore({
  reducer: {
    task: taskReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(apiSlice.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
