import { put } from 'redux-saga/effects';
import * as API from '../api';
import { createTaskSuccess, createTaskError } from '../app/taskSlice';

interface IData {
  id: number
  title: string
  text: string
  task_status: string
}

function* createTaskSaga(action: any) {
  try {
    const response: { data: IData[] } = yield API.postTask(action.payload);
    const {data} = response;
    yield put(createTaskSuccess(data));
  } catch (error) {
    yield put(createTaskError(error));
  }
}

export default createTaskSaga;
