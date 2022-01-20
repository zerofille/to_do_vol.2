import { takeLatest } from 'redux-saga/effects';
import { createTaskRequest, getTasksRequest, removeTaskRequest, changeStatusRequest } from '../app/taskSlice'
import createTaskSaga from './createTaskSaga'
import getTasksSaga from './getTasksSaga';
import removeTaskSaga from './removeTaskSaga';
import changeStatusSaga from './changeStatusSaga';

function* rootSaga() {
  yield takeLatest(createTaskRequest.toString(), createTaskSaga);
  yield takeLatest(getTasksRequest.toString(), getTasksSaga);
  yield takeLatest(removeTaskRequest.toString(), removeTaskSaga)
  yield takeLatest(changeStatusRequest.toString(), changeStatusSaga)

}

export default rootSaga;
