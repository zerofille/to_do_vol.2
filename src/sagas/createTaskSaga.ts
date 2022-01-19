import { put } from 'redux-saga/effects';
import * as API from '../api';
import { createTaskSuccess, createTaskError } from '../app/taskSlice';

function* createVotesSaga(action: any) {
  try {
    const response: object = yield API.postTask(action.payload);
    yield put(createTaskSuccess(response));

  } catch (error) {
    yield put(createTaskError(error));
  }
}
export default createVotesSaga;
