import { put } from 'redux-saga/effects';
import * as API from '../api';
import { removeTaskSuccess, removeTaskError } from '../app/taskSlice';

interface IId {
  id: number;
  status: number
}
function* removeTaskSaga(action: any) {
  try {
    const response: IId = yield API.removeTask(action.payload);
    const {status, id} = response
    yield put(removeTaskSuccess({status, id}));
  } catch (error) {
    yield put(removeTaskError(error));
  }
}
export default removeTaskSaga;
