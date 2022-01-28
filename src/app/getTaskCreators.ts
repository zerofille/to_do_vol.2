import { ACTION_TYPES } from './actionTypes'

export const getTaskReq = () => {
  return {
    type: ACTION_TYPES.GET_TASK_REQ
  }
}
export const getTaskSuc = (values:IValues) => {
  return {
    type: ACTION_TYPES.GET_TASK_SUC,
    values
  }
}
export const getTaskErr = (err:any) => {
  return {
    type: ACTION_TYPES.GET_TASK_ERR,
    err
  }
}

interface IValues {
  id:number
  title:string
  text:string
  task_status:string
}
