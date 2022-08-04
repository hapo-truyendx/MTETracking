import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from './../action/type';
import { authUser, loginUser } from './loginSaga';
import { onBuyItemNFts, onGetListNft } from './marketSaga';
import { onGetUserInfo } from './profileSaga';

export default function* watch() {
    yield all([
        takeLatest(types.LOGIN_REQUEST, loginUser),
        takeLatest(types.AUTH_REQUEST, authUser),
        takeLatest(types.LIST_NFTS_REQUEST, onGetListNft ),
        takeLatest(types.BUY_NFTS, onBuyItemNFts),
        takeLatest(types.PROFILE_REQUEST, onGetUserInfo ),
    ]);
}
