import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './taskSlice'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
