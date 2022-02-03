import { createAsyncThunk, createSlice, Action, AnyAction, isPending, isRejected } from '@reduxjs/toolkit';
import * as API from '../api';
import { initialState } from './initialState';
import { RootState } from './store';
import { toast } from 'react-toastify';
import { IRemove } from '../api/index'


export interface IData {
  id: number,
  title: string,
  text: string,
  task_status: string
}

interface IData2 {
  id: number
  task_status: string
}

export const getTask = createAsyncThunk(
  'task/getTask',
  async function Test(params: object) {
    const response = await API.getTasks(params)
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
  async (data: IRemove) => {
    const response = await API.removeTask(data);
    return response
  }
)
export const changeStatus = createAsyncThunk(
  'task/changeStatus',
  async (data: IData2) => {
    const response = await API.changeStatus(data)
    return response
  }
)
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;

    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload)
      toast.success('Task added')
    });
    builder.addCase(removeTask.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status === 200) {
        state.data = state.data.filter((el) => el.id !== action.payload.data.id)
      }
      toast.success(`Task ${action.meta.arg.title} removed`)
    });
    builder.addCase(changeStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.forEach((el) => {
          if (el.id === action.payload.data.id) {
            return el.task_status = action.payload.data.task_status
          }
          return el
        }
      )
      toast.success('Status changed')
    });
    builder.addMatcher(isPending,
      (state, action) => {
        state.isLoading = true;
      });
    builder.addMatcher(isRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        toast.error('ERROR')
      });
  },
})
export const taskReducer = taskSlice.reducer
export const selectCount = (state: RootState) => state.task.data
