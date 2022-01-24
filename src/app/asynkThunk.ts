import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../api';
import { initialState } from './taskSlice';
import { TaskStatus } from '../utils/enums';
export interface IData {
  id: number,
  title: string,
  text: string,
  task_status: string
}
export const createTask = createAsyncThunk(
  'test/createTaskRequest',
  async (data: IData, thunkApi) => {
    const response = await API.postTask(data)
    return response.data
  }
)
const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    createTaskRequest: (state, actions) => {
      state.isLoading = true
    }
  },
  extraReducers: (builder) => {

    builder.addCase(createTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    })
  },
})



