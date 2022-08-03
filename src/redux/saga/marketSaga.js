import { put, call } from "redux-saga/effects";
import { getListNft } from "../../service/marketApi";
import { status } from "../../ultis/const";
import {  getNftsSuccess } from "../action/marketAction";

export function* onGetListNft () {
    const market = yield call(getListNft)
    console.log(market, 'response');
    if(market.status === status.success) {
        yield put(getNftsSuccess(market.nfts))
    }
}