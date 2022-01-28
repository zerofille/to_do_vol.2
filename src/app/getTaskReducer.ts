import { ACTION_TYPES } from './actionTypes';
import {ITasks} from '../Components/TaskList/TaskList';

const initialState = {
  isLoading: false,
  data: [{
    id: 3333,
    title: 'test',
    text: 'vvhsjs',
    task_status: 'done'
  }],
  error: null
}

interface IAction {
  type: string
  values: ITasks[]
  err?: string
}

function getTaskReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ACTION_TYPES.GET_TASK_REQ: {
      const newState = {
        ...state,
        isLoading: true
      };
      return newState
    }
    case ACTION_TYPES.GET_TASK_SUC: {

      const newState = {
        ...state,
        isLoading: false,
        data: [...action.values]
      }
      return newState
    }
    case ACTION_TYPES.GET_TASK_ERR: {

      const newState = {
        ...state,
        isLoading: false,
        error: action.err
      }
      return newState

    }
    default:
      return state
  }
}

export default getTaskReducer;
