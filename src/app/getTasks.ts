import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../api';
import { initialState } from './taskSlice';
import { TaskStatus } from '../utils/enums';
import { createTask } from './asynkThunk';
import {taskState} from './taskSlice';

export interface IData {
  id: number,
  title: string,
  text: string,
  task_status: string
}

export const getTask = createAsyncThunk<IData[]>(
  'test/getTaskTask',
  async () => {
    const response = await API.getTasks()
    console.log(response)
    return response.data

  }
)
const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    getTaskRequest: (state, action) => {
      state.isLoading = true;
    }
  },
  extraReducers: (builder) => {

    builder.addCase(getTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
  },
})

export const testReducer = testSlice.reducer
