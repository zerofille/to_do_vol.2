import { Dispatch } from 'redux';
import * as action from './getTaskCreators';
import * as API from '../api';

const getTaskThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(action.getTaskReq());
    API.getTasks()
    .then(res => {

      dispatch(action.getTaskSuc(res.data))
    })
    .catch(err => {
      dispatch(action.getTaskErr(err))
    })
  }
}
export default getTaskThunk;
