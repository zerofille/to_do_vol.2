import { put } from 'redux-saga/effects';
import * as API from '../api';
import { getTasksSuccess, getTasksError } from '../app/taskSlice';

interface IData {
  id: number
  title: string
  text: string
  task_status: string
}

function* getTasksSaga(action: any) {
  try {
    const response: { data: IData[] } = yield API.getTasks();
    const {data} = response;
    console.log(data)
    yield put(getTasksSuccess(data));

  } catch (error) {
    yield put(getTasksError(error));
  }
}

export default getTasksSaga;
