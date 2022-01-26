export const initialState:taskState = {
  isLoading: false,
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
