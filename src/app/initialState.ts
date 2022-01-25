export const initialState: taskState = {
  isLoading: false,
  error: "",
  data: [{
    id: 1,
    title: '1111',
    text: 'json-server',
    task_status: 'done'
  }]
}
export interface taskState {
  isLoading: boolean,
  error?: string,
  data: {
    id: number,
    title: string,
    text: string,
    task_status: string
  }[]
}
