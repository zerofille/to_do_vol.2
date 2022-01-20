import { takeLatest } from 'redux-saga/effects';
import { createTaskRequest, getTasksRequest, removeTaskRequest } from '../app/taskSlice'
import createTaskSaga from './createTaskSaga'
import getTasksSaga from './getTasksSaga';
import removeTaskSaga from './removeTaskSaga';

function* rootSaga() {
  yield takeLatest(createTaskRequest.toString(), createTaskSaga);
  yield takeLatest(getTasksRequest.toString(), getTasksSaga);
  yield takeLatest(removeTaskRequest.toString(), removeTaskSaga)

}

export default rootSaga;
