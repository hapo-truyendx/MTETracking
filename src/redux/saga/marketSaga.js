import { put, call } from "redux-saga/effects";
import { buyNft, getListNft } from "../../service/marketApi";
import { status } from "../../ultis/const";
import {  getNftsSuccess } from "../action/marketAction";

export function* onGetListNft (action) {
    
    const market = yield call(getListNft, action.data )
    console.log(market, 'response');
    if(market.status === status.success) {
        yield put(getNftsSuccess(market.nfts))
    }
}

export function* onBuyItemNFts (action) {
    console.log('action',action.data );
    const buyResponse = yield call(buyNft, action.data)
    console.log(buyResponse, 'buy');
    if(buyResponse.status === status.success) {
        yield call(onGetListNft);
    }
}