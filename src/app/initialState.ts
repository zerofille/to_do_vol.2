export const initialState:taskState = {
  isLoading: false,
  taskCount:undefined,
  error: undefined,
  data: [{
    id: 1,
    title: '1111',
    text: 'json-server',
    task_status: 'done'
  }]
}

export interface taskState {
  isLoading: boolean,
  taskCount?:number
  error?: SerializedError,
  data: {
    id: number,
    title: string,
    text: string,
    task_status: string
  }[]
}
export interface SerializedError {
  name?: string
  message?: string
  stack?: string
  code?: string
}
