import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import getTaskReducer from './getTaskReducer'
import { ITasks } from '../Components/TaskList/TaskList';


const rootReducer = combineReducers({
  task: getTaskReducer
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const store: Store<TaskState, TaskAction> = createStore(rootReducer, applyMiddleware(thunk));

interface TaskState {
  task: IState
}

interface TaskAction {
  type: string

}

interface IState {
  isLoading: boolean
  err?: string
  data: ITasks[]
}
