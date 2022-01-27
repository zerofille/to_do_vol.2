import { createStore } from 'redux';
import getTaskReducer from './getTaskReducer'


const store = createStore(getTaskReducer);
