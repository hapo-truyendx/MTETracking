import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from './../action/type';
import { authUser, loginUser } from './loginSaga';
import { onGetListNft } from './marketSaga';

export default function* watch() {
    yield all([
        takeLatest(types.LOGIN_REQUEST, loginUser),
        takeLatest(types.AUTH_REQUEST, authUser),
        takeLatest(types.LIST_NFTS_REQUEST, onGetListNft ),
    ]);
}
