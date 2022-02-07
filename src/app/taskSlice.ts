import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import * as API from '../api';
import { initialState } from './initialState';
import { RootState } from './store';
import { toast } from 'react-toastify';
import { IRemove } from '../api'


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
export const getTaskCountAction = createAsyncThunk(
  'task/getTaskCount',
  async () => {
     return await API.getTasksCount()
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
   return await API.removeTask(data);

  }
)
export const changeStatusAction = createAsyncThunk(
  'task/changeStatus',
  async (data: IData2) => {
    return await API.changeStatus(data)

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
    builder.addCase(getTaskCountAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskCount = action.payload;
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
export const state = (state: RootState) => state.task.data
