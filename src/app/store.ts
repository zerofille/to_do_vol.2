import { configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { taskReducer } from './getTasks';


const store = configureStore({
  reducer: taskReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type RootState = ReturnType<typeof store.getState>

export default store
