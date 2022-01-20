import { put } from 'redux-saga/effects';
import * as API from '../api';
import { removeTaskSuccess, removeTaskError } from '../app/taskSlice';

interface IId {
  id: number

}

function* removeTaskSaga(action: any) {

  try {

    yield API.removeTask(action.payload);



    yield put(removeTaskSuccess(action.payload));

  } catch (error) {
    yield put(removeTaskError(error));
    console.log(error)

  }
}

export default removeTaskSaga;
