import { put, call } from "redux-saga/effects";
import { mintChooseNft, mintFeeNft, mintNft } from "../../service/mintApi";
import { status } from "../../ultis/const";
import { getMintChooseSuccess,getMintFeeSuccess, onSelectItem } from "../action/mintAction";

export function* onGetChoose() {
  const mintResponse = yield call(mintChooseNft)
  if(mintResponse.status === status.success) {
    yield put(getMintChooseSuccess(mintResponse.nfts))
  }
}

export function* onGetFee(data) {
  const feeResponse = yield call(mintFeeNft, data.data[0], data.data[1])
  if(feeResponse.status === status.success) {
    yield put(getMintFeeSuccess(feeResponse.fee))
  }
}

export function* onMint(data) {
  console.log(data, 'action');
  const mintResponse = yield call(mintNft, data.data[0], data.data[1])
  console.log(mintResponse, 'respone');
  if(mintResponse.status === status.success) {
    yield put(getMintFeeSuccess(0))
    yield put(onSelectItem([]))
    yield onGetChoose()
  }
  else {
    yield put(getMintFeeSuccess(0))
    yield put(onSelectItem([]))
    yield onGetChoose()
  }
}
