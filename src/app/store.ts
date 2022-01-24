import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './taskSlice'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { testReducer } from './getTasks';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    test: testReducer
  },
  middleware: [sagaMiddleware],
  devTools: true
})
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
