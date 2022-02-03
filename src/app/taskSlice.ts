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

export const getTaskAction = createAsyncThunk(
  'task/getTask',
  async (params: object) => {
    const response = await API.getTasks(params)
    return response.data

  }
)
export const getFilterSortTaskAction = createAsyncThunk(
  'task/getFilterSortTask',
  async (params: any) => {
    const response = await API.getTasks(params)
    return response.data
  }
)

export const createTaskAction = createAsyncThunk(
  'task/createTask',
  async (userData: IData) => {
    const response = await API.postTask(userData);
    return response.data
  }
)
export const removeTaskAction = createAsyncThunk(
  'task/removeTask',
  async (data: IRemove) => {
    const response = await API.removeTask(data);
    return response
  }
)
export const changeStatusAction = createAsyncThunk(
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
    builder.addCase(getTaskAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;

    });
    builder.addCase(getFilterSortTaskAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;

    });
    builder.addCase(createTaskAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload)
      toast.success('Task added')
    });
    builder.addCase(removeTaskAction.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status === 200) {
        state.data = state.data.filter((el) => el.id !== action.payload.data.id)
      }
      toast.success(`Task ${action.meta.arg.title} removed`)
    });
    builder.addCase(changeStatusAction.fulfilled, (state, action) => {
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
