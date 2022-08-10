import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import * as types from './../action/type';
import {authUser, loginUser} from './loginSaga';
import {onBuyItemNFts, onGetListNft} from './marketSaga';
import {onGetChoose, onGetFee, onMint} from './mintSaga';
import {onGetRunHistory, onGetTransaction, onGetUserInfo} from './profileSaga';
import {getDetailSneaker, getListSneakerNft} from './sneakerSaga';

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginUser),
    takeLatest(types.AUTH_REQUEST, authUser),
    takeLatest(types.LIST_NFTS_REQUEST, onGetListNft),
    takeLatest(types.BUY_NFTS, onBuyItemNFts),
    takeLatest(types.PROFILE_REQUEST, onGetUserInfo),
    takeEvery(types.RUN_HISTORY_REQUEST, onGetRunHistory),
    takeEvery(types.TRANSACTION_REQUEST, onGetTransaction),
    takeLatest(types.MINNT_CHOOSE_REQUEST, onGetChoose),
    takeEvery(types.MINT_FEE_REQUEST, onGetFee),
    takeLatest(types.MINT_REQUEST, onMint),
    takeLatest(types.SNEAKER_LIST_REQUEST, getListSneakerNft),
    takeLatest(types.SNEAKER_DETAIL_REQUEST, getDetailSneaker),
  ]);
}
