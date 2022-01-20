import { createSlice } from '@reduxjs/toolkit'

interface ITasks {
  id: number,
  title: string,
  text: string,
  task_status: string
}

export interface taskState {
  isLoading: boolean,
  error: null | object,
  data: [ITasks]

}

const initialState: taskState = {
  isLoading: false,
  error: null,
  data: [{
    id: 1,
    title: '1111',
    text: 'json-server',
    task_status: 'done'
  }]
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
      state.data.push(actions.payload);
    },
    createTaskError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload
    },
    getTasksRequest: (state) => {
      state.isLoading = true
    },
    getTasksSuccess: (state, actions) => {
      state.isLoading = false;
      state.data = actions.payload;
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
