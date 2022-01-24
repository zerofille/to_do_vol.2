import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../api';
import { initialState } from './initialState';

export interface IData {
  id: number,
  title: string,
  text: string,
  task_status: string
}

export const getTask = createAsyncThunk(
  'task/getTaskRequest',
  async () => {
    const response = await API.getTasks()
    return response.data

  }
)
export const createTask = createAsyncThunk(
  'task/createTaskRequest',
  async (userData:IData) => {
    const response = await API.postTask(userData);
    return response.data
  }
)

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getTaskRequest: (state, action) => {
      state.isLoading = true;
    },
    createTaskRequest: (state, action) => {
      state.isLoading = false;
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
  },
})

export const taskReducer = taskSlice.reducer
