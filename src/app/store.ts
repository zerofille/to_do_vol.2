import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from './taskSlice';


const store = configureStore({
  reducer: {
    task: taskReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
