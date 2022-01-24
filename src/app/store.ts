import { configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { taskReducer } from './taskSlice';



const store = configureStore({
  reducer: taskReducer,
  devTools:true
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store
