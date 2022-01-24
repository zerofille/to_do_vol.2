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
  'task/getTask',
  async () => {
    const response = await API.getTasks()
    return response.data

  }
)
export const createTask = createAsyncThunk(
  'task/createTask',
  async (userData: IData) => {
    const response = await API.postTask(userData);
    return response.data
  }
)
export const removeTask = createAsyncThunk(
  'task/removeTask',
  async (id: number) => {
    const response = await API.removeTask(id);
    return response
  }
)
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getTask: (state, action) => {
      state.isLoading = true;
    },
    createTask: (state, action) => {
      state.isLoading = true;
    },
    removeTask: (state, action) => {
      state.isLoading = true;
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload
    });
    builder.addCase(removeTask.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status === 200) {
        state.data = state.data.filter((el) => el.id !== action.payload.data.id)
      }
    })
  },
})

export const taskReducer = taskSlice.reducer
