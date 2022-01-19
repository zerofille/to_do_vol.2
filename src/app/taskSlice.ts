import { createSlice } from '@reduxjs/toolkit'

export interface taskState {
  isLoading: boolean,
  error: null | object,
  tasks: Array<object>

}

const initialState: taskState = {
  isLoading: false,
  error: null,
  tasks: []
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTaskRequest: (state, actions) => {
      state.isLoading = true
    },
    createTaskSuccess: (state, actions) => {
      state.isLoading = false;
      state.tasks.push(actions.payload);
    },
    createTaskError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload
    },
    getTasksRequest: (state, actions) => {
      state.isLoading = true
    },
    getTasksSuccess: (state, actions) => {
      state.isLoading = false;
      state.tasks.push(actions.payload);
    },
    getTasksError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload
    }
  }
})
export const {
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
  createTaskRequest,
  createTaskSuccess,
  createTaskError

} = taskSlice.actions
export default taskSlice.reducer;
