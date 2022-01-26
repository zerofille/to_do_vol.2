import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../api';
import { initialState } from './initialState';
import { RootState } from './store';


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
  async (data: number) => {
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
  reducers: {
    getTask: (state, action) => {
      state.isLoading = true;
    },
    createTask: (state, action) => {
      state.isLoading = true;
    },
    removeTask: (state, action) => {
      state.isLoading = true;
    },
    changeStatus: (state, action) => {
      state.isLoading = true
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(createTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload)
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    builder.addCase(removeTask.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status === 200) {
        state.data = state.data.filter((el) => el.id !== action.payload.data.id)
      }
    });
    builder.addCase(removeTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    builder.addCase(changeStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.find((el) => {
        if (el.id === action.payload.data.id) {
          el.task_status = action.payload.data.task_status
        }
      })
    });
    builder.addCase(changeStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    })
  },
})
export const taskReducer = taskSlice.reducer
export const selectCount = (state: RootState) => state.task.data
