import { put } from 'redux-saga/effects';
import * as API from '../api';
import { changeStatusSuccess, changeStatusError } from '../app/taskSlice';


interface IData {
  id: number
  task_status: string
}

function* changeStatusSaga(action: any) {
  try {
    const response: { data: IData[] } = yield API.changeStatus(action.payload);
    const {data} = response;
    yield put(changeStatusSuccess(data));
  } catch (error) {
    yield put(changeStatusError(error));
  }
}

export default changeStatusSaga;
