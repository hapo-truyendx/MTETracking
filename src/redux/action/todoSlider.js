import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';

export const addTodoAsync = createAction('todo/addTodoAsync');

function* addTodoSaga(action) {
  const data = yield call(addTodoAPI, action.payload);
  yield put(addTodo(data));
}

export function* todoSaga() {
  yield takeLatest(addTodoAsync, addTodoSaga);
}
