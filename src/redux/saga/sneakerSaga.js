import { put, call } from "redux-saga/effects";
import { getDetailNft } from "../../service/marketApi";
import { getUserListNft } from "../../service/profile_nft";
import { status } from "../../ultis/const";
import { getDetailSuccess, getListSneakerSuccess, getListSneakerForSell } from "../action/sneakerAction";

export function* getListSneakerNft(data) {
    console.log(data, 'type1');
    const response = yield call(getUserListNft, data?.data ?? 0);
    console.log(response?.nfts);
    if(response.status === status.success) {
        if(data?.data == 0) {
           yield put(getListSneakerSuccess(response?.nfts)) 
        }
        else {
            yield put(getListSneakerForSell(response?.nfts))
        }
        
    }
}

export function* getDetailSneaker(data) {
    const response = yield call(getDetailNft, data.data)
    if(response.status === status.success) {
        yield put(getDetailSuccess(response?.nft))
    }
}

export function* onLevelUp(data) {

}

export function* onAttrUp(data) {

}

export function* onRepairNft(data) {

}

export function* onStart(data) {

}

export function* onStopNft(data) {
    
}