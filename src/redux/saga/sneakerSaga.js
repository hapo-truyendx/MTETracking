import { put, call } from "redux-saga/effects";
import { getUserListNft } from "../../service/profile_nft";
import { status } from "../../ultis/const";

export function* getListNft() {
    const respone = yield call(getUserListNft);
    if(respone.status === status.success) {
        //dispathc
    }
}

export function* getDetailNft() {

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