import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getTaskReducer from './getTaskReducer'

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  task: getTaskReducer
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
