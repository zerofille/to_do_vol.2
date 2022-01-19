import { takeLatest } from 'redux-saga/effects';
import { createTaskRequest, getTasksRequest } from '../app/taskSlice'
import createTaskSaga from "./createTaskSaga"
import getTasksSaga from './getTasksSaga';
function* rootSaga() {
  yield takeLatest(createTaskRequest.toString(), createTaskSaga);
  yield takeLatest(getTasksRequest.toString(), getTasksSaga);

}

export default rootSaga;
