import { ACTION_TYPES } from './actionTypes';


const initialState = {
  isLoading: false,
  data: [],
  error: null
}

function getTaskReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTION_TYPES.GET_TASK_REQ: {
      const newState = {
        ...state,
        isLoading: true
      };
      return newState
    }
    case ACTION_TYPES.GET_TASK_SUC: {
      return {
        ...state,
        isLoading: false,
        data: [...state.data,action.payload]
      }
    }
    case ACTION_TYPES.GET_TASK_ERR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    }
  }
}

export default getTaskReducer;
