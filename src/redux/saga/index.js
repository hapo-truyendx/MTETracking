import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from './../action/type';
import { loginUser } from './loginSaga';

export default function* watch() {
    yield all([takeLatest(types.LOGIN_REQUEST, loginUser)]);
}
