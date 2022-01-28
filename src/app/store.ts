import { createStore, combineReducers } from 'redux';
import getTaskReducer from './getTaskReducer'

const rootReducer = combineReducers({
  task:getTaskReducer
})

export const store = createStore(rootReducer);
