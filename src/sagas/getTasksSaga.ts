import { put } from 'redux-saga/effects';
import * as API from '../api';
import { getTasksSuccess, getTasksError } from '../app/taskSlice';

function* createVotesSaga(action: any) {
  try {
    const response: object = yield API.getTasks();
    yield put(getTasksSuccess(response));

  } catch (error) {
    yield put(getTasksError(error));
  }
}
export default createVotesSaga;
